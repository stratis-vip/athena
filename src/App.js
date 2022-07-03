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
import {analyzeString, warObj} from "./components/import";
// import { ClerkProvider } from "@clerk/clerk-react";
const sortF = (a, b) => {
    return Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"));
}


const data = `Guild\tPos.\tMonday\tTuesday\tWednesday\tThursday\tFriday
athena\t1\t8-Soul Reapers\t14-The LIONS\t20-MUKAKIN-MUGON\t26-SKY LORDS\t2-Mattari
Mattari\t2\t25-1111\t19-Death or Glory\t13-CRYSTAL\t7-Fighter\t1-athena
Sax Clan\t3\t10-The Eyrie\t16-ЛЕВ\t22-StormCat\t28-Tramps and Thieves\t4-Clan Destino
Clan Destino\t4\t27-Einfach so\t21-Перун\t15-Kamigrain\t9-himatsubushi\t3-Sax Clan
Lily\t5\t12-Bansh\t18-Schriese\t24-Die Hanse\t30-Crab Club\t6-CCCP
CCCP\t6\t29-Eagle Eye\t23-Pif Paf Pouf\t17-I FURIANI\t11-Belgique\t5-Lily
Fighter\t7\t14-The LIONS\t20-MUKAKIN-MUGON\t26-SKY LORDS\t2-Mattari\t8-Soul Reapers
Soul Reapers\t8\t1-athena\t25-1111\t19-Death or Glory\t13-CRYSTAL\t7-Fighter
himatsubushi\t9\t16-ЛЕВ\t22-StormCat\t28-Tramps and Thieves\t4-Clan Destino\t10-The Eyrie
The Eyrie\t10\t3-Sax Clan\t27-Einfach so\t21-Перун\t15-Kamigrain\t9-himatsubushi
Belgique\t11\t18-Schriese\t24-Die Hanse\t30-Crab Club\t6-CCCP\t12-Bansh
Bansh\t12\t5-Lily\t29-Eagle Eye\t23-Pif Paf Pouf\t17-I FURIANI\t11-Belgique
CRYSTAL\t13\t20-MUKAKIN-MUGON\t26-SKY LORDS\t2-Mattari\t8-Soul Reapers\t14-The LIONS
The LIONS\t14\t7-Fighter\t1-athena\t25-1111\t19-Death or Glory\t13-CRYSTAL
Kamigrain\t15\t22-StormCat\t28-Tramps and Thieves\t4-Clan Destino\t10-The Eyrie\t16-ЛЕВ
ЛЕВ\t16\t9-himatsubushi\t3-Sax Clan\t27-Einfach so\t21-Перун\t15-Kamigrain
I FURIANI\t17\t24-Die Hanse\t30-Crab Club\t6-CCCP\t12-Bansh\t18-Schriese
Schriese\t18\t11-Belgique\t5-Lily\t29-Eagle Eye\t23-Pif Paf Pouf\t17-I FURIANI
Death or Glory\t19\t26-SKY LORDS\t2-Mattari\t8-Soul Reapers\t14-The LIONS\t20-MUKAKIN-MUGON
MUKAKIN-MUGON\t20\t13-CRYSTAL\t7-Fighter\t1-athena\t25-1111\t19-Death or Glory
Перун\t21\t28-Tramps and Thieves\t4-Clan Destino\t10-The Eyrie\t16-ЛЕВ\t22-StormCat
StormCat\t22\t15-Kamigrain\t9-himatsubushi\t3-Sax Clan\t27-Einfach so\t21-Перун
Pif Paf Pouf\t23\t30-Crab Club\t6-CCCP\t12-Bansh\t18-Schriese\t24-Die Hanse
Die Hanse\t24\t17-I FURIANI\t11-Belgique\t5-Lily\t29-Eagle Eye\t23-Pif Paf Pouf
1111\t25\t2-Mattari\t8-Soul Reapers\t14-The LIONS\t20-MUKAKIN-MUGON\t26-SKY LORDS
SKY LORDS\t26\t19-Death or Glory\t13-CRYSTAL\t7-Fighter\t1-athena\t25-1111
Einfach so\t27\t4-Clan Destino\t10-The Eyrie\t16-ЛЕВ\t22-StormCat\t28-Tramps and Thieves
Tramps and Thieves\t28\t21-Перун\t15-Kamigrain\t9-himatsubushi\t3-Sax Clan\t27-Einfach so
Eagle Eye\t29\t6-CCCP\t12-Bansh\t18-Schriese\t24-Die Hanse\t30-Crab Club
Crab Club\t30\t23-Pif Paf Pouf\t17-I FURIANI\t11-Belgique\t5-Lily\t29-Eagle Eye
`

const App = () => {
    const dispatch = useDispatch()

    useEffect(async () => {
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
            // function compare(a, b) {
            //
            //     // Turn your strings into dates, and then subtract them
            //     // to get a value that is either negative, positive, or zero.
            //     return (a.loc) - (b.loc);
            // }
            //
            //
            // const usersWithTime = usersFromJson.map(user => {
            //     return {...user, loc: DateTime.now().setZone(user.zone).toFormat("yyyyLLddHHmm")}
            // })
            // dispatch(addAllUsers(usersWithTime.sort(compare)))
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
    const noc = DateTime.now().setZone("Pacific/Auckland")
    return (
        <Auth0Provider domain={"dev-vyzmojme.eu.auth0.com"} clientId={"Wo0pmCF8b6mJGXVpwR7Yt6eHcD9dfJ8G"}
                       redirectUri={window.location.origin}>
            <RouterComponent/>
        </Auth0Provider>

    )
        ;

}


export default App;
