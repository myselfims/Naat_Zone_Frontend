import React, { useEffect } from 'react'
import HeroBanner from '../components/HeroBanner'
import SquareCard from '../components/SquareCard';
import {useSelector, useDispatch} from 'react-redux'
import NaatCard from '../components/NaatCard';
import { getData } from '../api';
import { setNaatKhwans, setNaats } from '../store/features/homeSlice';
import Loader from '../components/Loader'

const Home = () => {
  const {naats,naat_khwans} = useSelector(state=>state.homeState)
  const dispatch = useDispatch()

  useEffect(()=>{
    getData('/naats').then((res)=>{
      dispatch(setNaats(res))
      console.log(res)
    })
    getData('/naat-khwans').then((res)=>{
      dispatch(setNaatKhwans(res))
    })
  },[])



  return (
    <div>
      <div className="">
        <HeroBanner/>
        <div className="content my-12 px-20">
            <div className="">
                <div className='flex justify-between items-end'>
                    <h1 className='font-semibold text-xl'>Trending</h1>
                    <button className='text-blue-700'>Show more</button>
                </div>
                <div className='my-4 categories flex justify-between'>
                  {naat_khwans.length==0? <div className="w-full flex justify-center"><Loader/></div> :null}
                  {naat_khwans.slice(0,8)?.map((naat_khwan, index)=>(
                    <SquareCard index={index} naat_khwan={naat_khwan}/>
                  ))}
                </div>

                <div className="listing my-4">
                    <div className="head border-b py-2">
                        <h1 className='font-semibold  text-xl'>Latest Release</h1>
                    </div>
                    <div className="body">
                        <div className="w-6/12">
                          {naats?.map((naat,index)=>(
                            <NaatCard key={index} naat={naat}/>
                          ))}
                        </div>
                        <div>

                        </div>
                    </div>
                </div>

            </div>
        </div>
      </div>
    </div>
  )
}

export default Home
