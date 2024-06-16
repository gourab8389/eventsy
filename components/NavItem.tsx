"use client";

import { auth } from '@/lib/firebase';
import { Button } from '@nextui-org/button';

import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const NavItem: React.FC = () => {
  const [user] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();

  const login = async () => {
    try {
      await signInWithPopup(auth, googleAuth);
    } catch (error) {
      console.error("Error during login:", error);
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <nav className='bg-black p-4 flex justify-between items-center'>
      <ul className='text-white flex gap-4 m-0 p-0'>
        <li className='cursor-pointer hover:text-gray-400'>
          <Link href='/'>Home</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-400'>
          <Link href='/about'>About</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-400'>
          <Link href='/events'>Events</Link>
        </li>
        <li className='cursor-pointer hover:text-gray-400'>
          <Link href='/profile'>Profile</Link>
        </li>
      </ul>
      <ul className='flex gap-4 m-0 p-0 text-white'>
        {user ? (
          <li className='cursor-pointer hover:text-gray-400'>
            <Button onClick={logout}>Logout</Button>
          </li>
        ) : (
          <>
            <li className='cursor-pointer hover:text-gray-400'>
              <Button onClick={login}>Login</Button>
            </li>
          </>
        )}
      </ul>
    </nav>
  );
}
export default NavItem;
