import { createContext, useContext, useReducer } from "react";
import { reducer, initialState } from "../store/cartReducer.js";

const CartContext = createContext();

function CartProvider({ children }) {
  const [{ cart, isModalOpen }, dispatch] = useReducer(reducer, initialState);

  console.log(isModalOpen);

  const handleAddToCart = (product) => {
    const item = {
      name: product.name,
      quantity: 1,
      price: product.price,
      image: product.image.thumbnail,
    };

    const existingItem = cart.find((cartItem) => cartItem.name === item.name);

    if (existingItem) {
      dispatch({ type: "Increment", payload: item });
    } else {
      dispatch({ type: "AddToCart", payload: item });
    }
  };

  const increment = (product) => {
    dispatch({ type: "Increment", payload: product });
  };

  const decrement = (product) => {
    dispatch({ type: "Decrement", payload: product });
  };

  const remove = (product) => {
    dispatch({ type: "Remove", payload: product });
  };

  const openModal = () => {
    dispatch({ type: "OpenModal" });
  };

  const closeModal = () => {
    dispatch({ type: "CloseModal" });
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        isModalOpen,
        handleAddToCart,
        increment,
        decrement,
        remove,
        openModal,
        closeModal,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

const useCart = () => {
  const context = useContext(CartContext);
  if (context === undefined) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export { CartProvider, useCart };
