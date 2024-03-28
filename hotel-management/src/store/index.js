import {configureStore} from '@reduxjs/toolkit'
import feedbackSlice from './feedbackSlice'

const store = configureStore({
    reducer: {feedback: feedbackSlice}
})

export default store