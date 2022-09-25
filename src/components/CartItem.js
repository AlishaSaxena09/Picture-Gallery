import { useContext, useState } from "react";
import { Context } from "../Context";

export default function CartItem({ item }) {
  const { removeFromCart } = useContext(Context);
  const [hovered, setHovered] = useState(false);

  return (
    <div class="w-80 bg-white shadow rounded m-4">
      <div class="h-48 w-full flex flex-col justify-between p-4 bg-cover bg-center">
        <img
          alt="cart"
          src={item.url}
          className="object-cover h-40 w-300 group"
        ></img>
      </div>
      <div className="flex items-center justify-between">
        <div class="p-4 flex flex-col items-center">
          <p class="text-center text-gray-800 mt-1"> $ 6.99</p>
        </div>
        <div>
          <button
            className="flex items-start justify-end px-4 py-4 "
            onClick={() => removeFromCart(item.id)}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
          >
            {hovered ? (
              <i className="w-6 h-6 text-lg fa-solid fa-trash"></i>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
