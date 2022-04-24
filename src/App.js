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
athena\t1\t8-Clan Destino\t14-NBC\t20-StormCat\t26-Die Hanse\t2-Mattari
Mattari\t2\t25-Retweet\t19-ЛЕВ\t13-CRYSTAL\t7-CCCP\t1-athena
Fighter\t3\t10-Belgique\t16-Soul Reapers\t22-Перун\t28-Crab Club\t4-Lily
Lily\t4\t27-ONI SKY\t21-Schriese\t15-Bansh\t9-The Eyrie\t3-Fighter
Heros\t5\t12-himatsubushi\t18-MUKAKIN-MUGON\t24-Kamigrain\t30-I FURIANI\t6-Велес
Велес\t6\t29-КоролеваСемьи\t23-Pif Paf Pouf\t17-The LIONS\t11-Death or Glory\t5-Heros
CCCP\t7\t14-NBC\t20-StormCat\t26-Die Hanse\t2-Mattari\t8-Clan Destino
Clan Destino\t8\t1-athena\t25-Retweet\t19-ЛЕВ\t13-CRYSTAL\t7-CCCP
The Eyrie\t9\t16-Soul Reapers\t22-Перун\t28-Crab Club\t4-Lily\t10-Belgique
Belgique\t10\t3-Fighter\t27-ONI SKY\t21-Schriese\t15-Bansh\t9-The Eyrie
Death or Glory\t11\t18-MUKAKIN-MUGON\t24-Kamigrain\t30-I FURIANI\t6-Велес\t12-himatsubushi
himatsubushi\t12\t5-Heros\t29-КоролеваСемьи\t23-Pif Paf Pouf\t17-The LIONS\t11-Death or Glory
CRYSTAL\t13\t20-StormCat\t26-Die Hanse\t2-Mattari\t8-Clan Destino\t14-NBC
NBC\t14\t7-CCCP\t1-athena\t25-Retweet\t19-ЛЕВ\t13-CRYSTAL
Bansh\t15\t22-Перун\t28-Crab Club\t4-Lily\t10-Belgique\t16-Soul Reapers
Soul Reapers\t16\t9-The Eyrie\t3-Fighter\t27-ONI SKY\t21-Schriese\t15-Bansh
The LIONS\t17\t24-Kamigrain\t30-I FURIANI\t6-Велес\t12-himatsubushi\t18-MUKAKIN-MUGON
MUKAKIN-MUGON\t18\t11-Death or Glory\t5-Heros\t29-КоролеваСемьи\t23-Pif Paf Pouf\t17-The LIONS
ЛЕВ\t19\t26-Die Hanse\t2-Mattari\t8-Clan Destino\t14-NBC\t20-StormCat
StormCat\t20\t13-CRYSTAL\t7-CCCP\t1-athena\t25-Retweet\t19-ЛЕВ
Schriese\t21\t28-Crab Club\t4-Lily\t10-Belgique\t16-Soul Reapers\t22-Перун
Перун\t22\t15-Bansh\t9-The Eyrie\t3-Fighter\t27-ONI SKY\t21-Schriese
Pif Paf Pouf\t23\t30-I FURIANI\t6-Велес\t12-himatsubushi\t18-MUKAKIN-MUGON\t24-Kamigrain
Kamigrain\t24\t17-The LIONS\t11-Death or Glory\t5-Heros\t29-КоролеваСемьи\t23-Pif Paf Pouf
Retweet\t25\t2-Mattari\t8-Clan Destino\t14-NBC\t20-StormCat\t26-Die Hanse
Die Hanse\t26\t19-ЛЕВ\t13-CRYSTAL\t7-CCCP\t1-athena\t25-Retweet
ONI SKY\t27\t4-Lily\t10-Belgique\t16-Soul Reapers\t22-Перун\t28-Crab Club
Crab Club\t28\t21-Schriese\t15-Bansh\t9-The Eyrie\t3-Fighter\t27-ONI SKY
КоролеваСемьи\t29\t6-Велес\t12-himatsubushi\t18-MUKAKIN-MUGON\t24-Kamigrain\t30-I FURIANI
I FURIANI\t30\t23-Pif Paf Pouf\t17-The LIONS\t11-Death or Glory\t5-Heros\t29-КоролеваСемьи
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
