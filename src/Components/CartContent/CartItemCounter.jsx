import {useContext} from "react";
import {DataContext} from '../../Context/ConversoContext';


const CartItemCounter = ({ product, quanty }) => {
  const { cart, setCart, buyProduct } = useContext (DataContext);

  const decrease = ()=> {
    const productrepeat = cart.find((item)=> item.id === product.id) 

    productrepeat.quanty !== 1 && setCart(cart.map((item)=> item.id === product.id ? {...product, quanty: productrepeat.quanty - 1} : item))
  }

  return (
    <>
      <p className='counter-button' onClick={decrease}>-</p>
      <p>{quanty}</p>
      <p className='counter-button' onClick={()=> buyProduct(product)}>+</p>
    </>
  )
}

export default CartItemCounter;