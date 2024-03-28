import { createSlice } from "@reduxjs/toolkit";

const initialFeedbackState = {
	face: null,
	category: {
		HotelRoom: false,
		BarRestaurant: false,
		HotelStaff: false,
	},
	comment: "",
};

const feedbackSlice = createSlice({
    name: "feedback",
    initialState: initialFeedbackState,
    reducers: {
        setFace(state, action) {
            state.face = action.payload;
        },
        setCategory(state, action) {
            state.category = action.payload;
        },
        setComment(state, action) {
            state.comment = action.payload;
        },
    },
});

export const feedbackActions = feedbackSlice.actions;

export default feedbackSlice.reducer;