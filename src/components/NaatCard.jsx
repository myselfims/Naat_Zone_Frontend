import React, { useState } from "react";
import { FaPlay } from "react-icons/fa";
import { BsThreeDots } from "react-icons/bs";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";
import { MdLibraryAdd } from "react-icons/md";
import {useDispatch} from 'react-redux';
import { setCurrentNaat } from "../store/features/playerSlice";
import {useSelector} from 'react-redux'

const NaatCard = ({naat}) => {
    const [liked, setLiked] = useState(false)
    const [dropdown, setDropdown] = useState(false)
    const dispatch = useDispatch()
    const {currentNaat} = useSelector(state=>state.playerState)

    const like = ()=>{
        liked? setLiked(false):setLiked(true)
    }

    const handleDropdown = ()=>{
        dropdown? setDropdown(false):setDropdown(true)
    }


  return (
    <div className="border cursor-defualt transition-all hover:bg-slate-200 px-4 py-1 relative rounded-lg flex my-5 items-center justify-between">
      <div className="flex items-center">
        <FaPlay onClick={()=>dispatch(setCurrentNaat(naat))} className="w-4 h-4 text-green-500 cursor-pointer hover:text-green-700 transition-all" />
        <div className="mx-6">
          <h1 className={`font-bold ${currentNaat?.audio==naat?.audio?'text-green-600':null}`}>{naat?.title}</h1>
          <p className="text-slate-500">{naat?.naat_khwan}</p>
        </div>
      </div>
      <div className="flex items-center">
        <div className="flex justify-center items-center">
            {
                liked?
                <FaHeart onClick={like} className="mx-2 cursor-pointer text-red-500"/>
                :
                <FaRegHeart onClick={like} className="mx-2 cursor-pointer"/>

            }
            <p>50k</p>
        </div>
        <label className="mx-6" htmlFor="">
          03:60
        </label>
        <BsThreeDots onClick={handleDropdown} className="w-5 h-5 cursor-pointer hover:text-green-500" />

        {dropdown?

        <div onMouseLeave={()=>setDropdown(false)} className="flex z-10 flex-col absolute right-0 bg-white p-4 border rounded-lg top-10">
            <button className="flex justify-center items-center border-b hover:opacity-75"><MdLibraryAdd className="w-4 h-4 mx-2 my-2"/>Add to playlist</button>
        </div>:null
        }
      </div>
    </div>
  );
};

export default NaatCard;
