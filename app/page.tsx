'use client';

<<<<<<< HEAD
import React from 'react';
import BookCardsSection from './components/BookCardsSection';

const Home: React.FC = () => {
=======
import BookCardsSection from './components/BookCardsSection';

export default function Home() {
>>>>>>> c187e5c (firstPush)
  return (
    <div className="min-h-screen relative">
      {/* Background Image without overlay */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url("/pictures/ancient-statue-laptop.jpg")`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundColor: 'black',
        }}
      />

      {/* Content */}
      <div className="relative z-10 min-h-screen text-white">
        {/* Header with minimal navigation */}
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-8">
            <div className="text-xl font-semibold">LitHumDaddy</div>
            <nav className="flex items-center space-x-6">
              <a href="#" className="text-white hover:text-gray-300 font-medium">
                Research
              </a>
              <a href="#" className="text-white hover:text-gray-300 font-medium">
                Safety
              </a>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <button className="p-2 hover:bg-[#202123] rounded-lg">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                <path d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
              </svg>
            </button>
            <button className="px-4 py-1.5 bg-[#202123] hover:bg-[#2A2B32] rounded-full text-sm">
              Log in
            </button>
          </div>
        </div>

        {/* Main Content */}
        <main>
          <BookCardsSection />
        </main>
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default Home; 
=======
} 
>>>>>>> c187e5c (firstPush)
