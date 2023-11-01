import React,{useState} from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate,Link } from 'react-router-dom'
import { toast } from "react-hot-toast";
import Home from '../components/Home';
import { login } from '../Redux/slices/Authslice'

const Login = () => {
   
     const dispatch = useDispatch()
    const navigate = useNavigate()
    
    
    const [loginData, setLoginupData] = useState({
        
        email:"",
        password:"",
       
    })
    function handleUserInput(e) {
        const {name,value} = e.target
        setLoginupData({
            ...loginData,
            [name]:value
        })
    }


  async function onLogin(event) {
        event.preventDefault()
        if (!loginData.email ||!loginData.password) {
            toast.error("please fill all the details")
            return
        }

        const response = await dispatch(login(loginData))
        if (response?.payload?.sucess) 

        navigate("/");
        setLoginupData({
        email:"",
        password:"",
      
        })
       
    }
    return (
    <Home>
      <div className='flex items-center justify-center h-[90vh]'>
        <form noValidate onSubmit={onLogin} className='flex flex-col justify-center gap-3 rounded-lg p-4 text-black w-96 shadow-[0_0_10px_black]'>
        <h1 className='text-center text-2xl font-bold'>Login page</h1>
        <div className='flex flex-col gap-1'>
        <label htmlFor="email" className='font-semibold'>Email</label>
         <input type="email" required name='email' id='email' placeholder='Enter your email..' className='bg-transparent px-2 py-1 border'  onChange={handleUserInput} value={loginData.email}/>
        <label htmlFor="password" className='font-semibold'>Password</label>
         <input type="password" required name='password' id='password' placeholder='Enter password..' className='bg-transparent px-2 py-1 border' onChange={handleUserInput} value={loginData.password} />
        </div>
        <button type='sumit' className='w-full m-2 bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 font-semibold cursor-pointer' >
           Login
        </button>
         <p className="text-center">
        Do not have an account ? <Link to="/sign" className='link text-accent cursor-pointer'>sign</Link>
         </p>
       

        </form>
      </div>
    </Home>
  )
 
        }


export default Login
