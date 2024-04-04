import {configureStore} from '@reduxjs/toolkit'
import feedbackSlice from './feedbackSlice'
import authSlice from './authSlice'

const store = configureStore({
    reducer: {feedback: feedbackSlice, auth: authSlice}
})

export default store