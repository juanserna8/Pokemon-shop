import { configureStore } from '@reduxjs/toolkit';
import counterSlice from 'reducers/counter/counterSlice';
import currentPokemonSlice from 'reducers/counter/currentPokemonSlice';

export default configureStore({
    reducer: {
        counter: counterSlice,
        currentPokemon: currentPokemonSlice
    },
})