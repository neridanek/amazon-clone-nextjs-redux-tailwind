import {buffer} from "micro"
import * as admin from "firebase"

const serviceAccount = require("../../permission.json")

const app = !admin.apps.length ? admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})
: admin.app();

const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY)

const endpointSecret = process.env.STRIPE_SIGNING_SECRET;

const fulfillOrder = async (session)=>{
    return app.firestore().collection("users").doc(session.metadata.email).collection("orders").doc(session.id).set({
        amount:session.amount_total / 100,
        amount_shipping: session.total_details.amount_shipping / 100,
        images: JSON.parse(session.metadata.images),
        timestamp:admin.firestore.FieldValue.serverTimestamp()
    }).then(()=>{
        
    })
}
export default async(req,res) =>{
    if(req.method === "POST"){
        const requestBuffer = await buffer(req)
        const payload = requestBuffer.toString();
        const sig = req.headers["stripe-signature"]
        
        let event;

        //verify that the event posted came from stripe
        try{
            event = stripe.webhooks.constructEvent(payload,sig,endpointSecret)
        }
        catch(err){
            console.log("ERROR",err.message)
            return res.status(400).send(`Webhook error${
                err.message
            }`)
        }
        if(event.type === "checkout.session.completed"){
            const session = event.data.object;
        }
    }

}