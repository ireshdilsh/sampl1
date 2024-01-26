import axios from 'axios';
import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom';

export default function ProtectedRoute() {
 
    const token=localStorage.getItem("token");
    const navigate=useNavigate();

    if(!token){
           navigate("/");
    }else{
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        return <Outlet/>
    }

  return (
    <div>
      
    </div>
  )
}
