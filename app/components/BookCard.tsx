<<<<<<< HEAD
'use client';

import React from 'react';

interface BookCardProps {
  title: string;
  description: string;
}

const BookCard: React.FC<BookCardProps> = ({ title, description }) => {
  return (
    <div className="p-6 rounded-lg hover:bg-[#202123] transition-colors">
      <h2 className="text-2xl font-serif mb-2">{title}</h2>
      <p className="text-lg text-gray-300 mb-4">{description}</p>
      <button className="px-4 py-1.5 border border-gray-600 rounded-lg hover:bg-[#2A2B32] transition-colors">
        Study Guide
      </button>
    </div>
  );
};

export default BookCard; 
=======
interface BookCardProps {
  title: string;
  image: string;
  description: string;
}

export default function BookCard({ title, image, description }: BookCardProps) {
  return (
    <div className="bg-black/30 backdrop-blur-sm rounded-[20px] overflow-hidden hover:bg-black/40 transition-colors duration-200">
      <div className="h-32 overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-200"
        />
      </div>
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-gray-300 text-sm mb-4">{description}</p>
        <button className="px-4 py-2 bg-black/40 hover:bg-black/50 rounded-full text-sm backdrop-blur-sm transition-colors duration-200">
          Study Guide
        </button>
      </div>
    </div>
  );
} 
>>>>>>> c187e5c (firstPush)
