
// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

// import CheckoutItem from '../../components/checkout-item/checkout-item';

// import {
//   CheckoutContainer,
//   CheckoutHeader,
//   HeaderBlock,
//   Total,
// } from './checkout.styles';

// const Checkout = () => {
//   const { cartItems, cartTotal } = useContext(CartContext);

//   return (
//     <CheckoutContainer>
//       <CheckoutHeader>
//         <HeaderBlock>
//           <span>Product</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Description</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Quantity</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Price</span>
//         </HeaderBlock>
//         <HeaderBlock>
//           <span>Remove</span>
//         </HeaderBlock>
//       </CheckoutHeader>
//       {cartItems.map((cartItem) => (
//         <CheckoutItem key={cartItem.id} cartItem={cartItem} />
//       ))}
//       <Total>Total: ${cartTotal}</Total>
//     </CheckoutContainer>
//   );
// };

// export default Checkout;

//Commenting this part of the code since now reducers are being implemented with redux library instead of using contexts


import { useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { selectCartTotal } from '../../store/cart/cart.selector';
import CheckoutItem from '../../components/checkout-item/checkout-item';

import {
  CheckoutContainer,
  CheckoutHeader,
  HeaderBlock,
  Total,
} from './checkout.styles';

const Checkout = () => {

  const cartItems = useSelector(selectCartItems)
  const cartTotal =useSelector(selectCartTotal)

  return (
    <CheckoutContainer>
      <CheckoutHeader>
        <HeaderBlock>
          <span>Product</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Description</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Quantity</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Price</span>
        </HeaderBlock>
        <HeaderBlock>
          <span>Remove</span>
        </HeaderBlock>
      </CheckoutHeader>
      {cartItems.map((cartItem) => (
        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
      ))}
      <Total>Total: ${cartTotal}</Total>
    </CheckoutContainer>
  );
};

export default Checkout;
