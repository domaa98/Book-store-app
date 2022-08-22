import React from 'react'
import BookCard from './BookCard'

const Home = ({booksData}) => {
  return (
    <div className='mt-8 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 sm:grid-cols-2 gap-1 place-items-center'>
          {booksData.length > 0 && booksData.map((book) => (
            <BookCard key={book.id} {...book} />
        ))}
    </div>
  )
}

export default Home