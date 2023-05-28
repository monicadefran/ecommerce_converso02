
import React, { useContext, useState } from "react";
import { DataContext } from '../../Context/ConversoContext';
import { Link } from "react-router-dom";

import "./AllProducts.css";


function AllProducts() {
const { data, buyProduct } = useContext (DataContext);
const [likedProducts, setLikedProducts] = useState([]);

  const handleLike = (productId) => {
    if (likedProducts.includes(productId)) {
      setLikedProducts(likedProducts.filter((id) => id !== productId));
    } else {
      setLikedProducts([...likedProducts, productId]);
    }
  };

  const getHeartEmoji = (productId) => {
    if (likedProducts.includes(productId)) {
      return "❤️";
    } else {
      return "🤍";
    }
  };
  return (
   <>
     <div className="container-allProducts">
       {data.map((product) => (
         <ProductCard
           key={product.id}
           product={product}
           buyProduct={buyProduct}
         />
       ))}
     </div>
   </>
 );
}

function ProductCard({ product, buyProduct }) {
 const [showText, setShowText] = useState(false);

 const handleBuyProduct = () => {
   buyProduct(product);
   setShowText(true);
   setTimeout(() => {
     setShowText(false);
   }, 2000);
 };

 return (
   <div className="cartContent">
     <div className="card">
       <div className="container-img">
         <img src={product.image} alt="product" />
       </div>
       <div className="texto">
         <h3>{product.title}</h3>
         <h4>€{product.price}</h4>
       </div>
       <button className="move" onClick={handleBuyProduct}>
         Add To Cart
       </button>
       {showText && <div>Producto agregado al carrito</div>}
     </div>
   </div>
 );
}

export default AllProducts;
