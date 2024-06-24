import { Outlet,Link } from "react-router-dom";
import { Fragment ,useContext} from "react";
import {ReactComponent as CrwnLogo} from '../../assests/crown.svg'
import Carticon from "../../components/cart-icon/cart-icon.component";
import { UserContext, } from "../../contexts/user.context";
import { CartContext } from "../../contexts/cart.context";
import CartDropdown from "../../components/cart-dropwdown/cart-dropwdown.component";
import { SignOutUser } from "../../utils/firebase/firebase.utils";
import './navigation.styles.scss'
const Navigation = () =>{

  const{currentUser }=useContext(UserContext);
  const{isCartOpen}=useContext(CartContext);




    return(
      <Fragment >
        <div className="navigation">
        <Link className="logo-container" to='/'>
        <CrwnLogo className="Logo"/>

        </Link>
          
          <div className="nav-links-container">
            <Link className="nav-link" to='/shop'>
                shop
            </Link>
            {
              currentUser ? (
                <span className="nav-link" onClick={SignOutUser}>Sign Out</span>
              ):(<Link className="nav-link" to='/auth'>
                Sign In 
            </Link>
            )
            }
            <Carticon/>


          </div>
          {isCartOpen && <CartDropdown />}
        </div>
        <Outlet/>
      </Fragment>
    )

}
export default Navigation
