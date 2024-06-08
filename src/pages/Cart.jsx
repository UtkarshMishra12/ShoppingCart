import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";

function Cart(){
  const {cart} =  useSelector( (state)=> state);
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect(() =>{
    setTotalAmount( cart.reduce( (acc, curr) => acc + curr.price, 0));
  }, [cart])

  return (
    <div>
    { cart.length === 0 ? (
        <div>
          <h1>Cart Empty</h1>
          <Link to="/">
            <button>Shop Now</button>
          </Link>
        </div>
      ) 
      
      : 
      (
        <div>


          <div>
            {
              cart.map((item, index) => (
              <CartItem key={item.id} item={item} itemIndex={index} />
              ))
            }
          </div>

          <div>

            <div>
              <div>Your Cart</div>
              <div>Summary</div>
              <p>
                <span>Total Items: {cart.length}</span>
              </p>
            </div>

            <div>
              <p>Total Amount: ${totalAmount}</p>
              <button>
                 CheckOut Now
              </button>
            </div>

          </div>


        </div>
      )
      
    }
    </div>
  );
}

export default Cart;