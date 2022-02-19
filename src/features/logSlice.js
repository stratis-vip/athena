import {createSlice} from '@reduxjs/toolkit';

export const authSlice = createSlice({
    name: 'login',
    initialState:  {isAuthorized: false},
    reducers: {
        loginAuth: (state) => {
            state.isAuthorized = true
        },
        logoutAuth: (state) => {
            state.isAuthorized = false
        },
    },
});

export const {loginAuth, logoutAuth} = authSlice.actions;

export default authSlice.reducer;
