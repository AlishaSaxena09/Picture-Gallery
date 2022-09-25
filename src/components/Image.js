import { useState, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../Context";

export default function Image({ className, img }) {
  const [hovered, setHovered] = useState(false);
  const { toggleFavorited, addToCart, cartItems, removeFromCart } =
    useContext(Context);

  function heartIcon() {
    if (img.isFavorite) {
      return (
        <button
          onClick={() => toggleFavorited(img.id)}
          className="px-2 py-1 bg-white rounded-md hover:bg-opacity-75"
        >
          <i className="w-4 h-4 text-black fa-solid fa-heart"></i>
        </button>
      );
    } else if (hovered) {
      return (
        <button
          onClick={() => toggleFavorited(img.id)}
          className="px-2 py-1 bg-white rounded-md hover:bg-opacity-75"
        >
          <i className="w-4 h-4 text-black fa-regular fa-heart"></i>
        </button>
      );
    }
  }

  function cartIcon() {
    const alreadyInCart = cartItems.some((item) => item.id === img.id);
    if (alreadyInCart) {
      return (
        <button
          onClick={() => removeFromCart(img.id)}
          className="px-2 py-1 ml-2 bg-white rounded-md hover:bg-opacity-75"
        >
          <i className="w-4 h-4 fa-solid fa-truck"></i>
        </button>
      );
    } else if (hovered) {
      return (
        <button
          onClick={() => addToCart(img)}
          className="px-2 py-1 ml-2 bg-white rounded-md hover:bg-opacity-75"
        >
          <i className="w-4 h-4 fa-solid fa-cart-shopping"></i>
        </button>
      );
    }
  }

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`${className} relative`}
    >
      <img
        alt="gallery"
        src={img.url}
        className="object-cover w-full h-full group"
      ></img>
      <div
        className={`absolute top-0 left-0 flex items-start justify-end w-full h-full bg-black bg-opacity-25 py-4 px-4 ${
          hovered ? "" : "hidden"
        }`}
      >
        {heartIcon()}
        {cartIcon()}
      </div>
    </div>
  );
}

Image.propTypes = {
  className: PropTypes.string,
  img: PropTypes.shape({
    id: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired,
    isFavorite: PropTypes.bool,
  }),
};
