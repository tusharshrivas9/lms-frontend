import React, { useState } from 'react'
import Home from '../components/Home'
import toast from 'react-hot-toast'
import { isEmail } from '../helper/regexMatch'
import axiosInstance from '../helper/Axiosinstence'

const Contact = () => {

    const [userInput , setUserInput] = useState({
        name:"",
        email:"",
        message:""
    })

    function handelInputChange(e){
    const {name,value} = e.target
    setUserInput({
        ...userInput,
        [name]:value
    })
    }

  async function onFormSubmit(e) {
    e.preventDefault()
    if (!userInput.email|| !userInput.name || !userInput.message) {
        toast.error("All Field are mandatory")
        return 
    }
    if (!isEmail(userInput.email)) {
        toast.error("invalid email")
        return
    }
    try {
        const response = axiosInstance.post("/contact",userInput)
        toast.promise(response,{
            loading:"submitting your message",
            success:"form subimitted succesfully ",
            error:"Failed to submit the form"
        })
        const contactResponse = await response
        if (contactResponse?.data?.success) {
            setUserInput({
                name:"",
                email:"",
                message:""
            })
        }
    } catch (error) {
        toast.error("operation fail")
    }
  }
  return (
    <Home>
    <div className=' flex items-center justify-center h-[100vh]'>
    <form noValidate onSubmit={onFormSubmit} className=' flex flex-col items-center justify-center gap-2 p-5 rounded-md text-black shadow-[0_0_10px_black] w-[22rem]'>
        <h1 className='text-3xl font-semibold'>
            Contact Form
        </h1>
        <div className="flex flex-col w-full gap-1">
        <label htmlFor="name" className='text-xl font-semibold'>
            Name
        </label>
        <input type="text" className='bg-transparent border px-2 py-1 rounded-sm ' value={userInput.name} onChange={handelInputChange}
        id='name' name='name' placeholder='Enter your name' />
        </div>
        <div className="flex flex-col w-full gap-1">
        <label htmlFor="Email" className='text-xl font-semibold'>
            Email
        </label>
        <input type="text" className='bg-transparent border px-2 py-1 rounded-sm ' 
        id='Email' name='Email' placeholder='Enter your Email' value={userInput.email} onChange={handelInputChange} />
        </div>
        
        <div className="flex flex-col w-full gap-1">
        <label htmlFor="message" className='text-xl font-semibold'>
           Message
        </label>
        <textarea className='bg-transparent border px-2 py-1 rounded-sm resize-none h-40' 
        id='message' name='message' placeholder='Enter your message' onChange={handelInputChange} value={userInput.message} />
        </div>
        <button type='summit'
        className='w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold text-lg cursor-pointer'>
        submit
        </button>
      </form>
    </div>
     
    </Home>
  )
}

export default Contact
