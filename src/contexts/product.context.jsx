import { createContext, useState, useEffect  } from "react";

import PRODUCTS from '../shop-data.json'

export const ProductContext =
 createContext({
    products : [],
    
})
export const UseProductProvider = ({children}) =>{
    const [products, setProducts] = useState(PRODUCTS);
    const value ={products}

    return <ProductContext.Provider value={value}>{children}</ProductContext.Provider>
}