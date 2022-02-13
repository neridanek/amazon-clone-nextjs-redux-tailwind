import React from 'react';
import { useRouter } from 'next/router';
import Header from '../src/components/Header';
import { CheckCircleIcon } from '@heroicons/react/solid';
const success = () => {
  const router = useRouter();
  return (
    <div className="bg-gray-100 h-screen text-center">
      <Header />
      <main className="max-w-screen-lg mx-auto">
        <div className="flex flex-col p-10 bg-white">
          <div className="flex items-center space-x-2 mb-5"></div>
          <CheckCircleIcon className="text-green-500 h-10" />
          <h1 className="text-3xl">Thank you,your order has been confirmed!</h1>
        </div>
        <p className="w-10">
          Thank you for shopping with us.We will send a confirmation of item has
          shipped,if you would like to check the status of order please press
          the link below.
        </p>
        <button onClick={() => router.push('/orders')} className="button mt-8">
          Go to my orders
        </button>
      </main>
    </div>
  );
};

export default success;
