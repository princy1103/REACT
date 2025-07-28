import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [],
    cart: [],
    status: "idle",
    error: null
};

console.log("initialState", initialState);

export const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addProducts: (state, action) => {
            state.products = action.payload;
        },
        addTocart: (state, action) => {
            const item = state.products.find((p) => p.id === action.payload);
            if (item && !state.cart.find((c) => c.id === item.id)) {
                state.cart.push({ ...item, quentity: 1 });
            }
        },
        removeTocart: (state, action) => {
            state.cart = state.cart.filter((item) => item.id !== action.payload);
        },
        resetCart: (state) => {
            state.cart = [];
        },
    }
})

export const { addTocart, removeTocart, resetCart, addProducts } = cartSlice.actions;
export default cartSlice.reducer;