import {createSlice} from '@reduxjs/toolkit';

export const teamsSlice = createSlice({
    name: 'teams',
    initialState:  {teams: []},
    reducers: {
        addAllTeams: (state, {payload}) => {
            state.teams = payload
        }
    },
});

export const {addAllTeams} = teamsSlice.actions;

export default teamsSlice.reducer;
