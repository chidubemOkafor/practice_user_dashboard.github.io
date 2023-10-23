import React from 'react'
import {RiHome5Line,RiMore2Fill} from 'react-icons/ri'
import {BiSpreadsheet} from 'react-icons/bi'
import {SlCalender} from 'react-icons/sl'
import {CiCalendarDate} from 'react-icons/ci'

const Bottombar = () => {
    const iconSty = 'flex flex-col items-center text-[13px]'
  return (
    <div>
        <ul className='w-screen flex justify-evenly fixed bottom-0 bg-white py-3 text-gray-600' id='bottom_bar'>
            <li className={iconSty}><RiHome5Line className='w-7 h-7 text-blue-400'/>Home</li>
            <li className={iconSty}><BiSpreadsheet className='w-7 h-7'/>Courses</li>
            <li className={iconSty}><CiCalendarDate className='w-7 h-7'/>Events</li>
            <li className={iconSty}><RiMore2Fill className='w-7 h-7'/>More</li>
        </ul>
    </div>
  )
}

export default Bottombar