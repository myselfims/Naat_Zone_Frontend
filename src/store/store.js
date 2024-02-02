import {configureStore} from '@reduxjs/toolkit';
import globalSlice from './features/globalSlice';
import homeSlice from './features/homeSlice';
import playerSlice from './features/playerSlice';


export const store = configureStore({
    reducer : {
        globalState : globalSlice,
        homeState : homeSlice,
        playerState : playerSlice,
    }
})