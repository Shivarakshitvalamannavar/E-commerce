import './cart-icon.styles.scss'
import { useContext, useEffect, useState } from 'react'
import { CartContext } from '../../contexts/cart.context'
import {ReactComponent as ShoppingIcon} from '../../assests/shopping-bag.svg'
const Carticon = () =>{

    const {isCartOpen,setIsCartOpen,cartItems,cartCountQuantity,num} = useContext(CartContext)

    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    useEffect(() =>{

        // console.log('useEffect called')
        // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        // setNum(totalQuantity);

        cartCountQuantity(cartItems)



    },[cartItems])


    return(
        <div className='cart-icon-container' onClick={toggleIsCartOpen}>
            <ShoppingIcon className='shopping-icon'/>
            <span className='item-count'>{num}</span>
        </div>
    )
}

export default Carticon