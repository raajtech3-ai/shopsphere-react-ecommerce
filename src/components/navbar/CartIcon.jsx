import React from "react";
import { useSelector } from "react-redux";
import { FaShoppingCart } from "react-icons/fa";

const CartIcon = () => {
  const cartItems = useSelector((state) => state.cart.item || []);

  return (
    <div className="cart-container">
      <FaShoppingCart className="cart-icon" />

      <span className="cart-count">{cartItems.length}</span>
    </div>
  );
};

export default CartIcon;
