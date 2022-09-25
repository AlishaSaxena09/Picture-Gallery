import { useContext, useState } from "react";
import { Context } from "../Context";
import CartItem from "./CartItem";
export default function Cart() {
  const { cartItems, emptyCart } = useContext(Context);
  const [textButton, setTextButton] = useState("Place Order");
  const totalCost = 6.99 * cartItems.length;
  const totalCostDisplay = totalCost.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });

  const itemsInCart = cartItems.map((cartItem) => {
    return <CartItem key={cartItem.id} item={cartItem} />;
  });

  function placeOrder() {
    setTextButton("Ordering...");
    setTimeout(() => {
      console.log("Order placed!");
      setTextButton("Place Order");
      emptyCart();
    }, 3000);
  }
  console.log(itemsInCart);

  return (
    <div>
      <div className="flex flex-wrap justify-center">
        {itemsInCart.length > 0 ? (
          itemsInCart
        ) : (
          <h1 className="mt-4 text-2xl font-bold">
            You have no items in Your cart !
          </h1>
        )}
      </div>
      <div className="my-8 ">
        <p className="flex justify-end mx-8 text-xl font-semibold total-cost">
          Total: {totalCostDisplay}
        </p>
        <div className="flex justify-center my-4 order-button">
          {itemsInCart.length ? (
            <button
              onClick={placeOrder}
              className="px-4 py-3 font-semibold bg-gray-200 border-2 border-black"
            >
              {textButton}
            </button>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}
