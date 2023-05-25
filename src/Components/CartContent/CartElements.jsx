import { useContext } from "react";
import { DataContext } from "../../Context/ConversoContext";
import CartItemCounter from "./CartItemCounter";
import "./CartElements.css";

const CartElements = () => {
    const { cart, setCart } = useContext(DataContext);

    const deleteProduct = (id) => {
        const foundId = cart.find((element)=> element.id === id);

        const newCart = cart.filter((element)=> {
            return element !== foundId;
        });

        setCart(newCart);


    };
    
    console.log(cart);
    return cart.map((product)=>{
        return (
            <div className="cartContent" key={product.id}>
                <img src={product.image} alt="product-cart"/>
                <h3>{product.title}</h3>
                <CartItemCounter product={product} quanty={product.quanty}/>
                <h4>{product.price * product.quanty}</h4>
                <h3 className="cart-delete-button" onClick={() => deleteProduct(product.id)}>X</h3>
            </div>
        );
    });
 };

 export default CartElements;


  
