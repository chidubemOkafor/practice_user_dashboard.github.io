import React from 'react'
import Dashboard from '../components/Dashboard'
import Navbar from '../components/Navbar'
import Events from '../components/Events'
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