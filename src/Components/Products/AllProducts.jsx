import React from "react";

import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';

import "./AllProducts.css";


function AllProducts() {
const { data, buyProduct } = useContext (DataContext);

   return data.map((product)=>{
      return (
         <div className="cartContent">
            <div className="card" key={product.id}>
            <div className="container-img"><img src={product.image} alt="product"/></div>
            <div className="texto"><h3>{product.title}</h3>
            <h4>{product.price}</h4></div>
            <button onClick={()=> buyProduct(product)}>Add To Cart</button>
         </div>

         </div>
         

      )
   })
};

export default AllProducts;