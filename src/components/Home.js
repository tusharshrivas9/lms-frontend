import React from 'react'
import {FiMenu} from "react-icons/fi"
import {useDispatch, useSelector} from "react-redux"
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';
import Footer from './Footer';


const Home = ({children}) => {

    const dispatch = useDispatch()

    const navigate = useNavigate()

    const isLoggedin = useSelector((state)=> state?.auth?.isLoggedin)

    const role = useSelector((state)=> state?.auth?.role)

    function changewidth() {
       const drawerSide = document.getElementsByClassName("drawer-size") 
       drawerSide[0].style.width = "auto"
    }

    function hideDrawer() {
        
        const element = document.getElementsByClassName("drawer-toggle") 
        element[0].checked = false
 
        const drawerSide = document.getElementsByClassName("drawer-size") 
       drawerSide[0].style.width = "0"
         changewidth()
        
    }

   async function handleLogout(e) {
        e.preventDefault()

        const res = await dispatch(logout())
        if (res?.payload?.success) {
          
        }
        navigate("/")
    }

  return (
    <div className='min-h-[90vh]'>
      <div className="drawer absolute left-0 z-50 w-fit ">
        <input className='drawer-toggle' id='my-drawer' type='checkbox' />
        <div className="drawer-content">
            <label htmlFor="my-drawer" className='cursor-pointer relative'>
                <FiMenu size={"32px"} className="font-bolt text-white m-4" onClick={changewidth}/>
                
            </label>
        </div>
        <div className="drawer-size w-0"></div>
        <label htmlFor="my-drawer" className='drawer-overlay'>

        </label>
        <ul className="menu p-4 w-48 h-[100%] sm:w-80 bg-base-100 text-base-content relative">
            <li className='w-fit absolute right-2 z-50'>
                <button onClick={hideDrawer}>
                    <AiFillCloseCircle size={"24"}/>
                </button>
            </li>
            <li>
                <Link to="/">Home</Link>
            </li>
            {
                isLoggedin && role === "ADMIN" && (
                    <li>
                        <Link to="/admin/dashboard">Admin Dashboard</Link>
                    </li>
                )
            }
            <li>
                <Link to="/courses">All courses</Link>
            </li>
            <li>
                <Link to="/contact">contact</Link>
            </li>
            <li>
                <Link to="/about">about us</Link>
            </li>
            <br />
            <br />
            {
                !isLoggedin &&(
                    <li className='absolute bottom-4 w-[90%]'>
                        <div className="w-full flex items-center justify-center">
                          <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                            <Link to="/login">LOGIN</Link>
                          </button>
                          <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                            <Link to="/sign">Signup</Link>
                          </button>
                        </div>
                    </li>
                )
            }
            {
                isLoggedin &&(
                    <li className='absolute bottom-4 w-[90%]'>
                        <div className="w-full flex items-center justify-center">
                          <button className='btn-primary px-4 py-1 font-semibold rounded-md w-full'>
                            <Link to="/user/profile">profile</Link>
                          </button>
                          <button className='btn-secondary px-4 py-1 font-semibold rounded-md w-full'>
                            <Link onClick={handleLogout}>LOGOUT</Link>
                          </button>
                        </div>
                    </li>
                )
            }
        </ul>

      </div>
      {children}
      <Footer/> 
    </div>
  )
}

export default Home

// import React, { useState, useRef } from 'react';
// import { FiMenu } from 'react-icons/fi';
// import { AiFillCloseCircle } from 'react-icons/ai';
// import { Link } from 'react-router-dom';
// import Footer from './Footer';

// const Home = ({ children }) => {
//   const [drawerWidth, setDrawerWidth] = useState(0);
//   const drawerRef = useRef(null);

//   const toggleWidth = () => {
//     if (drawerWidth === 0) {
//       setDrawerWidth('auto');
//     } else {
//       setDrawerWidth(0);
//     }
//   };

//   const hideDrawer = () => {
//     const element = document.getElementsByClassName('drawer-toggle');
//     if (element.length > 0) {
//       element[0].checked = false;
//       setDrawerWidth(0);
//     }
//   };

//   return (
//     <div className='min-h-[90vh]'>
//       <div className='drawer absolute left-0 z-50 w-fit' ref={drawerRef} style={{ width: drawerWidth }}>
//         <input className='drawer-toggle' id='my-drawer' type='checkbox' />
//         <div className='drawer-content'>
//           <label htmlFor='my-drawer' className='cursor-pointer relative'>
//             <FiMenu size={32} className='font-bold text-white m-4' onClick={toggleWidth} />
//           </label>
//         </div>
//         <label htmlFor='my-drawer' className='drawer-overlay' onClick={hideDrawer}></label>
//         <ul className='menu p-4 w-48 sm:w-80 bg-base-100 text-base-content relative'>
//           <li className='w-fit absolute right-2 z-50'>
//             <button onClick={hideDrawer}>
//               <AiFillCloseCircle size={24} />
//             </button>
//           </li>
//           <li>
//             <Link to='/'>Home</Link>
//           </li>
//           <li>
//             <Link to='/courses'>All courses</Link>
//           </li>
//           <li>
//             <Link to='/contact'>Contact</Link>
//           </li>
//           <li>
//             <Link to='/about'>About us</Link>
//           </li>
//         </ul>
//       </div>
//       {children}
//       <Footer />
//     </div>
//   );
// };

// export default Home;



