import React,{useState,useContext} from 'react'
import All from './All'
import {TbSquareChevronRight} from 'react-icons/tb'
import { TabContext } from '../../context/TabContext'

const Events = () => {
  const listStyle = 'px-3 py-1 cursor-pointer border rounded-md text-[15px] font-semibold hover:bg-blue-100';
  const activeListStyle = 'bg-blue-300 border-blue-200 text-blue-500';

  const { tab, setTab } = useContext(TabContext);

  const handleTabClick = (selectedTab) => {
    setTab(selectedTab);
  };

  return (
    <div>
      <div className='w-[22em] md:w-[40em] sm:w-[22em] flex flex-col gap-7 mt-10'>
        <div className='flex justify-between'>
          <p className='font-bold text-xl text-gray-700'>Upcoming Events</p>
          <p className='text-blue-500 flex items-center gap-1 cursor-pointer hover:underline font-semibold'>
            See More <TbSquareChevronRight />
          </p>
        </div>
        <ul className='flex w-[22em] justify-evenly items-center'>
          <li
            className={`${listStyle} ${tab === 'all' ? activeListStyle : ''}`}
            onClick={() => handleTabClick('all')}
          >
            All
          </li>
          <li
            className={`${listStyle} ${tab === 'class' ? activeListStyle : ''}`}
            onClick={() => handleTabClick('class')}
          >
            Class
          </li>
          <li
            className={`${listStyle} ${tab === 'exam' ? activeListStyle : ''}`}
            onClick={() => handleTabClick('exam')}
          >
            Exam
          </li>
          <li
            className={`${listStyle} ${tab === 'seminar' ? activeListStyle : ''}`}
            onClick={() => handleTabClick('seminar')}
          >
            Seminars
          </li>
          <li className='text-[15px] text-gray-600'>Others</li>
        </ul>
        <div>
          <All />
        </div>
      </div>
    </div>
  );
};

export default Events;