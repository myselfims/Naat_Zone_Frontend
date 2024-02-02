import React from 'react'
import logo from '../assets/logo.png'
import { useFormik } from 'formik';
import Login from './Login'
import Signup from './Signup'
import { Link } from 'react-router-dom';



const Authentication = ({page}) => {



  return (
    <div className='z-20 flex justify-center items-center w-screen h-screen'>
        <div className="w-8/12 border-2 rounded-xl flex overflow-hidden bg-white">
            <div className="bg-slate-900 w-6/12 flex items-center justify-center flex-col relative">
                <div className="absolute top-5 left-5 z-10">
                  <Link to={'/'}>
                    <img width={100} src={logo} alt="" />
                  </Link>
                </div>
                <img className='w-full absolute bottom-0 opacity-10 left-0' src="https://e1.pxfuel.com/desktop-wallpaper/568/1009/desktop-wallpaper-mohammed-firozshah-on-gumbad-e-khizra-madina.jpg" alt="" />
                <h1 className='text-3xl text-white font-bold text-center'>Lorem ipsum dolor sit amet consectetur adipisicing.</h1>
            </div>
            <div className='w-6/12 h-full text-black p-3'>
              {page=='login'?
               <Login />
               :
               <Signup/>}
            </div>
        </div>
    </div>
  )
}

export default Authentication
