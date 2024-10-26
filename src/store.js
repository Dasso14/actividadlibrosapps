// src/store.js
import { createStore } from 'redux';

const initialState = {
  cart: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TO_CART':
      return { ...state, cart: [...state.cart, action.book] };
    case 'REMOVE_FROM_CART':
      return { ...state, cart: state.cart.filter((book) => book.title !== action.title) };
    default:
      return state;
  }
};

const store = createStore(reducer);

export default store;
