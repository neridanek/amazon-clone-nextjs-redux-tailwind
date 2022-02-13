import React from 'react';
import Image from 'next/image';
import { SearchIcon, ShoppingCartIcon } from '@heroicons/react/outline';
import { signIn, signOut, useSession } from 'next-auth/client';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { selectItems } from '../../redux/basketSlice';

const Header = () => {
  const [session] = useSession();
  const router = useRouter();
  const items = useSelector(selectItems);

  return (
    <div className="flex items-center bg-blue-900 py-3 text-white text-sm ">
      <Image
        onClick={() => router.push('/')}
        src="https://links.papareact.com/f90"
        width={155}
        height={35}
        objectFit="contain"
        className="cursor-pointer"
      />
      <div className="flex flex-1 items-center px-10">
        <input type="text" className="rounded-l h-10 w-full  text-black" />
        <SearchIcon className="text-black bg-yellow-400 rounded-r p-2 h-10" />
      </div>
      <div onClick={!session ? signIn : signOut} className="link px-5 ">
        <h1>{session ? `Hello,${session.user.name}` : 'Sign In'}</h1>
        <p className="font-bold">Konto i listy</p>
      </div>
      <div onClick={() => router.push('/orders')} className="link px-5">
        <h1>Zwroty</h1>
        <p className="font-bold">i zamówienia</p>
      </div>
      <div
        onClick={() => router.push('/checkout')}
        className="flex items-center px-5"
      >
        <span className="absolute top-0 sm:top-2  right-14 bg-yellow-400 h-5 w-5 text-center rounded-full text-black font-bold">
          {items.length}
        </span>
        <ShoppingCartIcon className="h-10" />
        <p className="link font-bold">Koszyk</p>
      </div>
    </div>
  );
};

export default Header;
