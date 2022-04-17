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
athena\t1\t8-himatsubushi\t14-The LIONS\t20-ONI SKY\t26-I FURIANI\t2-Clan Destino
Clan Destino\t2\t25-Schriese\t19-Перун\t13-The Eyrie\t7-Lily\t1-athena
Mattari\t3\t10-CCCP\t16-Bansh\t22-StormCat\t28-Die Hanse\t4-Heros
Heros\t4\t27-Retweet\t21-Crab Club\t15-Soul Reapers\t9-Death or Glory\t3-Mattari
Fighter\t5\t12-CRYSTAL\t18-Pif Paf Pouf\t24-КоролеваСемьи\t30-MUKAKIN-MUGON\t6-Велес
Велес\t6\t29-Kamigrain\t23-ЛЕВ\t17-NBC\t11-Belgique\t5-Fighter
Lily\t7\t14-The LIONS\t20-ONI SKY\t26-I FURIANI\t2-Clan Destino\t8-himatsubushi
himatsubushi\t8\t1-athena\t25-Schriese\t19-Перун\t13-The Eyrie\t7-Lily
Death or Glory\t9\t16-Bansh\t22-StormCat\t28-Die Hanse\t4-Heros\t10-CCCP
CCCP\t10\t3-Mattari\t27-Retweet\t21-Crab Club\t15-Soul Reapers\t9-Death or Glory
Belgique\t11\t18-Pif Paf Pouf\t24-КоролеваСемьи\t30-MUKAKIN-MUGON\t6-Велес\t12-CRYSTAL
CRYSTAL\t12\t5-Fighter\t29-Kamigrain\t23-ЛЕВ\t17-NBC\t11-Belgique
The Eyrie\t13\t20-ONI SKY\t26-I FURIANI\t2-Clan Destino\t8-himatsubushi\t14-The LIONS
The LIONS\t14\t7-Lily\t1-athena\t25-Schriese\t19-Перун\t13-The Eyrie
Soul Reapers\t15\t22-StormCat\t28-Die Hanse\t4-Heros\t10-CCCP\t16-Bansh
Bansh\t16\t9-Death or Glory\t3-Mattari\t27-Retweet\t21-Crab Club\t15-Soul Reapers
NBC\t17\t24-КоролеваСемьи\t30-MUKAKIN-MUGON\t6-Велес\t12-CRYSTAL\t18-Pif Paf Pouf
Pif Paf Pouf\t18\t11-Belgique\t5-Fighter\t29-Kamigrain\t23-ЛЕВ\t17-NBC
Перун\t19\t26-I FURIANI\t2-Clan Destino\t8-himatsubushi\t14-The LIONS\t20-ONI SKY
ONI SKY\t20\t13-The Eyrie\t7-Lily\t1-athena\t25-Schriese\t19-Перун
Crab Club\t21\t28-Die Hanse\t4-Heros\t10-CCCP\t16-Bansh\t22-StormCat
StormCat\t22\t15-Soul Reapers\t9-Death or Glory\t3-Mattari\t27-Retweet\t21-Crab Club
ЛЕВ\t23\t30-MUKAKIN-MUGON\t6-Велес\t12-CRYSTAL\t18-Pif Paf Pouf\t24-КоролеваСемьи
КоролеваСемьи\t24\t17-NBC\t11-Belgique\t5-Fighter\t29-Kamigrain\t23-ЛЕВ
Schriese\t25\t2-Clan Destino\t8-himatsubushi\t14-The LIONS\t20-ONI SKY\t26-I FURIANI
I FURIANI\t26\t19-Перун\t13-The Eyrie\t7-Lily\t1-athena\t25-Schriese
Retweet\t27\t4-Heros\t10-CCCP\t16-Bansh\t22-StormCat\t28-Die Hanse
Die Hanse\t28\t21-Crab Club\t15-Soul Reapers\t9-Death or Glory\t3-Mattari\t27-Retweet
Kamigrain\t29\t6-Велес\t12-CRYSTAL\t18-Pif Paf Pouf\t24-КоролеваСемьи\t30-MUKAKIN-MUGON
MUKAKIN-MUGON\t30\t23-ЛЕВ\t17-NBC\t11-Belgique\t5-Fighter\t29-Kamigrain
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
