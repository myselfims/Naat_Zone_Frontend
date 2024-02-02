import React from 'react'

const HeroBanner = () => {
  return (
    <div className='w-full relative flex-col justify-center flex px-28 bg-gradient-to-r to-green-500 from-slate-700 items-center h-52 border-b-2'>

        <div className="flex items-center justify-center">
            <h1 className='text-3xl font-bold text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
        </div>
      
        <div className='text-white absolute bottom-0 py-4'>
            <button className='mx-2'>o</button>
            <button className='mx-2'>o</button>
            <button className='mx-2'>o</button>
            <button className='mx-2'>o</button>
        </div>
    </div>
  )
}

export default HeroBanner
