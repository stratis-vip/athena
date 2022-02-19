import {configureStore} from '@reduxjs/toolkit';
import users from '../features/usersSlice';
import teams from '../features/teamsSlice'
import netState from "../features/netState";
import auth from '../features/logSlice'

export const store = configureStore({
    reducer: {
        teams, users, netState, auth
    },
});
