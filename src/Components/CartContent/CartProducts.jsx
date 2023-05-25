import { useContext } from "react";
import { DataContext } from "../../Context/ConversoContext";

import CartElements from "./CartElements";
import CartTotal from "./CartTotal";


const CartProducts = () =>{
   const { cart } = useContext(DataContext);
    return cart.length > 0 ?(
    <>
    <CartElements key="cartElements"/>
    <CartTotal />
    </>
    ): (
      <h2>Cart is empty</h2>
    );
};

export default CartProducts;