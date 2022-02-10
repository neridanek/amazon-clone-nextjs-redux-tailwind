import React from 'react';

const Order = ({ id, amount, amountShipping, items, timestamp, image }) => {
  return (
    <div className="relative border rounded-md">
      <div className="flex items-center space-x-10 p-5"></div>
    </div>
  );
};

export default Order;
