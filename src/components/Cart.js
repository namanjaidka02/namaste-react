import React from "react";
import { clearCart } from "../utils/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import ItemList from "./itemList";

const Cart = () => {
  const cartItems = useSelector((store) => store.cart.items) || [];
  const disptach = useDispatch();
  const handleClearCart = () => {
    disptach(clearCart());
  };
  return (
    <div className="text-center m-4 p-4">
      <h1 className="font-bold text-2xl">cart</h1>
      <div className="w-6/12 m-auto">
        <button
          className="p-2 m-2 bg-slate-800 text-white rounded-lg"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
        {cartItems.length === 0 && (
          <h1 className="mt-[10rem] text-2xl">
            Cart is empty. Add items to the cart
          </h1>
        )}
        <ItemList items={cartItems} />
      </div>
    </div>
  );
};

export default Cart;
