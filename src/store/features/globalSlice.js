import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    token : '',
    loadingScreen : true,
}

const globalSlice = createSlice({
    name : 'globalSlice',
    initialState,
    reducers : {
        setToken : (state, action)=>{
            state.token = action.payload
        },
        setLoadingScreen : (state, action)=>{
            state.loadingScreen = action.payload
        }
    }
    
})

export const {setToken, setLoadingScreen} = globalSlice.actions

export default globalSlice.reducer