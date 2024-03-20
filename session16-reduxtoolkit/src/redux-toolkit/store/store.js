import { configureStore } from '@reduxjs/toolkit'
import counter from "../reducers/counter"
import todoList from "../reducers/totoList"
export const store1 = configureStore({
    reducer: {
        counter11:counter,
        jobs:todoList
    },
})