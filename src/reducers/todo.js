import { createSlice } from '@reduxjs/toolkit'

export const todoSlide = createSlice({
    name: 'todo',
    initialState: {
        value: []
    },
    reducers: {
        addTodo: (state, action) => {
            state.value.push(action.payload);
        },
        deleteTodo: (state, action) => {
            state.value = state.value.filter((t) => t.id !== action.payload.id)
        },
        updateTodo: (state, action) => {
            state.value.map((t) => {
                if (t.id === action.payload.id) {
                    t.name = action.payload.name;
                }
            })
        }
    },
})

export const { addTodo, deleteTodo, updateTodo } = todoSlide.actions
export default todoSlide.reducer