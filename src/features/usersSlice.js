import {createSlice} from '@reduxjs/toolkit';

export const usersSlice = createSlice({
    name: 'users',
    initialState: {users: []},
    reducers: {
        addAllUsers: (state, {payload}) => {
            state.users = payload
        }
    },
});

export const {addAllUsers} = usersSlice.actions;

export default usersSlice.reducer;

