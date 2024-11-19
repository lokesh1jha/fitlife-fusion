'use client';
import React from 'react';
import { Button } from '@/components/ui/button';
import { signOut } from 'next-auth/react';
import { Routes } from '@/routes';

const SignOutButton = () => {
  return (
    <Button
      variant="outline"
      onClick={async () => {
        await signOut({ callbackUrl: Routes.LOGIN }); 
      }}
    >
      Sign Out
    </Button>
  );
};

export default SignOutButton;
