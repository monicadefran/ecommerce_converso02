
import React, { useContext, useState } from "react";
import { DataContext } from '../../Context/ConversoContext';
// import { Link } from "react-router-dom";

import "./AllProducts.css";

// const AllProducts = () => {
//   const { data, buyProduct } = useContext(DataContext);
//   const [addedToCart, setAddedToCart] = useState([]);

//   const handleAddToCart = (product) => {
//     buyProduct(product);
//     setAddedToCart((prevAddedToCart) => [...prevAddedToCart, product.id]);
//   }

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
            <div className="container-img"><img src={product.image} alt="product"/></div>
            <div className="texto"><h3>{product.title}</h3>
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
}

export default AllProducts;
