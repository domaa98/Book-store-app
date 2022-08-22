import React from 'react'
import {IoIosArrowDown} from 'react-icons/io'


const NavList = () => {
  return (
    <div className='w-full flex justify-center items-center mb-5'>
        <ul className='flex justify-between w-[50%] text-slate-500 text-[16px] font-semibold flex-wrap'>
            <li className='cursor-pointer text-[#413b89]'><a href="/#">Home</a></li>
            <li className='cursor-pointer'><a href="/#">Bestseller</a></li>
            <li className='flex justify-between items-center cursor-pointer'>
             <a href="/#">Category</a>
             <IoIosArrowDown className='ml-1'/>
            </li>
            <li className='cursor-pointer'><a href="/#">Find a store</a></li>
            <li className='cursor-pointer'><a href="/#">Blog</a></li>
        </ul>
    </div>
  )
}

export default NavList