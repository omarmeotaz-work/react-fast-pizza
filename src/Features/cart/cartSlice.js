import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cart: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      state.cart.push(action.payload);
    },
    delItem(state, action) {
      state.cart = state.cart.filter((item) => item.pizzaId !== action.payload);
    },
    incQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity++;
      item.totalPrice = item.quantity * item.unitPrice;
    },
    decQuantity(state, action) {
      const item = state.cart.find((item) => item.pizzaId === action.payload);
      item.quantity--;
      item.totalPrice = item.quantity * item.unitPrice;
      if (item.quantity === 0) cartSlice.caseReducers.delItem(state, action);
    },
    clearCart(state) {
      state.cart = [];
    },
  },
});

export const { addItem, delItem, incQuantity, decQuantity, clearCart } =
  cartSlice.actions;

export default cartSlice.reducer;

export const getCart = (state) => state.cart.cart;

export const getCurrentQuantity = (id) => (state) =>
  state.cart.cart.find((item) => item.pizzaId === id)?.quantity ?? 0;
export const getTotalQuantity = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.quantity, 0);
export const getTotalPrice = (state) =>
  state.cart.cart.reduce((sum, item) => sum + item.totalPrice, 0);
