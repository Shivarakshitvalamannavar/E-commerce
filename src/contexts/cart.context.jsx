// import {  createContext, useContext ,useReducer,useState } from "react";

// const addCartItem =(cartItems,productToAdd) =>{
//     const existingCartItem = cartItems.find((cartItem) => cartItem.id === productToAdd.id);

//     if(existingCartItem){
//         return cartItems.map((cartItem) => cartItem.id === productToAdd.id ?{...cartItem,quantity:cartItem.quantity + 1} : cartItem)

//     }

//     return [...cartItems,{...productToAdd ,quantity : 1}]
// }


// const removeItem=(cartItems,productToRemove) =>{
//     const exsisting = cartItems.find((cartItem) => cartItem.id === productToRemove.id)

//     if(exsisting){
//        const Updateditems =cartItems.map((cartItem) => cartItem.id ===productToRemove.id ?{...cartItem,quantity :cartItem.quantity > 1 ? cartItem.quantity-1:0,} : cartItem)
//     // This is for the buttom which decerments the qunatity of item by one each time clocked upon
//        return Updateditems.filter((cartItem) => cartItem.quantity !== 0)
//     }

// }


// const clearItem=(cartItems,productToClear)=> {
//     const exsisting = cartItems.find((cartItem) => cartItem.id === productToClear.id)

//     if(exsisting){
//         const Updateditems =cartItems.filter((cartItem) => cartItem.id !== productToClear.id)

//         return Updateditems
//     }
// }


// const cartCount = (cartItems) =>{

//     const totalQuantity =cartItems.reduce((acc,item) => acc+item.quantity,0);

//     return totalQuantity
// }

// const totalValue = (cartItems) =>{
//     const Total =cartItems.reduce((acc,item) => acc+item.price*item.quantity,0);
//     return Total
// }

// const INITIAL_STATE ={
//     cartItems:[],
//     num : 0,
//     total :0,
//     isCartOpen : false,
// }

//  const CartReducer = (state,action) =>{
//     const {type,payload} = action;
//     switch(type){
//     case 'ADD_ITEM' :
//         return {...state, ...payload}
//     default:
//         throw new Error(`UnHandledError ${type}`)
//  }
// }


// export const CartContext = createContext({
//     isCartOpen : false,
//     setIsCartOpen : () => {},
//     cartItems:[],
//     num : 0,
//     total :0,
//     addItemToCart: () => {},
//     removeItemFromCart: () => {},
//     cartCountQuantity: () => {},
//     cartTotal: () => {},
//     clearItemFromCart: ()=> {},

// })

// export const UserCartContext = ({children}) => {
//     // const [isCartOpen, setIsCartOpen] = useState(false)
//     // const [cartItems, setCartItems] = useState([]);
//     // const [num ,setNum] =useState(0);
//     // const [total,setTotal] =useState(0);

//     const[{cartItems,num,total,isCartOpen},dispatch]=useReducer(CartReducer,INITIAL_STATE)


//     const newItems =(newcartItems)=>{

//        const newnum =newcartItems.reduce((acc,item) => acc+item.quantity,0)
//        const newtotal=newcartItems.reduce((acc,item) =>acc+item.quantity*item.price,0)

//         dispatch({type:'ADD_ITEM',payload:{cartItems:newcartItems,num:newnum,total:newtotal,}})

//     }
//     const addItemToCart = (productToAdd) => {
//         setCartItems(addCartItem(cartItems,productToAdd))
//     }

//     const removeItemFromCart = (productToRemove) => {
//         setCartItems(removeItem(cartItems,productToRemove))
//     }

//     const cartCountQuantity =(cartItems) =>{
//         setNum(cartCount(cartItems))
//     }

//     const cartTotal =(cartItems) =>{
//         setTotal(totalValue(cartItems))
//     }

//     const clearItemFromCart =(productToClear) => {
//         setCartItems(clearItem(cartItems,productToClear))
//     }
//     const value ={isCartOpen,setIsCartOpen,addItemToCart,cartItems,removeItemFromCart,
//         cartCountQuantity,num,clearItemFromCart,cartTotal,total}

//     return <CartContext.Provider value={value}>{children}</CartContext.Provider>
// }



//******** */
//Using a lil modifications here
// import { createContext, useState, useEffect } from 'react';

// const addCartItem = (cartItems, productToAdd) => {
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === productToAdd.id
//   );

//   if (existingCartItem) {
//     return cartItems.map((cartItem) =>
//       cartItem.id === productToAdd.id
//         ? { ...cartItem, quantity: cartItem.quantity + 1 }
//         : cartItem
//     );
//   }

//   return [...cartItems, { ...productToAdd, quantity: 1 }];
// };

// const removeCartItem = (cartItems, cartItemToRemove) => {
//   // find the cart item to remove
//   const existingCartItem = cartItems.find(
//     (cartItem) => cartItem.id === cartItemToRemove.id
//   );

//   // check if quantity is equal to 1, if it is remove that item from the cart
//   if (existingCartItem.quantity === 1) {
//     return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
//   }

//   // return back cartitems with matching cart item with reduced quantity
//   return cartItems.map((cartItem) =>
//     cartItem.id === cartItemToRemove.id
//       ? { ...cartItem, quantity: cartItem.quantity - 1 }
//       : cartItem
//   );
// };

// const clearCartItem = (cartItems, cartItemToClear) =>
//   cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

// export const CartContext = createContext({
//   isCartOpen: false,
//   setIsCartOpen: () => {},
//   cartItems: [],
//   addItemToCart: () => {},
//   removeItemFromCart: () => {},
//   clearItemFromCart: () => {},
//   cartCount: 0,
//   cartTotal: 0,
// });

// export const CartProvider = ({ children }) => {
//   const [isCartOpen, setIsCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([]);
//   const [cartCount, setCartCount] = useState(0);
//   const [cartTotal, setCartTotal] = useState(0);

//   useEffect(() => {
//     const newCartCount = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity,
//       0
//     );
//     setCartCount(newCartCount);
//   }, [cartItems]);

//   useEffect(() => {
//     const newCartTotal = cartItems.reduce(
//       (total, cartItem) => total + cartItem.quantity * cartItem.price,
//       0
//     );
//     setCartTotal(newCartTotal);
//   }, [cartItems]);

//   const addItemToCart = (productToAdd) => {
//     setCartItems(addCartItem(cartItems, productToAdd));
//   };

//   const removeItemToCart = (cartItemToRemove) => {
//     setCartItems(removeCartItem(cartItems, cartItemToRemove));
//   };

//   const clearItemFromCart = (cartItemToClear) => {
//     setCartItems(clearCartItem(cartItems, cartItemToClear));
//   };

//   const value = {
//     isCartOpen,
//     setIsCartOpen,
//     addItemToCart,
//     removeItemToCart,
//     clearItemFromCart,
//     cartItems,
//     cartCount,
//     cartTotal,
//   };

//   return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
// };

import { createContext, useReducer, useEffect } from 'react';

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quantity: 1 }];
};

const removeCartItem = (cartItems, cartItemToRemove) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToRemove.id
  );

  if (existingCartItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== cartItemToRemove.id);
  }

  return cartItems.map((cartItem) =>
    cartItem.id === cartItemToRemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};

const clearCartItem = (cartItems, cartItemToClear) =>
  cartItems.filter((cartItem) => cartItem.id !== cartItemToClear.id);

const INITIAL_STATE = {
  isCartOpen: false,
  cartItems: [],
  cartCount: 0,
  cartTotal: 0,
};

const CART_ACTION_TYPES = {
  SET_CART_ITEMS: 'SET_CART_ITEMS',
  SET_IS_CART_OPEN: 'SET_IS_CART_OPEN',
};

const cartReducer = (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case CART_ACTION_TYPES.SET_CART_ITEMS:
      return {
        ...state,
        ...payload,
      };
    case CART_ACTION_TYPES.SET_IS_CART_OPEN:
      return {
        ...state,
        isCartOpen: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in cartReducer`);
  }
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearItemFromCart: () => {},
  cartCount: 0,
  cartTotal: 0,
});

export const CartProvider = ({ children }) => {
  const [{ isCartOpen, cartItems, cartCount, cartTotal }, dispatch] = useReducer(cartReducer, INITIAL_STATE);

  const updateCartItems = (newCartItems) => {
    const newCartCount = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity,
      0
    );
    const newCartTotal = newCartItems.reduce(
      (total, cartItem) => total + cartItem.quantity * cartItem.price,
      0
    );

    dispatch({
      type: CART_ACTION_TYPES.SET_CART_ITEMS,
      payload: {
        cartItems: newCartItems,
        cartCount: newCartCount,
        cartTotal: newCartTotal,
      },
    });
  };

  const addItemToCart = (productToAdd) => {
    const newCartItems = addCartItem(cartItems, productToAdd);
    updateCartItems(newCartItems);
  };

  const removeItemFromCart = (cartItemToRemove) => {
    const newCartItems = removeCartItem(cartItems, cartItemToRemove);
    updateCartItems(newCartItems);
  };

  const clearItemFromCart = (cartItemToClear) => {
    const newCartItems = clearCartItem(cartItems, cartItemToClear);
    updateCartItems(newCartItems);
  };

  const setIsCartOpen = (isOpen) => {
    dispatch({
      type: CART_ACTION_TYPES.SET_IS_CART_OPEN,
      payload: isOpen,
    });
  };

  const value = {
    isCartOpen,
    setIsCartOpen,
    addItemToCart,
    removeItemFromCart,
    clearItemFromCart,
    cartItems,
    cartCount,
    cartTotal,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};