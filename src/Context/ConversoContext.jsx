import { createContext, useEffect, useState } from "react";
import axios from "axios";

export const DataContext = createContext ();

const DataProvider = ({children}) => {
        const [data, setData] = useState ([]);
        const [cart, setCart] = useState ([]);

        useEffect (() => {
            axios.get("stock.json").then((res)=> setData(res.data.stock));
            
        },[])

        const buyProduct = (product) => {
   
            const productrepeat = cart.find((item)=> item.id === product.id) // find repeat products and store it in a variable
         
            if(productrepeat){
               setCart(cart.map((item)=> item.id === product.id ? {...product, quanty: productrepeat.quanty + 1} : item))
            }else {
               setCart([...cart, product]);
            }
         };

    return(
        <DataContext.Provider value={{ data, cart, setCart, buyProduct}}>{children}</DataContext.Provider>
    )
};

export default DataProvider;
