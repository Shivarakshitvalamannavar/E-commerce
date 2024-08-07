// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

// import {
//   CheckoutItemContainer,
//   ImageContainer,
//   BaseSpan,
//   Quantity,
//   Arrow,
//   Value,
//   RemoveButton,
// } from './checkout-item.styles';

// const CheckoutItem = ({ cartItem }) => {
//   const { name, imageUrl, price, quantity } = cartItem;

//   const { clearItemFromCart, addItemToCart, removeItemFromCart } =
//     useContext(CartContext);

//   const clearItemHandler = () => clearItemFromCart(cartItem);
//   const addItemHandler = () => addItemToCart(cartItem);
//   const removeItemHandler = () => removeItemFromCart(cartItem);

//   return (
//     <CheckoutItemContainer>
//       <ImageContainer>
//         <img src={imageUrl} alt={`${name}`} />
//       </ImageContainer>
//       <BaseSpan> {name} </BaseSpan>
//       <Quantity>
//         <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
//         <Value>{quantity}</Value>
//         <Arrow onClick={addItemHandler}>&#10095;</Arrow>
//       </Quantity>
//       <BaseSpan> {price}</BaseSpan>
//       <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
//     </CheckoutItemContainer>
//   );
// };

// export default CheckoutItem;

//Commenting this part of the code since now i have moved to use reducers along with the redux library instead of using it with contexts ok



import { useDispatch,useSelector } from 'react-redux';
import { selectCartItems } from '../../store/cart/cart.selector';
import { addItemToCart,clearItemFromCart,removeItemFromCart } from '../../store/cart/cart.action';

import {
  CheckoutItemContainer,
  ImageContainer,
  BaseSpan,
  Quantity,
  Arrow,
  Value,
  RemoveButton,
} from './checkout-item.styles';

const CheckoutItem = ({ cartItem }) => {
  const { name, imageUrl, price, quantity } = cartItem;
  const dispatch =useDispatch();
  const cartItems = useSelector(selectCartItems);

  const clearItemHandler = () => dispatch(clearItemFromCart(cartItems,cartItem));
  const addItemHandler = () => dispatch(addItemToCart(cartItems,cartItem));
  const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,cartItem));

  return (
    <CheckoutItemContainer>
      <ImageContainer>
        <img src={imageUrl} alt={`${name}`} />
      </ImageContainer>
      <BaseSpan> {name} </BaseSpan>
      <Quantity>
        <Arrow onClick={removeItemHandler}>&#10094;</Arrow>
        <Value>{quantity}</Value>
        <Arrow onClick={addItemHandler}>&#10095;</Arrow>
      </Quantity>
      <BaseSpan> {price}</BaseSpan>
      <RemoveButton onClick={clearItemHandler}>&#10005;</RemoveButton>
    </CheckoutItemContainer>
  );
};

export default CheckoutItem;