
import React, { useContext, useState } from "react";
import { DataContext } from '../../Context/ConversoContext';
import { Link } from "react-router-dom";

import "./AllProducts.css";


function AllProducts() {
const { data, buyProduct } = useContext (DataContext);

   return (
      <>
   <div className="container-allProducts">
{
   data.map((product)=>{
      return (
         <div className="cartContent">
            <div className="card" key={product.id}>
            <div className="container-img">
               <Link to={`/Details/${product.id}`}>
                  <img src={product.image} alt="product"/>
               </Link>
            </div>
            <div className="texto"><Link><h3>{product.title}</h3></Link>
            <h4>€{product.price}</h4></div>
            <button onClick={()=> buyProduct(product)}>Add To Cart</button>
         </div>

         </div>
         

      )
   })
}
   </div>
   </>
   ) 
};

export default AllProducts;