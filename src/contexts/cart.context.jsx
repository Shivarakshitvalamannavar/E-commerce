import {  createContext, useContext ,useState } from "react";

export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
})

export const UserCartContext = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const value ={isCartOpen,setIsCartOpen}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}