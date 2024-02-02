import React from 'react'
import logo from '../assets/logo.png'

const LoadingScreen = () => {
  return (
    <div className='fixed top-0 left-0 w-screen h-screen bg-slate-900 z-20 flex justify-center items-center'>

        <div className="justify-center items-center flex flex-col">
            <img width={200} src={logo} alt="" />
            <div className="loader h-1 w-full bg-white relative rounded-full my-2 overflow-hidden">
                <span className='bg-green-500 w-12 p-1 left-to-right absolute rounded-lg top-0'></span>
                <span className='bg-green-600 w-12 p-1 left-to-right absolute rounded-lg top-0'></span>
                <span className='bg-green-700 w-12 p-1 left-to-right absolute rounded-lg top-0'></span>
            </div>
        </div>
      
    </div>
  )
}

export default LoadingScreen
