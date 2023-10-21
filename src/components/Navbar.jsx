import React from 'react';
import { VscBellDot } from 'react-icons/vsc';

const Navbar = () => {
  const deco = "hover:text-blue-400 cursor-pointer font-semibold hidden lg:flex"; // Hide on screens smaller than lg

  return (
    <div className='bg-white p-3 px-[5%] flex justify-between w-screen items-center border-b border-gray-100'>
      <div className='flex gap-3 items-center'>
        <img
          className='w-[4em] h-[4em] rounded-full'
          src='https://img.freepik.com/free-vector/isolated-young-handsome-man-different-poses-white-background-illustration_632498-855.jpg?w=826&t=st=1697757249~exp=1697757849~hmac=8864fbd40e545642d66d0904e8fc8adf02b851092793b7f6c57ad261c5272084'
          alt="User Avatar"
        />
        <p className='font-semibold'>Hi, Lecturer</p>
      </div>
      <ul className='flex gap-7'>
        <li className={`${deco} text-blue-500`}>Home</li>
        <li className={deco}>Courses</li>
        <li className={deco}>Events</li>
        <li className={deco}>More</li>
      </ul>
      <VscBellDot className='w-[2em] h-[2em]' />
    </div>
  );
};

export default Navbar;
