import { useSelector } from "react-redux";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {

  const cartItems  = useSelector(store => store.cart.items)
  console.log(cartItems);

  return (
    <div className='header'>
      <div className="header-left">
      <h5>Hello Gavriel</h5>
       <h4>Welcome back!</h4>
      </div>

       <div className="header-right">
      
        <Link className="header__link" to = "/">
        <p >
        Home
        </p>
        </Link>
{/*       
      
        <Link className="header__link" to = "/about">
        <p >
        About
        </p>
        </Link>
        <Link className="header__link" to = "/contact">
        <p >
        Contact
        </p>
        </Link> */}

        <Link className="header__link" to ="/cart">
        <p>
          Cart {cartItems.length}
        </p>
        </Link>
     
       </div>

      </div>
  )
}

export default Header