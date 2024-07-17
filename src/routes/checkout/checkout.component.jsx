import { useContext ,useEffect} from 'react';

import { CartContext } from '../../contexts/cart.context';

import CheckoutItem from '../../components/checkout-item/checkout-item';

import {
      CheckoutContainer,
      CheckoutHeader,
      HeaderBlock,
      Total,
    } from './checkout.styles';

    const Checkout = () => {
      const {cartItems,total,cartTotal} =useContext(CartContext)

      useEffect(() =>{

        // console.log('useEffect called')
        // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        // setNum(totalQuantity);

       cartTotal(cartItems)



    },[cartItems])
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
          <Total>Total: ${total}</Total>
        </CheckoutContainer>
      );
    };

    export default Checkout;