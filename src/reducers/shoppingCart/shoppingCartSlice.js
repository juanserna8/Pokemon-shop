import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

export const shoppingCartSlice = createSlice({
    name: 'shoppingCart',
    initialState: {
        cart: localStorage.getItem("cart") ? JSON.parse(localStorage.getItem("cart")) : [],
        id: null,
        image: '',
        weight: null,
        cartTotalQuantity: 0,
        cartTotalAmount: 0
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
        },
        decreaseItemQuantity: (state, action) => {
            const itemIndex = state.cart.findIndex(
                item => item.id === action.payload.id
            )
            if(state.cart[itemIndex].cartQuantity > 1) {
                state.cart[itemIndex].cartQuantity -= 1
                toast.info(`Decreased ${action.payload.name} cart quantity`, {
                    position: "bottom-left"
                })
            } else if (state.cart[itemIndex].cartQuantity === 1) {
                const updatedCart = state.cart.filter(
                    (item) => item.id !== action.payload.id
                )
                state.cart = updatedCart
                toast.info(`${action.payload.name} has been removed from your cart`, {
                    position: "bottom-left"
                })
            }
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        clearCart: (state, action) => {
            state.cart = [];
            toast.info('Cart cleared', {
                position: "bottom-left"
            })
            localStorage.setItem("cart", JSON.stringify(state.cart))
        },
        getTotals: (state, action) => {
            let {total, quantity} = state.cart.reduce(
                (cartTotal, item) => {
                    const { weight, cartQuantity } = item;
                    const itemTotal = weight * cartQuantity

                    cartTotal.total += itemTotal
                    cartTotal.quantity += cartQuantity
                    return cartTotal
                },
                {
                    total: 0,
                    quantity: 0
                }
            );

            state.cartTotalQuantity = quantity;
            state.cartTotalAmount = total
        }
    }
})

export const { addPokemonToCart, removePokemon, decreaseItemQuantity, clearCart, getTotals } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer