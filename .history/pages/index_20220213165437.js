import { getSession } from 'next-auth/client';
import Head from 'next/head';
import Image from 'next/image';
import Banner from '../src/components/Banner';
import Header from '../src/components/Header';
import Nav from '../src/components/Nav';
import ProductFeed from '../src/components/ProductFeed';
import Checkout from './checkout';

export default function Home({ products }) {
  return (
    <div>
      <Header />
      <Nav />
      <Banner />
      <ProductFeed products={products} />
    </div>
  );
}

export async function getServerSideProps(context) {
  const session = await getSession(context);
  const products = await fetch('https://fakestoreapi.com/products').then(res =>
    res.json()
  );
  return {
    props: {
      session,
      products,
    },
  };
}
