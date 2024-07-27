const initialState = {
  cart: [],
  isModalOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "AddToCart":
      const existingItemIndex = state.cart.findIndex(
        (item) => item.name === action.payload.name
      );
      if (existingItemIndex >= 0) {
        const updatedCart = state.cart.map((item, index) =>
          index === existingItemIndex
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
        return { ...state, cart: updatedCart };
      } else {
        return { ...state, cart: [...state.cart, { ...action.payload, quantity: 1 }] };
      }
    case "Increment":
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.name === action.payload.name
            ? { ...item, quantity: item.quantity + 1 }
            : item
        ),
      };
    case "Decrement":
      return {
        ...state,
        cart: state.cart
          .map((item) =>
            item.name === action.payload.name
              ? { ...item, quantity: item.quantity - 1 }
              : item
          )
          .filter((item) => item.quantity > 0),
      };
    case "Remove":
      return {
        ...state, cart: state.cart.filter(item => item.name !== action.payload.name),
      };
    case "OpenModal":
      return {
        ...state,
        isModalOpen: true,
      };
    case "CloseModal":
      return {
        ...state,
        isModalOpen: false,
      };
    case "NewOrder":
      return initialState
      
    default:
      return state;
  }
};

export { reducer, initialState };
