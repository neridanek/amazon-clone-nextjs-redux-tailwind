import React from 'react';
import { MenuIcon } from '@heroicons/react/solid';

const Nav = () => {
  return (
    <div className="flex items-center h-8 text-white px-5 bg-zinc-800">
      <MenuIcon className="w-5 h-5" />
      <p className="px-5 cursor-pointer">All</p>
      <p className="cursor-pointer">Prime Video</p>
      <p className="px-5 cursor-pointer">Amazon Business</p>
      <p className="cursor-pointer">Today's Deals</p>
    </div>
  );
};

export default Nav;
