import Image from 'next/image';
import Currency from 'react-currency-formatter';
import axios from 'axios';
import React from 'react';
import Header from '../src/components/Header';
import { useSelector } from 'react-redux';
import { selectItems, selectTotal } from '../redux/basketSlice';
import CheckoutProduct from '../src/components/CheckoutProduct';
import { useSession } from 'next-auth/client';
import { loadStripe } from '@stripe/stripe-js';
const stripePromise = await loadStripe(
  'pk_test_51IpCBhIujyIA1co1uDkBkttR6vez94kGCTZ4NVSVccUKE3t2Y5dhbza8egjFENB03ztE1VFQxq54zzfaOeDbhUIH00bbVjeNsA'
);

const Checkout = () => {
  const items = useSelector(selectItems);
  const [session] = useSession();
  const total = useSelector(selectTotal);
  const createCheckoutSession = async () => {
    const stripe = await stripePromise;
    //call the backend to create a checkout session
    const checkoutSession = await axios.post('/api/create-checkout-session', {
      items: items,
      email: session.user.email,
    });
    //redirect user/customer to stripe checkout
    const result = await stripe.redirectToCheckout({
      sessionId: checkoutSession.data.id,
    });
    if (result.error) alert(result.error.message);
  };
  return (
    <div>
      <Header />
      <main>
        <div className="text-center">
          <Image
            src="https://links.papareact.com/ikj"
            width={1250}
            height={250}
            objectFit="responsive"
          />
          <div>
            <h1 className=" font-bold ">
              {items.length === 0
                ? 'Your Shopping Basket is empty'
                : 'Shopping Basket'}
            </h1>
            {items.map((item, i) => (
              <CheckoutProduct
                key={i}
                id={item.id}
                category={item.category}
                title={item.title}
                rating={item.rating}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
        <div className="">
          {items.length > 0 && (
            <>
              <h2 className="whitespace-nowrap">Subtotal {items.length}</h2>
              <span>
                <Currency quantity={total} curreny="GBP" />
              </span>
              <button onClick={createCheckoutSession} className="bg-gray-300">
                {!session ? 'Sign in to checkout' : 'Proceed to checkout'}
              </button>
            </>
          )}
        </div>
      </main>
    </div>
  );
};

export default Checkout;
