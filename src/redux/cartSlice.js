import { createSlice } from "@reduxjs/toolkit";

const CartSlice = createSlice({
  name: "cart",

  initialState: {
    item: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.item.push(action.payload);
    },

    removeFromCart: (state, action) => {
      state.item = state.item.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addToCart, removeFromCart } = CartSlice.actions;
export default CartSlice.reducer;
