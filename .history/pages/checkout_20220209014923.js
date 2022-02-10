import Image from 'next/image'
import React from 'react'
import Header from '../src/components/Header'
import {useSelector} from "react-redux"
import {selectItems,selectTotal} from "../redux/basketSlice"
import CheckoutProduct from '../src/components/CheckoutProduct'
import {useSession} from "next-auth/client"
const stripePromise = loadStripe(process.env.stripe_public_key)

const Checkout = () => {
    const items = useSelector(selectItems);
    const [session] = useSession();
    const total = useSelector(selectTotal)
    const createCheckoutSession = async() =>{
        const stripe = await stripePromise
        const checkoutSession = await axios.post("/api/create-checkout-session",{
            
        })
    }
    return (
        <div>
            <Header/>
            <main>
                <div>
                    <Image
                        src="https://links.papareact.com/ikj"
                        width={1020}
                        height={250}
                        objectFit="contain"
                    />
                    <div>
                        <h1>{items.length === 0 ? "Your Shopping Basket is empty" : "Shopping Basket"}</h1>
                        {items.map((item,i)=>(
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
                <div>
                    {items.length > 0 && (
                        <>
                            <h2 className="whitespace-nowrap">Subtotal {items.length}</h2>
                            <button className="bg-gray-300">
                                {!session ? "Sign in to checkout" : "Proceed to checkout"}
                            </button>
                        </>
                    )}
                </div>
            </main>
        </div>
    )
}

export default Checkout
