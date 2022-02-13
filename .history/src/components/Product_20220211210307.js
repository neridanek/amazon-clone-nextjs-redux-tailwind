import React from 'react';
import Image from 'next/image';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../../redux/basketSlice';

const Product = ({ id, title, price, description, category, image }) => {
  const dispatch = useDispatch();
  const addItemToBasket = () => {
    const product = {
      id,
      title,
      price,
      description,
      category,
      image,
    };
    dispatch(addToBasket(product)); //sending the product as as action to the REDUX
  };

  return (
    <div className="relative flex flex-col m-5 bg-white z-30 p-10">
      <p className="absolute top-2 right-2 text-xs italic text-gray-400">
        {category}
      </p>
      <Image src={image} height={200} width={200} objectFit="contain" />
      <h4 className="py-3">{title}</h4>
      <p className="py-3">{description}</p>

      <div className="py-3">
        <Currency quantity={price} currency="GBP" />
      </div>
      <button onClick={addItemToBasket} className="button">
        Add to Basket
      </button>
    </div>
  );
};

export default Product;
