import React from 'react'
import {AiOutlineHeart, AiOutlineSearch} from 'react-icons/ai'

const Navbar = () => {
  return (
    <div className='flex justify-between w-full h-15 items-center py-9 '>
        <span className='font-bold text-2xl cursor-pointer ml-5'>Booksy</span>

        <div className='sm:flex justify-between items-center px-8 py-2 flex-1 rounded-md :mx-40 bg-slate-100 gap-20 md:gap-10 md:mx-20 sm:gap-5 sm:mx-10 hidden '>
            <input type="text" className='bg-transparent border-none outline-none w-full' placeholder='Search by Author,title,name'/>
            <AiOutlineSearch className='text-bold text-[25px]'/>
        </div>
        
        <div className='flex justify-between items-center mr-5'>
            <AiOutlineHeart className='text-[20px] cursor-pointer'/>
            <div className='mx-7 bg-[#413b89] rounded-full w-8 h-8 flex justify-center items-center text-white md:mx-4 sm:mx-2'>0</div>
            <span className='text-slate-500 cursor-pointer'>EN</span>
        </div>
    </div>
  )
}

export default Navbar