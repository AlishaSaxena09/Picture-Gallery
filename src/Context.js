import React, { useEffect, useState } from "react";

const Context = React.createContext();

function ContextProvider(props) {
  const [allPhotos, setAllPhotos] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const url =
    "https://raw.githubusercontent.com/bobziroll/scrimba-react-bootcamp-images/master/images.json";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setAllPhotos(data));
  }, []);

  function addToCart(newItem) {
    setCartItems((prevState) => {
      return [...prevState, newItem];
    });
  }

  function removeFromCart(id) {
    setCartItems((prevState) => {
      return prevState.filter((img) => {
        return img.id !== id;
      });
    });
  }

  function emptyCart() {
    setCartItems([]);
  }

  function toggleFavorited(id) {
    const updatedArray = allPhotos.map((photos) => {
      if (photos.id === id) {
        console.log(id);
        console.log(!photos.isFavorite);
        return {
          ...photos,
          isFavorite: !photos.isFavorite,
        };
      } else {
        return photos;
      }
    });

    setAllPhotos(updatedArray);
  }

  return (
    <Context.Provider
      value={{
        allPhotos,
        toggleFavorited,
        addToCart,
        cartItems,
        removeFromCart,
        emptyCart,
      }}
    >
      {props.children}
    </Context.Provider>
  );
}

export { Context, ContextProvider };
