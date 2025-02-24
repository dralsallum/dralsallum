import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    products: [],
    quantity: 0, // total count of all items
    total: 0, // total price
  },
  reducers: {
    addProduct: (state, action) => {
      // Check if product is already in cart
      const existingItemIndex = state.products.findIndex(
        (item) => item._id === action.payload._id
      );

      if (existingItemIndex !== -1) {
        // If already in cart, increment the quantity
        state.products[existingItemIndex].quantity += action.payload.quantity;
      } else {
        // Otherwise, push a new product
        state.products.push(action.payload);
      }

      // Increase overall cart quantity and total
      state.quantity += action.payload.quantity;
      state.total += action.payload.price * action.payload.quantity;
    },

    removeProduct: (state, action) => {
      const productId = action.payload;
      // Find the product in the cart by ID
      const existingItemIndex = state.products.findIndex(
        (item) => item._id === productId
      );

      if (existingItemIndex !== -1) {
        const existingItem = state.products[existingItemIndex];

        // Decrement the overall cart quantity by 1
        state.quantity -= 1;
        // Subtract the price of a single unit
        state.total -= existingItem.price;

        // If the product's quantity is more than 1, just decrement the quantity
        if (existingItem.quantity > 1) {
          existingItem.quantity -= 1;
        } else {
          // Otherwise, remove the product completely
          state.products.splice(existingItemIndex, 1);
        }
      }
    },
  },
});

export const { addProduct, removeProduct } = cartSlice.actions;
export default cartSlice.reducer;
