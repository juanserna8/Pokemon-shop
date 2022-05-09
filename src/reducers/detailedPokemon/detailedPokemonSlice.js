import { createSlice } from "@reduxjs/toolkit";

export const detailedPokemonSlice = createSlice({
    name: 'detailedPokemon',
    initialState: {
        id: null,
        name: '',
        abilities: [],
        weight: null,
        imageUrl: '',
        height: null
    },
    reducers: {
        addDetailedPokemon: (state, action) => {
            console.log(action.payload)
            state.id = action.payload.id
            state.name = action.payload.name
            state.abilities = action.payload.abilities
            state.weight = action.payload.weight
            state.experience = action.payload.experience
            state.imageUrl = action.payload.imageUrl
            state.height = action.payload.height
        }
    },
})

export const { addDetailedPokemon } = detailedPokemonSlice.actions;

export default detailedPokemonSlice.reducer