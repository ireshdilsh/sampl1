import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './../styles/home.css'
export default function Order() {

   const[products,setProduct]=useState(null);
   const[Orders,setOrders]=useState([]);
   const[total,setTotal]=useState(0);
   const[tax,setTax]=useState(0);
   const[count,setCount]=useState(0);

   const increment=()=>{
     setCount(count+1);
   }

   useEffect(()=>{
    getProducts();
},[])
const calculateTax=(total)=>{
    setTax(total/100*15);
}
useEffect(()=>{
   calculateTax(total);
},[total])

    const getProducts= async () => {
        const response=await axios.get("http://localhost:8080/get/products")
        setProduct(response.data);
    }

    const saveOrder = async()=>{
        const productIds = Orders.map(product=>product.id);//assign ids of the products to a single array

        const data={
            "products":productIds
        }

        const response = await axios.post("http://localhost:8080/save/order",data);
        //console.log(response);
        if (response.status===200) {
            alert("success save");
            setOrders([]);
            setTotal(0);
            setTax(0);
        } else {
            //show error message
        }
    }

  return (
    <div>
        <div className="container-fluid">
            <div className="heading text-center">
                <h1>Page Order</h1>
            </div>
        </div>
      <div className="row">
        <div className="col-md-6">
        <h3>products</h3>
            {products && products.map(product =>(
                <div key={product.id} className="product shadow-sm bordered bg-light px-3 py-3 mb-3">
                    <div className="row">
                        <div className="col-md-6">
                            <h5>{product.name}</h5>
                            <h5>{product.price}</h5>
                        </div>
                        <button className="btn btn-primary" onClick={()=>{
                             setOrders([...Orders,product]);
                            let productTotal=total+product.price;
                             setTotal(productTotal);
                             increment();// cart ekata badu add una kiyala pennana count eka
                        }}>
                            Add
                        </button>
                    </div>
                </div>
            ))}
           
        </div>
        <div className="col-md-6">
           <h1>Orders</h1>
           <i class="fa-solid fa-cart-shopping">{count}</i>
           <table className="table">
            <thead>
                <tr>
                   <th>
                    ProductID
                   </th>
                   <th>
                    Name
                   </th>
                   <th>Price</th>
                </tr>
            </thead>
            <tbody>
               {Orders.map(product =>(
                <tr>
                    <td>{product.id}</td>
                    <td>{product.name}</td>
                      <td>{product.price}</td>
                </tr>
              ))}
            </tbody>
            <thead>
                <tr>
                    <th colSpan={2}>
                        Total is (in tax):
                    </th>
                    <th>
                        {total+tax}
                        //methana witharai update kare
                    </th>
                </tr>
                <tr>
                    <th colSpan={2}>
                        Tax is :
                    </th>
                    <th>
                        {tax}
                    </th>
                </tr>
            </thead>
           </table>
           <button className="btn btn-secondry" onClick={saveOrder}>Save Order</button>
        </div>
      </div>
    </div>
  )
}
