'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 bg-black border-b border-gray-800 z-50">
      <div className="px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="font-bold text-2xl text-white">
            LitHumDaddy
          </Link>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" className="text-gray-300 hover:text-white">
              Sign In
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 