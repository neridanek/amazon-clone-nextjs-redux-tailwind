const stripe = require('stripe')(
  sk_test_51IpCBhIujyIA1co1kEOjISAGJJHikbZLIaMI5czZGkAuBWUpOoAwEroij6fMJRTvEvxr27D5yFXi457NVPwuLbD700qWUypUHy
);

export default async (req, res) => {
  const { items, email } = req.body;
  console.log(items);
  console.log(email);

  const transformedItems = items.map(item => ({
    description: item.description,
    quantity: 1,
    price_data: {
      currency: 'gbp',
      unit_amount: item.price * 100,
      product_data: {
        name: item.title,
        images: [item.image],
      },
    },
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_rates: [''],
    shipping_address_collection: {
      allowed_countries: ['GB', 'US', 'CA'],
    },
    line_items: transformedItems,
    mode: 'payment',
    success_url: 'http://localhost:3000/success',
    cancel_url: 'http://localhost:3000/checkout',
    metadata: {
      email,
      images: JSON.stringify(items.map(item => item.image)),
    },
  });
};
