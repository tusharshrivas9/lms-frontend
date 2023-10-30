import React from 'react'
import Home from '../components/Home'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    
      <Home>
        <div className="pt-10 text-white justify-center flex items-center gap-10 mx-16 h-[90vh]">
            <div className="w1/2 space-y-6">
          <h1 className='text-5xl font-semibold'>Find out best
          <span className='text-yellow-500 font-bold'> Online Course</span>
          </h1>
           <p className='text-xl text-gray-200'>
            highly skilled and qualified faculties with a affordable price
           </p>
           <div className="space-x-6">
           <Link to="/courses"><button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer'>
            explore courses
           </button></Link>
           <Link to="/contact"><button className='bg-yellow-500 px-5 py-3 rounded-md font-semibold text-lg cursor-pointer'>
           contact us
           </button></Link>
           </div>
            </div>
            <div className="w-1/2 flex items-center justify-center">
              <img src={"https://themefisher.com/blog/moodle-bootstrap-themes.png"} alt="home page image" />
            </div>
        </div>
      </Home>
    
  )
}

export default Homepage
