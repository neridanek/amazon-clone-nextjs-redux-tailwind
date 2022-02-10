import React from 'react';

const Order = ({ id, amount, amountShipping, items, timestamp, image }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5 text-sm text-gray-600 bg-gray-100">
        <p className="font-bold text-xs">ORDER PLACED</p>
        <p>{moment.unix(timestamp).format('DD MM YYYY')}</p>
      </div>
      <div>
        <p className="text-xs font-bold">TOTAL</p>
        <p>
          <Currency quantity={amount} currency="GBP" />
          Next Day Delivery{}
          <Currency quantity={amount} currency="GBP" />
        </p>
      </div>
    </div>
  );
};

export default Order;
