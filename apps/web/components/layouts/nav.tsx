'use client';

import { Button } from '@workspace/ui/components/button';
import { Input } from '@workspace/ui/components/input';
import { Menu, Search, Wallet, X } from 'lucide-react';
import Link from 'next/link';
import { useState } from 'react';

export default function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);

  return (
    <nav className='border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50'>
      <div className='container px-4 md:px-8 mx-auto'>
        <div className='flex h-16 items-center justify-between'>
          {/* Logo */}
          <Link href='/' className='flex items-center space-x-2'>
            <div className='w-8 h-8 bg-foreground rounded-lg flex items-center justify-center'>
              <span className='text-white font-bold text-lg'>M</span>
            </div>
            <span className='font-bold text-xl'>Milefund</span>
          </Link>

          {/* Desktop Navigation */}
          <div className='hidden md:flex items-center space-x-8'>
            <Link
              href='/projects'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Projects
            </Link>
            <Link
              href='/about'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              How It Works
            </Link>
            <Link
              href='/create'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Create Project
            </Link>
            <Link
              href='/dashboard'
              className='text-gray-600 hover:text-gray-900 transition-colors'
            >
              Dashboard
            </Link>
          </div>

          {/* Desktop Actions */}
          <div className='hidden md:flex items-center space-x-4'>
            <Button
              variant='ghost'
              size='icon'
              onClick={() => setIsSearchOpen(!isSearchOpen)}
            >
              <Search className='h-4 w-4' />
            </Button>
            <Button variant='outline' className='flex items-center gap-2'>
              <Wallet className='h-4 w-4' />
              Connect Wallet
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant='ghost'
            size='icon'
            className='md:hidden'
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? (
              <X className='h-4 w-4' />
            ) : (
              <Menu className='h-4 w-4' />
            )}
          </Button>
        </div>

        {/* Search Bar */}
        {isSearchOpen && (
          <div className='py-4 border-t'>
            <div className='relative'>
              <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4' />
              <Input placeholder='Search projects...' className='pl-10' />
            </div>
          </div>
        )}

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden py-4 border-t'>
            <div className='flex flex-col space-y-4'>
              <Link
                href='/projects'
                className='text-gray-600 hover:text-gray-900 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href='/about'
                className='text-gray-600 hover:text-gray-900 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                How It Works
              </Link>
              <Link
                href='/create'
                className='text-gray-600 hover:text-gray-900 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Create Project
              </Link>
              <Link
                href='/dashboard'
                className='text-gray-600 hover:text-gray-900 transition-colors'
                onClick={() => setIsMenuOpen(false)}
              >
                Dashboard
              </Link>
              <div className='pt-4 border-t'>
                <Button
                  variant='outline'
                  className='w-full flex items-center gap-2'
                >
                  <Wallet className='h-4 w-4' />
                  Connect Wallet
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
