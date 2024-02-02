import React, { useEffect, useState } from 'react';
import logo from '../assets/logo.png'
import { FaUserCircle } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
import { getData } from '../api';
import { MdOutlineFileUpload } from "react-icons/md";
import {useNavigate} from 'react-router-dom'

const NavBar = () => {
    const [navFixed, setNavFixed] = useState(false)
    const {token} = useSelector(state=>state.globalState)
    const [naats, setNaats] = useState([])
    const [query, setQuery] = useState('')
    const navigate = useNavigate()

    const controlNavbar = ()=>{
        console.log(window.scrollY)
        if (window.scrollY>=130){
            setNavFixed(true)
        } else if (window.scrollY>=10){
            setNavFixed(false)
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll',controlNavbar)

        return ()=>{
            window.removeEventListener('scroll',controlNavbar)
        }
    },[])

    const handleSearch = (e)=>{
        setQuery(e.target.value)
        getSuggetions(e)
    }

    const abortController = new AbortController();

    const search = (q)=>{
        setNaats([])
        navigate('/search/'+q)
    }

    const getSuggetions = (e)=>{
        // query.length==0?setNaats([]):null
        let query = e.target.value
        abortController.abort()
        setNaats([])
        getData('/search/'+query).then((res)=>{
            console.log(res)
            setNaats(res)
        })
    }

  return (
    <header>
        <nav className={`bg-slate-900 px-20 py-2 flex items-center justify-between ${navFixed? 'fixed top-0 left-0 w-screen z-10 scroll-down':null}`}>
            <div>
                <Link to={'/'}>
                    <img width={100} src={logo} alt="" />
                </Link>
            </div>
            <div className="links text-white">
                <a className='mx-3 text-green-300 border-b-2 py-3 border-green-300 font-semibold' href="">Home</a>
                <a className='mx-3' href="">Lo-Fi</a>
                <a className='mx-3' href="">Favorite</a>
                <a className='mx-3' href="">Naat Khwan</a>
            </div>

            <div className="search-box relative w-96 py-1 rounded-full px-3 bg-white flex items-center">
                <input onChange={handleSearch} placeholder='Search here...' className='w-full bg-transparent outline-none border-none' type="text" />
                <IoIosSearch onClick={()=>search(query)} className='w-7 h-7 font-bold cursor-pointer hover:opacity-75'/>
                {naats.length>0?
                <div className="bg-white border absolute left-0 top-10 w-full rounded-md z-10">
                    <ul>
                        {naats?.map((naat,index)=>(
                            <li onClick={()=>search(naat?.title)} className='cursor-default hover:bg-slate-300 px-2 py-1' key={index}>{naat?.title}</li>
                        ))}
                    </ul>
                </div>:null}
            </div>

            <div className='flex items-center justify-center'>
                {token.length==0?
                <div className='text-white'>
                    <Link to={'/login'} className='rounded-lg mx-1 px-2 py-1 hover:opacity-75 transition-all'>Login</Link>
                    <Link to={'/signup'} className='rounded-lg mx-1 px-2 py-1 bg-green-500 font-bold hover:opacity-75 transition-all'>Signup</Link>
                </div>:
                <div className='ml-5 flex items-center'>
                    <button className='border-2 bg-transparent border-green-500 rounded-xl text-white flex  px-2 py-1 mx-4 hover:bg-green-900 transition-all'><MdOutlineFileUpload className='w-6 h-6 mx-1'/> Upload</button>
                    <FaUserCircle className='text-white w-6 h-6'/>
                </div>}
            </div>
        </nav>
      
    </header>
  )
}

export default NavBar
