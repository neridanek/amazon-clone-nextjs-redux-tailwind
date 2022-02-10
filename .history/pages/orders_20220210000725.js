import React from 'react';
import Header from '../src/components/Header';

const orders = () => {
  return (
    <div>
      <Header />
      <main className="max-w-screen-lg mx-auto p-10">
        <h1 className="text-3xl border-b mb-2 pb-1 border-yellow-400">
          Your Orders
        </h1>
        {session ? }
      </main>
    </div>
  );
};

export default orders;
