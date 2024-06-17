"use client"
import { auth } from '@/lib/firebase';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';

const ProfilePage = () => {
  const [user] = useAuthState(auth);

  return (
    <div className='relative flex flex-col items-center justify-center text-center h-screen bg-gradient-to-tr from-slate-700 to-lime-950'>
      <h1 className='text-white font-bold text-5xl mb-4'>Profile</h1>
      <div className="border border-black p-4 rounded-lg text-white">
        {user ? (
          <ul>
            <li className='mb-2'><strong>Name:</strong> {user.displayName}</li>
            <li><strong>Email:</strong> {user.email}</li>
          </ul>
        ) : (
          <p>Please log in to see your profile information.</p>
        )}
      </div>
    </div>
  );
};

export default ProfilePage;
