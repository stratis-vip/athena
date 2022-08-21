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
athena	1	8-himatsubushi	14-The LIONS	20-MUKAKIN-MUGON	26-Die Hanse	2-First Wave
First Wave	2	25-Einfach so	19-StormCat	13-CRYSTAL	7-CCCP	1-athena
Sax Clan	3	10-Soul Reapers	16-SKY LORDS	22-Konoha	28-1111	4-The Eyrie
The Eyrie	4	27-I FURIANI	21-Lost Soul	15-ЛЕВ	9-Belgique	3-Sax Clan
Fighter	5	12-Bansh	18-Kamigrain	24-Перун	30-Silver Wolf	6-Lily
Lily	6	29-new athena	23-Pif Paf Pouf	17-Schriese	11-Death or Glory	5-Fighter
CCCP	7	14-The LIONS	20-MUKAKIN-MUGON	26-Die Hanse	2-First Wave	8-himatsubushi
himatsubushi	8	1-athena	25-Einfach so	19-StormCat	13-CRYSTAL	7-CCCP
Belgique	9	16-SKY LORDS	22-Konoha	28-1111	4-The Eyrie	10-Soul Reapers
Soul Reapers	10	3-Sax Clan	27-I FURIANI	21-Lost Soul	15-ЛЕВ	9-Belgique
Death or Glory	11	18-Kamigrain	24-Перун	30-Silver Wolf	6-Lily	12-Bansh
Bansh	12	5-Fighter	29-new athena	23-Pif Paf Pouf	17-Schriese	11-Death or Glory
CRYSTAL	13	20-MUKAKIN-MUGON	26-Die Hanse	2-First Wave	8-himatsubushi	14-The LIONS
The LIONS	14	7-CCCP	1-athena	25-Einfach so	19-StormCat	13-CRYSTAL
ЛЕВ	15	22-Konoha	28-1111	4-The Eyrie	10-Soul Reapers	16-SKY LORDS
SKY LORDS	16	9-Belgique	3-Sax Clan	27-I FURIANI	21-Lost Soul	15-ЛЕВ
Schriese	17	24-Перун	30-Silver Wolf	6-Lily	12-Bansh	18-Kamigrain
Kamigrain	18	11-Death or Glory	5-Fighter	29-new athena	23-Pif Paf Pouf	17-Schriese
StormCat	19	26-Die Hanse	2-First Wave	8-himatsubushi	14-The LIONS	20-MUKAKIN-MUGON
MUKAKIN-MUGON	20	13-CRYSTAL	7-CCCP	1-athena	25-Einfach so	19-StormCat
Lost Soul	21	28-1111	4-The Eyrie	10-Soul Reapers	16-SKY LORDS	22-Konoha
Konoha	22	15-ЛЕВ	9-Belgique	3-Sax Clan	27-I FURIANI	21-Lost Soul
Pif Paf Pouf	23	30-Silver Wolf	6-Lily	12-Bansh	18-Kamigrain	24-Перун
Перун	24	17-Schriese	11-Death or Glory	5-Fighter	29-new athena	23-Pif Paf Pouf
Einfach so	25	2-First Wave	8-himatsubushi	14-The LIONS	20-MUKAKIN-MUGON	26-Die Hanse
Die Hanse	26	19-StormCat	13-CRYSTAL	7-CCCP	1-athena	25-Einfach so
I FURIANI	27	4-The Eyrie	10-Soul Reapers	16-SKY LORDS	22-Konoha	28-1111
1111	28	21-Lost Soul	15-ЛЕВ	9-Belgique	3-Sax Clan	27-I FURIANI
new athena	29	6-Lily	12-Bansh	18-Kamigrain	24-Перун	30-Silver Wolf
Silver Wolf	30	23-Pif Paf Pouf	17-Schriese	11-Death or Glory	5-Fighter	29-new athena
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
