import './checkout.styles.scss'
import { CartContext } from '../../contexts/cart.context'
import { useContext ,useEffect} from 'react'
import CheckoutItem from '../../components/checkout-item/checkout-item'
const Checkout = () =>{

    const {cartItems,total,cartTotal} =useContext(CartContext)

    useEffect(() =>{

        // console.log('useEffect called')
        // const totalQuantity = cartItems.reduce((acc, item) => acc + item.quantity, 0);
        // setNum(totalQuantity);

       cartTotal(cartItems)



    },[cartItems])

    return(
        <div className='checkout-container'>
            <div className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                   <span>Price</span>
                </div>
                <div className='header-block'>
                   <span>Remove</span>
                </div>
            </div>
            
            {cartItems.map((cartItem) =>(
            
            <CheckoutItem cartItem={cartItem} key={cartItem.id}/>
                        
            ))}
            <span className='total'>Total: {total}</span>
        </div>
        
    )
}

export default Checkout