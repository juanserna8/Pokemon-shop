import { createSlice } from "@reduxjs/toolkit";

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: [],
        id: null,
        image: '',
        weight: null
    }, 
    reducers: {
        addPokemonToCart: (state, action) => {
            console.log(action.payload)
            state.cart.push(action.payload)
            state.id = action.payload.id
            state.image = action.payload.image
            state.weight = action.payload.weight
        }
    }
})

export const { addPokemonToCart } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer