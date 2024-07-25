// import { useContext,useEffect } from 'react';

// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

// import { CartContext } from '../../contexts/cart.context';

// import { CartIconContainer, ItemCount } from './cart-icon.styles';

// const CartIcon = () => {

//   const {isCartOpen,setIsCartOpen,cartItems,cartCountQuantity,num} = useContext(CartContext)

//   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

//   useEffect(() =>{

//     // console.log('useEffect called')
//     // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
//     // setNum(totalQuantity);

//     cartCountQuantity(cartItems)



// },[cartItems])

//   return (
//     <CartIconContainer onClick={toggleIsCartOpen}>
//       <ShoppingIcon className='shopping-icon' />
//       <ItemCount>{num}</ItemCount>
//     </CartIconContainer>
//   );
// };

// export default CartIcon; Commneted this part since i took a diff approach
// import { useContext } from 'react';

// import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

//  import { CartContext } from '../../contexts/cart.context';

// import { CartIconContainer, ItemCount } from './cart-icon.styles';

// const CartIcon = () => {
//   const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext);

//   const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

//   return (
//     <CartIconContainer onClick={toggleIsCartOpen}>
//       <ShoppingIcon className='shopping-icon' />
//       <ItemCount>{cartCount}</ItemCount>
//     </CartIconContainer>
//   );
// };

// export default CartIcon; commented this since now we use redux library instead of contexts

// import { useContext } from 'react';

import { ReactComponent as ShoppingIcon } from '../../assests/shopping-bag.svg';

// import { CartContext } from '../../contexts/cart.context';
import { useDispatch ,useSelector} from 'react-redux';
import { selectCartCount,selectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.action';
import { CartIconContainer, ItemCount } from './cart-icon.styles';

const CartIcon = () => {
  const dispatch =useDispatch()

  const cartCount=useSelector(selectCartCount);
  const isCartOpen=useSelector(selectIsCartOpen);

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

  return (
    <CartIconContainer onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <ItemCount>{cartCount}</ItemCount>
    </CartIconContainer>
  );
};

export default CartIcon;