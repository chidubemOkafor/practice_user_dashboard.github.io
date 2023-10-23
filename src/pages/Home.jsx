import React from 'react'
import Dashboard from '../components/dashboard/Dashboard'
import Navbar from '../components/tabs/Navbar'
import Events from '../components/tabs/Events'

const Home = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='flex justify-center sm:justify-center md:justify-evenly items-center flex-col lg:flex-row md:flex-col sm:flex-col'>
        <Dashboard/>
        <Events/>
        </div>
    </div>
  )
}

export default Home