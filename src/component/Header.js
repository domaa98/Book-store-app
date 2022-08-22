import React from 'react'

const Header = () => {
  return (
    <div className='sm:flex sm:justify-between mt-10 rounded-md shadow-md p-8 md:mt-7 md:p-6 sm:mt-5 sm:p-4 '>
        <div className='mb-5'>
        <h1 className=' text-5xl font-bold text-[#413b89] mb-4 md:text-4xl sm:text-3xl text-[30px]' >Build your library</h1>
        <p className=' w-[250px] mb-8 text-slate-500 font-semibold text-md'>Buy two selected books and get one for free</p>
        <button className=' text-md font-semibold bg-[#c2a792] px-4 py-2 rounded-md md:px-3 md:py-1 cursor-pointer text-white'>View all</button>
        </div>

        <div className='flex justify-center items-center'>
            <img src="https://cdn.shopify.com/s/files/1/0136/4544/7268/files/our-story.png?13388448751719031754" className='rounded-md sm:h-[250px] h-[200px] ' alt="book" />
        </div>
    </div>
  )
}

export default Header