import { createSlice } from '@reduxjs/toolkit'
const initialState = {
    value: 0,
}
export const counterSlice1 = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        increase1: (state) => {
            state.value += 1
        },
        decrease: (state) => {
            state.value -= 1
        },
        incrementByAmount: (state, action) => {
            state.value += action.payload
        },
    },
    // cung cấp asyn-thunk để xử lý bất đồng bộ 
})
export const { increase1, decrease, incrementByAmount } = counterSlice1.actions
export default counterSlice1.reducer