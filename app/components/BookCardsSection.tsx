<<<<<<< HEAD
'use client';

import React from 'react';
=======
>>>>>>> c187e5c (firstPush)
import BookCard from './BookCard';

const books = [
  {
    title: 'The Iliad',
<<<<<<< HEAD
    description: 'Explore the epic tale of ancient literature.',
  },
  {
    title: 'The Odyssey',
    description: 'Explore the epic tale of ancient literature.',
  },
  {
    title: 'The Aeneid',
    description: 'Explore the epic tale of ancient literature.',
  },
];

const BookCardsSection: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      <div className="space-y-8">
        {books.map((book) => (
          <BookCard key={book.title} {...book} />
=======
    image: '/pictures/statue1.jpg',
    description: 'Ancient Greek epic poem by Homer'
  },
  {
    title: 'The Odyssey',
    image: '/pictures/statue2.jpg',
    description: 'Epic poem following Odysseus'
  },
  {
    title: 'The Aeneid',
    image: '/pictures/statue3.jpg',
    description: 'Virgil\'s Roman epic poem'
  }
];

export default function BookCardsSection() {
  return (
    <div className="mt-96">
      <div className="grid grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {books.map((book, index) => (
          <BookCard
            key={index}
            title={book.title}
            image={book.image}
            description={book.description}
          />
>>>>>>> c187e5c (firstPush)
        ))}
      </div>
    </div>
  );
<<<<<<< HEAD
};

export default BookCardsSection; 
=======
} 
>>>>>>> c187e5c (firstPush)
