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
          <Currency quantity={amountShipping} currency="GBP" />
        </p>
      </div>
      <p className="text-sm whitespace-nowrap sm:text-xl self-end flex-1 text-right">
        {items.length} items
      </p>
      <p className="absolute top-2 right-2 w-40 lg:w-72 truncate text-xs whitespace-nowrap">
        ORDER #{id}
      </p>
      <div className="p-5 sm:p-10"></div>
    </div>
  );
};

export default Order;
