import { createSlice } from '@reduxjs/toolkit'
const initialState =[];
    
export const todoList = createSlice({
    name:'todoList',
    initialState,
    reducers: {
        addJob: (state,action) => {
           //  mutate (tự biến đổi)
            state.push(action.payload);
        },
        deleteJob: (state) => {
            state.value -= 1
        },
        updateJob: (state, action) => {
            state.value += action.payload
        },
    },
})
export const { addJob, deleteJob, updateJob } = todoList.actions
export default todoList.reducer