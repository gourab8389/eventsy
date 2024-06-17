"use client";

import { auth } from '@/lib/firebase';
import { Button } from '@nextui-org/button';
import { EmailAuthProvider, GoogleAuthProvider, signInWithRedirect, signOut } from 'firebase/auth';
import Link from 'next/link';
import React, { useEffect } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { FaHome, FaServicestack, FaSignInAlt, FaSignOutAlt, FaUser } from 'react-icons/fa';

const NavItem: React.FC = () => {
  const [user] = useAuthState(auth);
  const googleAuth = new GoogleAuthProvider();
  const emailAuth = new EmailAuthProvider();

  const login = async () => {
    try {
      await signInWithRedirect(auth, googleAuth); 
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
    <nav className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-10'>
      <ul className='text-white flex gap-4 m-0 p-0'>
        <li className='cursor-pointer'>
          <Link href='/'><FaHome /></Link>
        </li>
        <li className='cursor-pointer hover:text-gray-400'>
          <Link href='/events'><FaServicestack /></Link>
        </li>
        {user ? (
          <li className='cursor-pointer hover:text-gray-400'>
            <Link href='/profile'><FaUser /></Link>
          </li>
        ) : null}
      </ul>
      <ul className='flex gap-4 m-0 p-0 text-white'>
        {user ? (
          <li className='cursor-pointer hover:text-gray-800'>
            <Button onClick={logout}>
              <FaSignOutAlt />
            </Button>
          </li>
        ) : (
          <li className='cursor-pointer hover:text-gray-800'>
            <Button onClick={login}><FaSignInAlt /></Button>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NavItem;
