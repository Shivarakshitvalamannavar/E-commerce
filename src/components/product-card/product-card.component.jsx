// import { useContext } from 'react';

// import { CartContext } from '../../contexts/cart.context';

// import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

// import {
//   ProductCartContainer,
//   Footer,
//   Name,
//   Price,
// } from './product-card.styles';

// const ProductCard = ({ product }) => {
//   const { name, price, imageUrl } = product;
//   const { addItemToCart } = useContext(CartContext);

//   const addProductToCart = () => addItemToCart(product);

//   return (
//     <ProductCartContainer>
//       <img src={imageUrl} alt={`${name}`} />
//       <Footer>
//         <Name>{name}</Name>
//         <Price>{price}</Price>
//       </Footer>
//       <Button
//         buttonType={BUTTON_TYPE_CLASSES.inverted}
//         onClick={addProductToCart}
//       >
//         Add to card
//       </Button>
//     </ProductCartContainer>
//   );
// };

// export default ProductCard;

//Comenting since now i am making change to redux library to use reducers


import { useDispatch,useSelector } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.action';
import { selectCartItems } from '../../store/cart/cart.selector';

import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';

import {
  ProductCartContainer,
  Footer,
  Name,
  Price,
} from './product-card.styles';

const ProductCard = ({ product }) => {
  const { name, price, imageUrl } = product;
  const cartItems =useSelector(selectCartItems)
  const dispatch =useDispatch();


  const addProductToCart = () => dispatch(addItemToCart(cartItems,product));

  return (
    <ProductCartContainer>
      <img src={imageUrl} alt={`${name}`} />
      <Footer>
        <Name>{name}</Name>
        <Price>{price}</Price>
      </Footer>
      <Button
        buttonType={BUTTON_TYPE_CLASSES.inverted}
        onClick={addProductToCart}
      >
        Add to card
      </Button>
    </ProductCartContainer>
  );
};

export default ProductCard;