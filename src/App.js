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


const data = `Guild\tPos.\tMonday\tTuesday\tWednesday\tThursday\tFriday
Велес\t1\t8-himatsubushi\t14-Soul Reapers\t20-Einfach so\t26-SKY LORDS\t2-athena
athena\t2\t25-StormCat\t19-Kamigrain\t13-Schriese\t7-Fighter\t1-Велес
Lily\t3\t10-Bansh\t16-Die Hanse\t22-ЛЕВ\t28-Team Heronic\t4-Sax Clan
Sax Clan\t4\t27-I FURIANI\t21-The LIONS\t15-Crab Club\t9-The Eyrie\t3-Lily
Clan Destino\t5\t12-CRYSTAL\t18-Перун\t24-MUKAKIN-MUGON\t30-тризуб\t6-CCCP
CCCP\t6\t29-The Dragon Way\t23-Pif Paf Pouf\t17-Death or Glory\t11-Belgique\t5-Clan Destino
Fighter\t7\t14-Soul Reapers\t20-Einfach so\t26-SKY LORDS\t2-athena\t8-himatsubushi
himatsubushi\t8\t1-Велес\t25-StormCat\t19-Kamigrain\t13-Schriese\t7-Fighter
The Eyrie\t9\t16-Die Hanse\t22-ЛЕВ\t28-Team Heronic\t4-Sax Clan\t10-Bansh
Bansh\t10\t3-Lily\t27-I FURIANI\t21-The LIONS\t15-Crab Club\t9-The Eyrie
Belgique\t11\t18-Перун\t24-MUKAKIN-MUGON\t30-тризуб\t6-CCCP\t12-CRYSTAL
CRYSTAL\t12\t5-Clan Destino\t29-The Dragon Way\t23-Pif Paf Pouf\t17-Death or Glory\t11-Belgique
Schriese\t13\t20-Einfach so\t26-SKY LORDS\t2-athena\t8-himatsubushi\t14-Soul Reapers
Soul Reapers\t14\t7-Fighter\t1-Велес\t25-StormCat\t19-Kamigrain\t13-Schriese
Crab Club\t15\t22-ЛЕВ\t28-Team Heronic\t4-Sax Clan\t10-Bansh\t16-Die Hanse
Die Hanse\t16\t9-The Eyrie\t3-Lily\t27-I FURIANI\t21-The LIONS\t15-Crab Club
Death or Glory\t17\t24-MUKAKIN-MUGON\t30-тризуб\t6-CCCP\t12-CRYSTAL\t18-Перун
Перун\t18\t11-Belgique\t5-Clan Destino\t29-The Dragon Way\t23-Pif Paf Pouf\t17-Death or Glory
Kamigrain\t19\t26-SKY LORDS\t2-athena\t8-himatsubushi\t14-Soul Reapers\t20-Einfach so
Einfach so\t20\t13-Schriese\t7-Fighter\t1-Велес\t25-StormCat\t19-Kamigrain
The LIONS\t21\t28-Team Heronic\t4-Sax Clan\t10-Bansh\t16-Die Hanse\t22-ЛЕВ
ЛЕВ\t22\t15-Crab Club\t9-The Eyrie\t3-Lily\t27-I FURIANI\t21-The LIONS
Pif Paf Pouf\t23\t30-тризуб\t6-CCCP\t12-CRYSTAL\t18-Перун\t24-MUKAKIN-MUGON
MUKAKIN-MUGON\t24\t17-Death or Glory\t11-Belgique\t5-Clan Destino\t29-The Dragon Way\t23-Pif Paf Pouf
StormCat\t25\t2-athena\t8-himatsubushi\t14-Soul Reapers\t20-Einfach so\t26-SKY LORDS
SKY LORDS\t26\t19-Kamigrain\t13-Schriese\t7-Fighter\t1-Велес\t25-StormCat
I FURIANI\t27\t4-Sax Clan\t10-Bansh\t16-Die Hanse\t22-ЛЕВ\t28-Team Heronic
Team Heronic\t28\t21-The LIONS\t15-Crab Club\t9-The Eyrie\t3-Lily\t27-I FURIANI
The Dragon Way\t29\t6-CCCP\t12-CRYSTAL\t18-Перун\t24-MUKAKIN-MUGON\t30-тризуб
тризуб\t30\t23-Pif Paf Pouf\t17-Death or Glory\t11-Belgique\t5-Clan Destino\t29-The Dragon Way
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

    // const loc = DateTime.local()
    // const noc = DateTime.now().setZone("Pacific/Auckland")
    return (
        <Auth0Provider domain={"dev-vyzmojme.eu.auth0.com"} clientId={"Wo0pmCF8b6mJGXVpwR7Yt6eHcD9dfJ8G"}
                       redirectUri={window.location.origin}>
            <RouterComponent/>
        </Auth0Provider>

    )
}


export default App;
