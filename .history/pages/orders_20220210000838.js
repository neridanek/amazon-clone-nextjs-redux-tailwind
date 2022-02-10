import React from 'react';
import Header from '../src/components/Header';
import { useSession } from 'next-auth/client';

const orders = () => {
  const [session] = useSession();
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? (
          <h2>x Orders</h2>
        ) : (
          <h2>Please sign in to see your orders</h2>
        )}
      </main>
    </div>
  );
};

export default orders;
