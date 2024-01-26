import axios from 'axios';
import React, { useState } from 'react'
import { Form } from 'react-bootstrap'
import Button from 'react-bootstrap/Button';

export default function Register() {

  
    const[email,setEmail]=useState("");
    const[username,setUsername]=useState("");
    const[password,setPassword]=useState("");

   const handlepassword=(event)=>{setPassword(event.target.value);}
   const hadleemail=(event)=>{setEmail(event.target.value);}
   const handleusername=(event)=>{setUsername(event.target.value);}

   const createUser= async(event)=>{
        event.preventDefault();

        const data={
           "email":email,
           "username":username,
           "password":password
        }

        try{
       const response= await axios.post("http://localhost:8080/auth/register",data)
           console.log(response); 
        }catch(error){
            console.log(error);
        }
    }

  return (
    <div>
       <div className="login-box">
       <Form onSubmit={createUser}>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email"  onChange={hadleemail}/>
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicUsername">
        <Form.Label>username </Form.Label>
        <Form.Control type="text" placeholder="Enter username"  onChange={handleusername}/>
        <Form.Text className="text-muted">
        </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Enter password" onChange={handlepassword}/>
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <div className="register-button">
        <Button type="submit">Register</Button>
        </div>
          </Form>
       </div>
    </div>
  )
}
