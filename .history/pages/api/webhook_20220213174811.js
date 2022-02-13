import { buffer } from 'micro';
import * as admin from 'firebase';

const serviceAccount = require('../../permission.json');

const app = !admin.apps.length
  ? admin.initializeApp({
      credential: admin.credential.cert(serviceAccount),
    })
  : admin.app();

const stripe = require('stripe')(
  'sk_test_51IpCBhIujyIA1co1kEOjISAGJJHikbZLIaMI5czZGkAuBWUpOoAwEroij6fMJRTvEvxr27D5yFXi457NVPwuLbD700qWUypUHy'
);

const endpointSecret =
  whsec_d2885573c0d39055c1e1c368086429ecef980d43886d8b6c6dedb951a62d72d1;

const fulfillOrder = async session => {
  return app
    .firestore()
    .collection('users')
    .doc(session.metadata.email)
    .collection('orders')
    .doc(session.id)
    .set({
      amount: session.amount_total / 100,
      amount_shipping: session.total_details.amount_shipping / 100,
      images: JSON.parse(session.metadata.images),
      timestamp: admin.firestore.FieldValue.serverTimestamp(),
    })
    .then(() => {
      console.log(`SUCCESS:order ${session.id} had been added to the DB`);
    });
};
export default async (req, res) => {
  if (req.method === 'POST') {
    const requestBuffer = await buffer(req);
    const payload = requestBuffer.toString();
    const sig = req.headers['stripe-signature'];

    let event;

    //verify that the event posted came from stripe
    try {
      event = stripe.webhooks.constructEvent(payload, sig, endpointSecret);
    } catch (err) {
      console.log('ERROR', err.message);
      return res.status(400).send(`Webhook error${err.message}`);
    }
    if (event.type === 'checkout.session.completed') {
      const session = event.data.object;

      return fulfillOrder(session)
        .then(() => res.status(200))
        .catch(err => {
          res.status(400).send(`Webhook Error:${err.message}`);
        });
    }
  }
};
export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};
