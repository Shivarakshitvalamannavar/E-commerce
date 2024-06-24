import './product-card.styles.scss'

import Button from '../button/button.component'
import { useContext } from 'react'
import { UserCartContext } from '../../contexts/cart.context'
import { CartContext } from '../../contexts/cart.context'

const ProductCard = ({product}) => {
    const {name,price,imageUrl} = product

    const CartHandler = (event) => {
        const { cart, setCart } = useContext(CartContext);
        setCart([...cart, product]);
    }
    return(
        <div className='product-card-container'>
            <img src={imageUrl} alt={`${name}`}></img>
            <div className='footer'>
                <span className='name'>{name}</span>
                <span className='price'>{price}</span>
            </div>
            <Button buttonType='inverted' onClick={CartHandler}>ADD to CART </Button>


        </div>
    )
}

export default ProductCard