import React from 'react'
import calender from '../../assets/calender.png'
import {IoMdArrowDropdown} from 'react-icons/io'
import {RiErrorWarningLine} from 'react-icons/ri'


const Dashboard = () => {
    const ptitle = "text-blue-300 text-[15px] w-14"
    const p2title = "font-bold text-5xl"
  return (
    <div className='mt-10'>
      <p className='font-bold text-xl text-gray-700'>Overview</p>
    <div className='flex items-center flex-col gap-3 w-[22em] md:w-[30em] sm:w-[25em]'>  
        <div className='bg-gradient-to-r from-blue-900 to-blue-600 w-[22em] md:w-[30em] sm:w-[22em] md:h-[15em] h-[12em] sm:h-[12em] flex justify-between flex-col text-white p-4 sm:p-4 md:p-8 rounded-md shadow-blue-700 shadow-md'>
            <div className='flex justify-between items-end'>
            <div className={`text-[15px] text-blue-300 flex flex-row gap-1 items-center`}>Your stats: <span className='text-white font-bold flex flex-row items-center'>This Week<IoMdArrowDropdown className='w-6 h-6 text-blue-500 cursor-pointer'/></span></div>
            <img className='w-[130px] absolute transform translate-x-[13em] sm:translate-x-[13em]  md:translate-x-[18em] md:translate-y-[1em] translate-y-[2em] sm:translate-y-[1em]' src={calender}/>
            </div>
            <div className='flex justify-between'>
                <div>
                    <p className={ptitle}>Due Assignments</p>
                    <p className={p2title}>05</p>
                </div>
                <div>
                    <p className={ptitle}>Classes to teach</p>
                    <p className={p2title}>10</p>
                </div>
                <div>
                    <p className={ptitle}>Average Attendance</p>
                    <p className={`${p2title} text-yellow-400`}>80%</p>
                </div>
            </div>
        </div>
        <div className='flex justify-center gap-1'>
        <RiErrorWarningLine className='w-5 h-5 text-blue-400'/>
        <p className={`${ptitle} w-auto text-gray-600`} >Remember you need a minimum of <b>65% Attendance</b> in each course to qualify to write exams</p>
        </div>
      </div>
 
    </div>

  )
}

export default Dashboard