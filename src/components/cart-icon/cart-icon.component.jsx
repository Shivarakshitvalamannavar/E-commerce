import { useContext,useEffect } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

import { CartContext } from '../../contexts/cart.context';

import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {

  const {isCartOpen,setIsCartOpen,cartItems,cartCountQuantity,num} = useContext(CartContext)

  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

  useEffect(() =>{

    // console.log('useEffect called')
    // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
    // setNum(totalQuantity);

    cartCountQuantity(cartItems)



},[cartItems])

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{num}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;
