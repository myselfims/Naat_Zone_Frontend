import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    currentNaat : {},
    playing : false,
}

const playerSlice = createSlice({
    name : 'playerSlice',
    initialState,
    reducers : {
        setCurrentNaat : (state, action)=>{
            state.currentNaat = action.payload
        },
    }
})

export const {setCurrentNaat} = playerSlice.actions
export default playerSlice.reducer