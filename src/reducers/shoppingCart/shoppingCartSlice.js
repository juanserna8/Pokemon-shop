import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        id: null,
        image: '',
        weight: null
    }, 
    reducers: {
        addPokemonToCart: (state, action) => {
            const itemIndex = state.cart.findIndex(
                (item) => item.id === action.payload.id
            );
            if(itemIndex >= 0 ) {
                state.cart[itemIndex].cartQuantity += 1;
                toast.info(`Increased ${action.payload.name} quantity`, {
                    position: "bottom-left"
                });
            } else {
                const tempProduct = {...action.payload, cartQuantity: 1 }
                state.cart.push(tempProduct);
                toast.success(`${action.payload.name} added to cart`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))

            console.log(action.payload)
            state.id = action.payload.id
            state.image = action.payload.image
            state.weight = action.payload.weight
        },
        removePokemon: (state, action) => {
            const updatedCart = state.cart.filter(
                (item) => item.id !== action.payload.id
            )
            state.cart = updatedCart
            localStorage.setItem("cart", JSON.stringify(state.cart))
            console.log('hello', action.payload)
        }
    }
})

export const { addPokemonToCart, removePokemon } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer