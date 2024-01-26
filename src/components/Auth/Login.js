import axios from 'axios';
import React, { useState } from 'react'
import { Button, Form } from 'react-bootstrap'
import {useNavigate } from 'react-router-dom';

export default function Login() {

    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

    const navigate=useNavigate();

   const handlepassword=(event)=>{
         setPassword(event.target.value);
   }

   const hadleemail=(event)=>{
    setUsername(event.target.value);
   } 

const loginUser= async(event)=>{
    event.preventDefault();

    const data={
        "username":username,
        "password":password
    }

    try{
        const response=await axios.post("http://localhost:8080/auth/login",data)
        // storing token
        localStorage.setItem("token",response.data);
        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data}`;
       navigate("/home");
       
    }catch(error){
         console.log(error);
    }

}


  return (
    <div>
      <Form onSubmit={loginUser}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text" placeholder="Enter email or username"  onChange={hadleemail}/>
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicEmails">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password"  onChange={handlepassword}/>
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        
      <div className="register-button">
        <Button type="submit">Sign in</Button>
        </div>
      </Form>
    </div>
  )
}
