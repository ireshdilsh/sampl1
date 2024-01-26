import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function User() {

  const[name,setName]=useState(null);
  const[email,setEmail]=useState(null);
  const[username,setUsername]=useState(null);
  const[password,setPassword]=useState(null);



  const handlename=(event)=>{
    setName(event.target.value);
  }

  const handleemail=(event)=>{
    setEmail(event.target.value);

  }

  const handleusername=(event)=>{
    setUsername(event.target.value);

  }

  const handlepassword=(event)=>{
    setPassword(event.target.value);

  }

   const crateUser=(event)=>{
      event.preventDefault();

      const data={
        "name":name,
        "email":email,
        "username":username,
        "password":password
      }
      fetch("http://localhost:8080/save/user" , {
        method:"POST",
        headers:{
          "Content-Type":"application/json"
        },
        body:JSON.stringify(data)
      }).then((response)=>{
         return response.json();
      }).then((data)=>{
        console.log(data);
      }).catch((error)=>{
        console.log(error);
      })
   }


  return (
    <div>
      <h1>User</h1>
   <Link to="/">Home</Link>
   <br></br>
      <br></br>
      <br></br>
      <div className="wrapper">
        <form onSubmit={crateUser}>
            <div>
              <input type="text" onChange={handlename} placeholder="name" required/>
            </div>
          
            <div>
              <input type="email" onChange={handleemail} placeholder="email" required/>
            </div>

            <div>
              <input type="text" onChange={handleusername} placeholder="username" required/>
            </div>

            <div>
              <input type="password" onChange={handlepassword} placeholder="password" required/>
            </div>
            
            <div>
              <button type="submit">Add User</button>
            </div>

        </form>
      </div>
    </div>
  )
}
