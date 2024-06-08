import React from "react";
import {FaShoppingCart} from "react-icons/fa"
import { NavLink } from "react-router-dom";

function Navbar(){
  return(
    <div>
      <div className="flex flex-row justify-between">

        <NavLink to="/">
        <img src="https://raw.githubusercontent.com/himanshurelhan70/Codehelp/master/05_React/Classes/React_Advanced_05/Shopping_Cart_Project/public/logo.png" alt="cart" />
        </NavLink>

        <div>
          <NavLink to="/">
            <p>Home</p>
          </NavLink>

          <NavLink to="/cart">
            <div>
              <FaShoppingCart/>
            </div>
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Navbar;