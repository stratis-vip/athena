import {configureStore} from '@reduxjs/toolkit';
import users from '../features/usersSlice';
import teams from '../features/teamsSlice'

export const store = configureStore({
    reducer: {
        teams, users: users
    },
});
