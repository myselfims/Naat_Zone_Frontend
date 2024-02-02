import {createSlice} from '@reduxjs/toolkit';


const initialState = {
    naats : [],
    naat_khwans : [],
}


const homeSlice = createSlice({
    name : 'homeSlice',
    initialState,
    reducers : {
        setNaats : (state, action)=>{
            state.naats = action.payload
        },
        setNaatKhwans : (state, action)=>{
            state.naat_khwans = action.payload
        }
    }
})


export const {setNaats, setNaatKhwans} = homeSlice.actions
export default homeSlice.reducer