import { LOGO_URL } from "../utils/constants";
import { CART_URL } from "../utils/constants";

const Header = () => {
    return (
        <div className="head">
         <div className="img-logo">
          <img
          src={LOGO_URL}
          alt="App Logo"
          className="logo"
        />
         </div>
         <div className="nav-items">
            <ul >
                <li>Home</li>
                <li>About Us</li>
                <li>Help</li>
                <li>Sign In</li>
                <li className="cart">
                    <img className="cart-img" src={CART_URL} />
                </li>

            </ul>
        </div>
    </div>

    )
} 

export default Header;