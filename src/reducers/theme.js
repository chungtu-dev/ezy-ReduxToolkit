import { createSlice } from '@reduxjs/toolkit'

export const themeSlide = createSlice({
    name: 'theme',
    initialState: {
        value: {
            color: ''
        }
    },
    reducers:{
        changeTheme(state, action) {
            state.value = action.payload
        }
    }
})

export const {changeTheme} = themeSlide.actions

export default themeSlide.reducer