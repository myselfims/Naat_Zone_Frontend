import React from 'react'
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Loader = () => {
  return (
    <div className='inline mx-1'>
      <AiOutlineLoading3Quarters className='animate-spin inline'/>
    </div>
  )
}

export default Loader
