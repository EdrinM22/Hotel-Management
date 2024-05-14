import { createSlice } from '@reduxjs/toolkit'

const initialAuthState = {
    userInfo: null,
    userActiveToken: null
}

const authSlice = createSlice({
    name: 'auth',
    initialState: initialAuthState,
    reducers: {
        setUserInfo(state, action) {
            state.userInfo = action.payload
        },
        setUserActiveToken(state, action) {
            state.userActiveToken = action.payload
        },
        logout(state) {
            state.userInfo = null
            state.userActiveToken = null
        },
    }
})

export const authActions = authSlice.actions

export default authSlice.reducer