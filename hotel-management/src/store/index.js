import {configureStore} from '@reduxjs/toolkit'
import feedbackSlice from './feedbackSlice'
import authSlice from './authSlice'
import BookingSlice from './BookingSlice'

const store = configureStore({
    reducer: {feedback: feedbackSlice, auth: authSlice, booking: BookingSlice}
})

export default store