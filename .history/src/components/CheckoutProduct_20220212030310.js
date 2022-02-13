import React from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket, removeFromBasket } from '../../redux/basketSlice';

const CheckoutProduct = ({
  id,
  title,
  price,
  description,
  category,
  image,
}) => {
  const dispatch = useDispatch();
  const removeItemFromBasket = () => {
    //remove item from redux
    dispatch(removeFromBasket({ id }));
  };
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product));
  };
  return (
    <div className="grid grid-cols-5">
      <Image src={image} height={150} width={150} objectFit="contain" />
      <div className="col-span-3 mx-5">
        <p>{title}</p>
        <p className="text-xs my-2 line-clamp-3">{description}</p>
        <Currency quantity={price} currency="GBP" />
      </div>
      <div className="flex flex-col space-y-2 my-auto justify-self-end">
        <button onClick={addItemToBasket}>Add to basket</button>
        <button onClick={removeItemFromBasket}>Remove from basket</button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
