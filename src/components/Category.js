import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Category() {


 const[name,setname]=useState(null);
 const handlename=(event)=>{
    setname(event.target.value);
 }

  const createCategory=async(event)=>{
      
        event.preventDefault();

        const data={
           "name":name
        }

        try {
          const response=await axios.post("http://localhost:8080/save/category",data);
          console.log(response.data);
        } catch (error) {
          console.log(error);
        }
  }
  
    return (
    <div>
      <h1>Category</h1>
      <Link to="/">Home</Link>
      <br></br>
      <br></br>
      <br></br>
      <div>
      <form onSubmit={createCategory}>
          <div>
          <input type="text" required placeholder="category name"  onChange={handlename}/>
          </div>
          <div>
         <button type="submit">Add Category</button>
          </div>
      </form>
      </div>
    </div>
  )
}
