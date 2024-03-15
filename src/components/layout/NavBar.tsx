import Link from 'next/link';
import React from 'react';

const NavBar = () => {
  return (
    <div className="flex">
      <div className="navbar bg-base-300 ">
        <Link href={'/'} className="btn btn-ghost text-xl ">
          Home
        </Link>
      </div>
      <div className="navbar bg-base-300 justify-center text-[25px]">
        <h1 className="underline font-bold">Next.JS Todo</h1>
      </div>
      <div className="navbar bg-base-300 justify-end">
        <Link href={'/about'} className="btn btn-ghost text-xl">
          About
        </Link>
        <Link href={'/report'} className="btn btn-ghost text-xl">
          Report
        </Link>
        <Link href={'/todos-csr'} className="btn btn-ghost text-xl">
          Todos-csr
        </Link>
        <Link href={'/todos-ssr'} className="btn btn-ghost text-xl">
          Todos-ssr
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
