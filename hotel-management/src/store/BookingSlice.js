import { createSlice } from "@reduxjs/toolkit";

const initialBookingState = {
    room_types: [],
    start_date: null,
    end_date: null,
    guestInformation: null,
};

const bookingSlice = createSlice({
    name: "booking",
    initialState: initialBookingState,
    reducers: {
        setRoomTypes(state, action) {
            state.room_types = action.payload;
        },
        setStartDate(state, action) {
            state.start_date = action.payload;
        },
        setEndDate(state, action) {
            state.end_date = action.payload;
        },
        setGuestInformation(state, action) {
            state.guestInformation = action.payload;
        },
    },
});     

export const bookingActions = bookingSlice.actions;

export default bookingSlice.reducer;
