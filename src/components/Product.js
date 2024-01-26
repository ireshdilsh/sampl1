import axios from 'axios';
import React, {useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

export default function Product() {

   const[name,setName]=useState(null);
   const[price,setprice]=useState(null);
   const[qty,setqty]=useState(null);
   const[categoryid,setcategoryid]=useState(null);
   const[category,setcategory]=useState(null);
   const navigate=useNavigate();

  useEffect(()=>{
       getAllCategories();
  },[])

   const handlename=(event)=>{
    setName(event.target.value);
   }

   const handleprice=(event)=>{
    setprice(event.target.value);
   }

   const handleqty=(event)=>{
    setqty(event.target.value);
   }

  const handleselect=(event)=>{
   setcategoryid(event.target.value);
  }

  const getAllCategories= async()=>{
     try {
      const response=await axios.get("http://localhost:8080/get/categories")
      setcategory(response.data);
     } catch (error) {
      if (error.response.status===401) {
        navigate("/");
      }
     // console.log(error);
     }
  }


 const createProduct=async(event)=>{
     event.preventDefault();

     const data={
      "name":name,
      "price":price,
      "qty":qty,
      "categoryid":categoryid
     }

     try {
      const response=await axios.post("http://localhost:8080/product/save",data)
      console.log(response);
     } catch (error) {
        console.log(error);
     }
     
 }

  return (
    <div>
      <h1>Product</h1>
      <Link to="/">Home</Link>
      <br></br>
      <br></br>
      <br></br>
   <div>
    
      <form onSubmit={createProduct}>
      <input type="text" placeholder="Name" onChange={handlename}  required/>
      <input type="text" placeholder="Price" onChange={handleprice}  required/>
      <input type="text" placeholder="QTY" onChange={handleqty}  required/>
      <div>
            <select onChange={handleselect}>
             <option>Select Category</option> 
            
              {category && category.map((cata) => (
                <option value={cata.id}>
                  {cata.name}
                </option>
              ))}
           
            </select>
          </div>
          <div>
            <button type="submit">Add Product</button>
          </div>
      </form>
      </div>
    </div>
  )
}
