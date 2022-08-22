import React from 'react'

const BookCard = ({title ,authors ,formats}) => {

  
  return (
    <div className=' w-[200px] rounded-md mb-5 shadow-md pb-3'>
      <img src={formats['image/jpeg'] === undefined ? "https://cdn.vectorstock.com/i/1000x1000/98/13/books-on-the-table-background-for-text-vector-21599813.webp" :formats['image/jpeg'] } className='bg-cover rounded-tl-md rounded-tr-md mb-2' alt="Cover" />

      <h3 className=' font-bold pb-3'>{title}</h3>

      <span className=' text-slate-500 '>{authors.length === 0 ? 'No author name founded' : authors[0].name}</span>
    </div>
  )
}

export default BookCard