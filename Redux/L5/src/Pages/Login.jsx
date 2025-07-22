import { useState } from "react";
import { useSelector,useDispatch } from "react-redux";
import { login,logout } from "../auth/userSlice";

import React from 'react'


const Login = () => {
    const user=useSelector((state)=>state.user.isAuthenticate);
    const userInfo=useSelector((state)=>state.user.userInfo);
    console.log(user,userInfo);
    
    const dispatch = useDispatch()

    const[userData,setUserData]=useState({
        name:'',
        email:''
    })

    console.log(userData);
    
    const handleSubmit = (e)=>{
        e.preventDefault()
        dispatch(login(userData))
    }

  return (
    <>  
        <h2>Users Data</h2>
        <p>{userInfo?.name}</p>
        <p>{userInfo?.email}</p>
        <h2>User Login Page</h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">User Name :</label>
                <input type="text" value={userData.name} onChange={(e)=>setUserData({...userData,name:e.target.value})}/>
            </div>
             <div>
                <label htmlFor="name">User Email :</label>
                <input type="text" value={userData.email} onChange={(e)=>setUserData({...userData,email:e.target.value})}/>
            </div>
            <button type="submit" >Submit</button>
        </form>
        <button onClick={()=>dispatch(logout())}>LogOut</button>
    </>
  )
}

export default Login