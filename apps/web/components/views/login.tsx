'use client';

import { Alert, AlertDescription } from '@workspace/ui/components/alert';
import { Button } from '@workspace/ui/components/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@workspace/ui/components/card';
import { Separator } from '@workspace/ui/components/separator';
import { AlertCircle, Wallet } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Login() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [loadingType, setLoadingType] = useState<'wallet' | 'google' | null>(
    null
  );

  const handleWalletConnect = async () => {
    setIsLoading(true);
    setLoadingType('wallet');
    setError('');

    try {
      // Simulate wallet connection
      await new Promise((resolve) => setTimeout(resolve, 2000));
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to connect wallet. Please try again.');
    } finally {
      setIsLoading(false);
      setLoadingType(null);
    }
  };

  const handleGoogleLogin = async () => {
    setIsLoading(true);
    setLoadingType('google');
    setError('');

    try {
      // Simulate Google OAuth
      await new Promise((resolve) => setTimeout(resolve, 1500));
      window.location.href = '/dashboard';
    } catch (err) {
      setError('Failed to sign in with Google. Please try again.');
    } finally {
      setIsLoading(false);
      setLoadingType(null);
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center p-4'>
      <div className='w-full max-w-md'>
        <div className='text-center mb-8'>
          <Link href='/' className='inline-flex items-center space-x-2 mb-4'>
            <div className='w-10 h-10 bg-foreground rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-xl'>M</span>
            </div>
            <span className='font-bold text-2xl'>Milefund</span>
          </Link>
          <h1 className='text-2xl font-bold text-gray-900'>Welcome back</h1>
          <p className='text-gray-600 mt-2'>
            Sign in to your account to continue
          </p>
        </div>

        <Card>
          <CardHeader className='space-y-1'>
            <CardTitle className='text-xl text-center'>Sign In</CardTitle>
            <CardDescription className='text-center'>
              Choose your preferred sign-in method
            </CardDescription>
          </CardHeader>
          <CardContent className='space-y-4'>
            {error && (
              <Alert variant='destructive'>
                <AlertCircle className='h-4 w-4' />
                <AlertDescription>{error}</AlertDescription>
              </Alert>
            )}

            {/* Web3 Wallet Login */}
            <Button
              variant='outline'
              className='w-full h-12 border-2'
              onClick={handleWalletConnect}
              disabled={isLoading}
            >
              <Wallet className='mr-2 h-5 w-5' />
              {loadingType === 'wallet' ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-2 h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Connecting...
                </>
              ) : (
                'Connect with Web3 Wallet'
              )}
            </Button>

            <div className='relative'>
              <div className='absolute inset-0 flex items-center'>
                <Separator className='w-full' />
              </div>
              <div className='relative flex justify-center text-xs uppercase'>
                <span className='bg-white px-2 text-gray-500'>Or</span>
              </div>
            </div>

            {/* Google Login */}
            <Button
              variant='outline'
              className='w-full h-12 border-2 hover:bg-gray-50 hover:border-gray-200'
              onClick={handleGoogleLogin}
              disabled={isLoading}
            >
              <svg className='mr-2 h-5 w-5' viewBox='0 0 24 24'>
                <path
                  fill='#4285F4'
                  d='M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z'
                />
                <path
                  fill='#34A853'
                  d='M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z'
                />
                <path
                  fill='#FBBC05'
                  d='M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z'
                />
                <path
                  fill='#EA4335'
                  d='M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z'
                />
              </svg>
              {loadingType === 'google' ? (
                <>
                  <svg
                    className='animate-spin -ml-1 mr-2 h-4 w-4'
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                  >
                    <circle
                      className='opacity-25'
                      cx='12'
                      cy='12'
                      r='10'
                      stroke='currentColor'
                      strokeWidth='4'
                    ></circle>
                    <path
                      className='opacity-75'
                      fill='currentColor'
                      d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                    ></path>
                  </svg>
                  Signing in...
                </>
              ) : (
                'Continue with Google'
              )}
            </Button>
          </CardContent>
          <CardFooter>
            <div className='text-center text-sm w-full'>
              Don't have have an account?{' '}
              <Link href='/signup' className='hover:text-blue-500 font-medium'>
                Sign up
              </Link>
            </div>
          </CardFooter>
        </Card>

        <div className='mt-8 text-center text-xs text-gray-500'>
          <p>
            By signing in, you agree to our{' '}
            <Link href='/terms' className='hover:text-blue-500 font-medium'>
              Terms of Service
            </Link>{' '}
            and{' '}
            <Link href='/privacy' className='hover:text-blue-500 font-medium'>
              Privacy Policy
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
