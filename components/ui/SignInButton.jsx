'use client'

import { signIn } from 'next-auth/react'
import {  useState } from 'react'
import { Button } from './Button'
import { toast } from './ToastComponent'

const SignInButton = ({}) => {
    const [isLoading, setIsLoading] = useState(false);
  
    const signInWithGoogle = async () => {
      try {
        setIsLoading(true);
        await signIn('google');

      } catch (error) {

        toast({
          title: 'Error signing in',
          message: 'Please try again later.',
          type: 'error',
        });
      }
    };
  
    return (
      <Button onClick={signInWithGoogle} isLoading={isLoading}>
        Sign in
      </Button>
    );
  };
  
  export default SignInButton;
  