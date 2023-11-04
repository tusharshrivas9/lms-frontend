import React, { useState } from 'react'
import Home from '../components/Home'
import { BsPersonCircle } from 'react-icons/bs'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { toast } from "react-hot-toast";
import { createAccount } from '../Redux/slices/Authslice'
import { isEmail, isValidPassword } from '../helper/regexMatch'

const Sign = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    
    const [preImg , setImage] =useState("")
    const [SignupData, setSignupData] = useState({
        name:"",
        email:"",
        password:"",
        avatar:""
    })
    function handleUserInput(e) {
        const {name,value} = e.target
        setSignupData({
            ...SignupData,
            [name]:value
        })
    }

    function getImage(event) {
        event.preventDefault()
        const uploadedImage = event.target.files[0]

        if (uploadedImage) {
            setSignupData({
                ...SignupData,
                avatar:uploadedImage
            })

            const fileReader = new FileReader()
            fileReader.readAsDataURL(uploadedImage)
            fileReader.addEventListener("load",function () {
                setImage(this.result)
            })
            
        }
    }

  async function createNewAccount(event) {
        event.preventDefault()
        if (!SignupData.email ||!SignupData.password || !SignupData.name  ) {
            toast.error("please fill all the details")
            return
        }
        //checking name field
        if (SignupData.name.length<5 ) {
            toast.error("Name should be atleast 5 char")
            return
        }
        if (!isEmail(SignupData.email)) {
            toast.error("invalid email id")
            return
        }
        if (isValidPassword(SignupData.password)) {
            toast.error("atleast one number & one special character")
        }
        const formData = new FormData()
        formData.append("name",SignupData.name)
        formData.append("email",SignupData.email)
        formData.append("password",SignupData.password)
        formData.append("avatar",SignupData.avatar)

        const response = await dispatch(createAccount(formData))
        if (response?.payload?.sucess) 

        navigate("/");
        setSignupData({
        name:"",
        email:"",
        password:"",
        avatar:""
        })
        preImg("")
    }
    return (
    <Home>
      <div className='flex items-center justify-center h-[90vh]'>
        <form noValidate onSubmit={createNewAccount} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-black w-96 shadow-[0_0_10px_black]'>
        <h1 className='text-center text-2xl font-bold'>Registration page</h1>
        <label htmlFor="image_uploder" className='cursor-pointer'>
            {
                preImg ? (
                    <img className='w-24 h-24 rounded-full m-auto' src={preImg}/>
                ) : (
                    <BsPersonCircle className='w-24 h-24 rounded-full m-auto'/>
                )
            }
        </label>
        <input className='hidden' type='file' id='image_upload' onChange={getImage} accept='.jpg, .jpeg , .png , .svg'
         name='image_upload'/>
        <div className='flex flex-col gap-1'>
        <label htmlFor="name" className='font-semibold'>Name</label>
         <input type="name" required name='name' id='name' placeholder='Enter your name..' className='bg-transparent px-2 py-1 border'  onChange={handleUserInput} value={SignupData.name}/>
        <label htmlFor="email" className='font-semibold'>Email</label>
         <input type="email" required name='email' id='email' placeholder='Enter your email..' className='bg-transparent px-2 py-1 border'  onChange={handleUserInput} value={SignupData.email}/>
        <label htmlFor="password" className='font-semibold'>Password</label>
         <input type="password" required name='password' id='password' placeholder='Enter password..' className='bg-transparent px-2 py-1 border' onChange={handleUserInput} value={SignupData.password} />
        </div>
        <button type='sumit' className='w-full m-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer' >
            Create account
        </button>
         <p className="text-center">
            Already have an account ? <Link to="/login" className='link text-accent cursor-pointer'>Login</Link>
         </p>
       

        </form>
      </div>
    </Home>
  )
}

export default Sign
