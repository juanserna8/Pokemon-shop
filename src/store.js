import { configureStore } from '@reduxjs/toolkit';
import counterSlice from 'reducers/counter/counterSlice';
import currentPokemonSlice from 'reducers/counter/currentPokemonSlice';
import detailedPokemonSlice from 'reducers/detailedPokemon/detailedPokemonSlice';
import shoppingCartSlice from 'reducers/shoppingCart/shoppingCartSlice';

export default configureStore({
    reducer: {
        counter: counterSlice,
        currentPokemon: currentPokemonSlice,
        detailedPokemon: detailedPokemonSlice,
        shoppingCart: shoppingCartSlice,
    },
})