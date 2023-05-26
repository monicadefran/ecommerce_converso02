import React, { useContext, useState } from "react";
import { DataContext } from '../../Context/ConversoContext';
import "./AllProducts.css";

function AllProducts() {
  const { data, buyProduct } = useContext(DataContext);
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
        {data.map((product) => {
          const isLiked = likedProducts.includes(product.id);

          return (
            <div className="cartContent" key={product.id}>
              <div className="card">
                <span onClick={() => handleLike(product.id)} className="heart-icon-container">
                  <span className={isLiked ? 'heart-icon-red' : 'heart-icon'}>
                    {getHeartEmoji(product.id)}
                  </span>
                </span>
                <div className="container-img">
                  <img src={product.image} alt="product" />
                </div>
                <div className="texto">
                  <h3>{product.title}</h3>
                  <h4>€{product.price}</h4>
                </div>
                <button onClick={() => buyProduct(product)}>Add To Cart</button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default AllProducts;

