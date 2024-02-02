import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { postData } from "../api";
import Loader from "../components/Loader";
import {useDispatch} from 'react-redux'
import { setToken } from "../store/features/globalSlice";
import { useNavigate} from 'react-router-dom'

const initialValues = {
    email : '',
    password : ''
}

const validationSchema = Yup.object({
    email : Yup.string().required('email is required!').email(),
    password : Yup.string().min(8).max(20).required('password is required!'),
    // confirm_password : Yup.string().required().oneOf([Yup.ref('password')],'password must match!')
})

const Login = () => {
    const [loading, setLoading] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const {values,errors,handleBlur,handleChange,handleSubmit,resetForm} = useFormik({
        initialValues,
        validationSchema,
        onSubmit : (data)=>{
            setLoading(true)
            console.log(data)
            postData('/login/',data).then((res)=>{
              console.log(res.token)
              dispatch(setToken(res.token))
              resetForm()
              setLoading(false)
              navigate('/')
            })
        },
        
    })

  return (
    <div className="h-full text-black p-3">
      <h1 className="text-center font-semibold text-3xl">Sign In</h1>
      <form onSubmit={handleSubmit}>
        <div className="px-8">
          <div className="flex flex-col text-black my-3">
            <label htmlFor="">Email address</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              name='email'
              placeholder="Email address"
              className="p-2 border-2 rounded-lg bg-transparent outline-none"
              type="email"
              required
            />
          </div>
          <div className="flex flex-col text-black my-3">
            <label htmlFor="">Password</label>
            <input
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.password}
              name='password'
              placeholder="Password"
              className="p-2 border-2 rounded-lg bg-transparent outline-none"
              type="password"
              required
            />
          </div>
          <button type="submit" className="bg-green-500 rounded-full w-full text-white font-bold p-2 hover:bg-green-600 transition-all">
            Sign In {loading?<Loader/>:null}
          </button>

          <hr className="my-4" />

          <div className="flex justify-center">
            <button type="button" className="flex border rounded-full p-2 hover:bg-slate-100 transition-all">
              <FcGoogle className="w-6 h-6 mr-2" /> Sign In with Google
            </button>
          </div>
        </div>  
      </form>
    </div>
  );
};

export default Login;
