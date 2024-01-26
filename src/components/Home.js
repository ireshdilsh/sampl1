import React from 'react'
import { Link } from 'react-router-dom'
import './../styles/home.css'

export default function Home() {
  return (
    <div>
         <Link to="/category">Category</Link>
       <Link to="/product">Product</Link>
       <Link to="/user">User</Link>
       <Link to="/order">Order</Link>
       <Link to="/register">Register</Link>
       <Link to="/">Login</Link>
    </div>
  )
}
