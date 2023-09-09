import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../reducers/user'
import themeReducer from '../reducers/theme'
import todoReducer from '../reducers/todo'

export const store = configureStore({
    reducer: {
        user: userReducer,
        theme: themeReducer,
        todo: todoReducer,
    }
})