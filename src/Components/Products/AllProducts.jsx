import React, { useContext, useState } from "react";
import { DataContext } from '../../Context/ConversoContext';
import "./AllProducts.css";

function AllProducts() {
  const { data, buyProduct } = useContext(DataContext);

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
