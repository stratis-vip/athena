import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
import usersFromJson from "./users.json"
import teamsFromJson from './teams.json'
import {addAllUsers} from "./features/usersSlice"
import Users from "./features/users";
import Teams from "./features/teams"
import {addAllTeams} from "./features/teamsSlice";
import {DateTime} from "luxon";

import Title from "./components/title";
import War from "./components/war";


const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        function compare(a, b) {

            // Turn your strings into dates, and then subtract them
            // to get a value that is either negative, positive, or zero.
            return (a.loc) - (b.loc);
        }


        const usersWithTime = usersFromJson.map(user => {
            return {...user, loc: DateTime.now().setZone(user.zone).toFormat("yyyyLLddHHmm")}
        })
        dispatch(addAllUsers(usersWithTime.sort(compare)))
    }, [dispatch])

    useEffect(() => {
        dispatch(addAllTeams(teamsFromJson.filter(team => team.league === "Bronze").sort((a,b)=> a.position - b.position)))
    }, [dispatch])

    // const loc = DateTime.local()
    const noc = DateTime.now().setZone("Pacific/Auckland")
    return (
        <div className="App">
           <Title />
            {/*<War />*/}
            <Users/>
            <Teams/>
        </div>
    );

}

export default App;
