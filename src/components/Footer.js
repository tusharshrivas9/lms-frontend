import React from 'react'
import {BsFacebook,BsInstagram,BsTwitter,BsLinkedin} from "react-icons/bs"




const Footer = () => {

    const currentDate = new Date().getFullYear()

  return (
    <footer className='relative left-0 bottom-0 py-5 h-[10vh] flex flex-col sm:flex-row items-center justify-between text-white bg-gray-800 sm:px-20'>
      <section className='text-lg text-red'>
        Copyright {currentDate} | All rights reserved
      </section>
      <section className='flex items-center justify-center gap-5 text-2xl text-white '>
         <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='/'>
            <BsFacebook/>
         </a>
         <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='/'>
            <BsLinkedin/>
         </a>
         <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='/'>
            <BsInstagram/>
         </a>
         <a className='hover:text-yellow-500 transition-all ease-in-out duration-300' href='/' >
            <BsTwitter/>
         </a>
      </section>

    </footer>
  )
}

export default Footer
