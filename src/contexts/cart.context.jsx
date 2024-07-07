import {  createContext, useContext ,useState } from "react";

const addCartItem =(cartItems,productToAdd) =>{
    const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

    if(existingCartItem){
        return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?{...cartItem,quantity:cartItem.quantity + 1} : cartItem)

    }

    return [...cartItems,{...productToAdd ,quantity : 1}]
}


const removeItem=(cartItems,productToRemove) =>{
    const exsisting = cartItems.find((cartItem) => cartItem.id === productToRemove.id)

    if(exsisting){
       const Updateditems =cartItems.map((cartItem) => cartItem.id ===productToRemove.id ?{...cartItem,quantity :cartItem.quantity > 1 ? cartItem.quantity-1:0,} : cartItem)
    // This is for the buttom which decerments the qunatity of item by one each time clocked upon
       return Updateditems.filter((cartItem) => cartItem.quantity !== 0)
    }

}


const clearItem=(cartItems,productToClear)=> {
    const exsisting = cartItems.find((cartItem) => cartItem.id === productToClear.id)

    if(exsisting){
        const Updateditems =cartItems.filter((cartItem) => cartItem.id !== productToClear.id)

        return Updateditems
    }
}


const cartCount = (cartItems) =>{

    const totalQuantity =cartItems.reduce((acc,item) => acc+item.quantity,0);

    return totalQuantity
}

const totalValue = (cartItems) =>{
    const Total =cartItems.reduce((acc,item) => acc+item.price*item.quantity,0);
    return Total
}



export const CartContext = createContext({
    isCartOpen : false,
    setIsCartOpen : () => {},
    cartItems:[],
    num : 0,
    total :0,
    addItemToCart: () => {},
    removeItemFromCart: () => {},
    cartCountQuantity: () => {},
    cartTotal: () => {},
    clearItemFromCart: ()=> {},

})

export const UserCartContext = ({children}) => {
    const [isCartOpen, setIsCartOpen] = useState(false)
    const [cartItems, setCartItems] = useState([]);
    const [num ,setNum] =useState(0);
    const [total,setTotal] =useState(0);
    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems,productToAdd))
    }

    const removeItemFromCart = (productToRemove) => {
        setCartItems(removeItem(cartItems,productToRemove))
    }

    const cartCountQuantity =(cartItems) =>{
        setNum(cartCount(cartItems))
    }

    const cartTotal =(cartItems) =>{
        setTotal(totalValue(cartItems))
    }

    const clearItemFromCart =(productToClear) => {
        setCartItems(clearItem(cartItems,productToClear))
    }
    const value ={isCartOpen,setIsCartOpen,addItemToCart,cartItems,removeItemFromCart,
        cartCountQuantity,num,clearItemFromCart,cartTotal,total}

    return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}