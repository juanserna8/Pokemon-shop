import { createSlice } from "@reduxjs/toolkit";

export const currentPokemonSlice = createSlice({
    name: 'currentPokemon',
    initialState: {
            id: null,
            name: 'e',
            imageUrl: ''
    },
    reducers: {
        addPokemon: (state, action) => {
            console.log(action.payload)
            state.id = action.payload.id
            state.name = action.payload.name
            state.imageUrl = action.payload.imageUrl
        }
    },
})

export const { addPokemon } = currentPokemonSlice.actions;

export default currentPokemonSlice.reducer