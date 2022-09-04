import React, {useEffect} from 'react';
import './App.css';
import {useDispatch} from "react-redux";
// import usersFromJson from "./users.json"
// import teamsFromJson from './teams.json'
import {addAllUsers} from "./features/usersSlice"
// import Users from "./features/users";
// import Teams from "./features/teams"
import {addAllTeams} from "./features/teamsSlice";
import {DateTime} from "luxon";
import axios from "axios"
// import Title from "./components/title";
// import War from "./components/war";
// import ImportComponent from "./components/import";
// import {
//     BrowserRouter as Router,
//     Route,
//     Link, Switch
// } from "react-router-dom";
// import Template from "./components/template";
// import Spinner from "./components/spiner";
import {error, loading, ready} from "./features/netState";
import {Auth0Provider} from "@auth0/auth0-react";
import RouterComponent from "./components/router-comp";
import {analyzeString} from "./components/import";
// import { ClerkProvider } from "@clerk/clerk-react";
const sortF = (a, b) => {
    return Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"));
}


const data = `Guild	Pos.	Monday	Tuesday	Wednesday	Thursday	Friday
54 HERO	1	4-Vikings	6-silelderman	8-new athena	10-First Wave	2-Knight of Knights
Knight of Knights	2	9-Велес	7-tigerclaws	5-Toms	3-Фениксы	1-54 HERO
Фениксы	3	6-silelderman	8-new athena	10-First Wave	2-Knight of Knights	4-Vikings
Vikings	4	1-54 HERO	9-Велес	7-tigerclaws	5-Toms	3-Фениксы
Toms	5	8-new athena	10-First Wave	2-Knight of Knights	4-Vikings	6-silelderman
silelderman	6	3-Фениксы	1-54 HERO	9-Велес	7-tigerclaws	5-Toms
tigerclaws	7	10-First Wave	2-Knight of Knights	4-Vikings	6-silelderman	8-new athena
new athena	8	5-Toms	3-Фениксы	1-54 HERO	9-Велес	7-tigerclaws
Велес	9	2-Knight of Knights	4-Vikings	6-silelderman	8-new athena	10-First Wave
First Wave	10	7-tigerclaws	5-Toms	3-Фениксы	1-54 HERO	9-Велес
`

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
            async function fetchData() {
                try {
                    dispatch(loading())
                    const postQueryData = await axios({
                        url: 'https://herowars-back.texnopraksis.com/graphql',
                        method: 'post',
                        data: {
                            query: `query{users {id name timeZone active}}`
                        }
                    })
                    console.log(postQueryData.data.data.users)
                    const data = postQueryData.data.data
                    if (data.users != null && data.users.length > 0) {
                        const users = data.users
                        const tUsers = users.map(user => {
                            return {...user, dt: DateTime.utc().setZone(user.timeZone)}
                        })
                        const tt = tUsers.filter(user => user.active && !user.archive).sort(sortF)
                        console.log('USERS', tUsers)
                        dispatch(addAllUsers(tt))
                        dispatch(ready())
                    }
                } catch
                    (e) {
                    dispatch(error())
                    console.log(e)
                }
            }

            fetchData()
        }
        ,
        [dispatch]
    )

    useEffect(() => {
        const warObj = analyzeString(data)

        if (warObj.answer) {
            dispatch(addAllTeams(warObj.data.sort((a, b) => a.position - b.position)))
            // dispatch(addAllTeams(teamsFromJson.filter(team => team.league === "Bronze").sort((a, b) => a.position - b.position)))

        }
    }, [dispatch])

    return (
        <Auth0Provider domain={"dev-vyzmojme.eu.auth0.com"} clientId={"Wo0pmCF8b6mJGXVpwR7Yt6eHcD9dfJ8G"}
                       redirectUri={window.location.origin}>
            <RouterComponent/>
        </Auth0Provider>

    )
}


export default App;
