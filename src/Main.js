import React from 'react'
import { BrowserRouter,Routes,Route} from 'react-router-dom'
import Product from './components/Product'
import Category from './components/Category'
import User from './components/User'
import Home from './components/Home'
import Order from './components/Order'
import Register from './components/Auth/Register'
import Login from './components/Auth/Login'
import ProtectedRoute from './utils/ProtectedRoute'

export default function Main() {
  return (
    <div>
     <BrowserRouter>
      <Routes>
        
        <Route element={<ProtectedRoute/>}>

      <Route path="/home" element={<Home/>}></Route>
      <Route path="/product" element={<Product/>}></Route>
      <Route path="/category" element={<Category/>}></Route>
      <Route path="/user" element={<User/>}></Route>
      <Route path="/order" element={<Order/>}></Route>
      
      </Route>

      <Route path="/register" element={<Register/>}></Route>
      <Route path="/" element={<Login/>}></Route>
      
      </Routes>
     </BrowserRouter>
    </div>
  )
}
