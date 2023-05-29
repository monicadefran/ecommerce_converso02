import React, { useContext, useState } from "react";
import { DataContext } from "../../Context/ConversoContext";
import { Button } from "@material-ui/core";
import "./AllProducts.css";

const AllProducts = () => {
  const { data, buyProduct } = useContext(DataContext);
  const [addedToCart, setAddedToCart] = useState([]);

  const handleAddToCart = (product) => {
    buyProduct(product);
    setAddedToCart((prevAddedToCart) => [...prevAddedToCart, product.id]);

    setTimeout(() => {
      setAddedToCart((prevAddedToCart) =>
        prevAddedToCart.filter((id) => id !== product.id)
      );
    }, 4000);
  };

  return (
    <div className="container-allProducts">
      {data.map((product) => (
        <div className="cartContent" key={product.id}>
          <div className="card">
            <div className="container-img">
              <img src={product.image} alt="product" />
            </div>
            <div className="texto">
              <h3>{product.title}</h3>
              <h4>€{product.price}</h4>
            </div>
            <Button
              variant="contained"
              color="primary"
              onClick={() => handleAddToCart(product)}
              className={`button-animation ${
                addedToCart.includes(product.id) ? "added" : ""
              }`}
            >
              {addedToCart.includes(product.id)
                ? "¡Añadido al carrito!" 
                : "Compra ahora"}
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default AllProducts;
