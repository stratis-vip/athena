import {createSlice} from '@reduxjs/toolkit';

export const netStateSlice = createSlice({
    name: 'netState',
    initialState: {server: "ready"},
    reducers: {
        loading: (state) => {
            state.server = "loading"
        },
        error: (state) => {
            state.server = "error"
        },
        ready: (state) => {
            state.server = "ready"
        }
    },
});

export const {loading, error,ready} = netStateSlice.actions;

export default netStateSlice.reducer;

