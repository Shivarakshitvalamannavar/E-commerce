// import { useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

// import { CartContext } from '../../contexts/cart.context';

// import Button from '../button/button.component';
// import CartItem from '../cart-item/cart-item.component';

// import {
//   CartDropdownContainer,
//   EmptyMessage,
//   CartItems,
// } from './cart-dropdown.styles';

// const CartDropdown = () => {
//   const { cartItems } = useContext(CartContext);
//   const navigate = useNavigate();

//   const goToCheckoutHandler = () => {
//     navigate('/checkout');
//   };

//   return (
//     <CartDropdownContainer>
//       <CartItems>
//         {cartItems.length ? (
//           cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
//         ) : (
//           <EmptyMessage>Your cart is empty</EmptyMessage>
//         )}
//       </CartItems>
//       <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
//     </CartDropdownContainer>
//   );
// };

// export default CartDropdown;
//The above code uses reducer and context together but the below code uses redux library as the tool so we have to change the code


import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

import { selectCartItems } from '../../store/cart/cart.selector';
import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';

import {
  CartDropdownContainer,
  EmptyMessage,
  CartItems,
} from './cart-dropdown.styles';

const CartDropdown = () => {
  const cartItems = useSelector(selectCartItems)
  const navigate = useNavigate();

  const goToCheckoutHandler = () => {
    navigate('/checkout');
  };

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  );
};

export default CartDropdown;
