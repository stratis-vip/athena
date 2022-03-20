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
Sax Clan\t1\t8-CCCP\t14-CRYSTAL\t20-StormCat\t26-Pif Paf Pouf\t2-Knight of Knights
Knight of Knights\t2\t25-СССР-2\t19-Soul Reapers\t13-NBC\t7-Fighter\t1-Sax Clan
Mattari\t3\t10-Велес\t16-himatsubushi\t22-КоролеваСемьи\t28-Перун\t4-athena
athena\t4\t27-ЛЕВ\t21-Bansh\t15-Kamigrain\t9-Clan Destino\t3-Mattari
Heros\t5\t12-Belgique\t18-The LIONS\t24-ONI SKY\t30-I FURIANI\t6-Lily
Lily\t6\t29-Mogontiacum\t23-MUKAKIN-MUGON\t17-Schriese\t11-The Eyrie\t5-Heros
Fighter\t7\t14-CRYSTAL\t20-StormCat\t26-Pif Paf Pouf\t2-Knight of Knights\t8-CCCP
CCCP\t8\t1-Sax Clan\t25-СССР-2\t19-Soul Reapers\t13-NBC\t7-Fighter
Clan Destino\t9\t16-himatsubushi\t22-КоролеваСемьи\t28-Перун\t4-athena\t10-Велес
Велес\t10\t3-Mattari\t27-ЛЕВ\t21-Bansh\t15-Kamigrain\t9-Clan Destino
The Eyrie\t11\t18-The LIONS\t24-ONI SKY\t30-I FURIANI\t6-Lily\t12-Belgique
Belgique\t12\t5-Heros\t29-Mogontiacum\t23-MUKAKIN-MUGON\t17-Schriese\t11-The Eyrie
NBC\t13\t20-StormCat\t26-Pif Paf Pouf\t2-Knight of Knights\t8-CCCP\t14-CRYSTAL
CRYSTAL\t14\t7-Fighter\t1-Sax Clan\t25-СССР-2\t19-Soul Reapers\t13-NBC
Kamigrain\t15\t22-КоролеваСемьи\t28-Перун\t4-athena\t10-Велес\t16-himatsubushi
himatsubushi\t16\t9-Clan Destino\t3-Mattari\t27-ЛЕВ\t21-Bansh\t15-Kamigrain
Schriese\t17\t24-ONI SKY\t30-I FURIANI\t6-Lily\t12-Belgique\t18-The LIONS
The LIONS\t18\t11-The Eyrie\t5-Heros\t29-Mogontiacum\t23-MUKAKIN-MUGON\t17-Schriese
Soul Reapers\t19\t26-Pif Paf Pouf\t2-Knight of Knights\t8-CCCP\t14-CRYSTAL\t20-StormCat
StormCat\t20\t13-NBC\t7-Fighter\t1-Sax Clan\t25-СССР-2\t19-Soul Reapers
Bansh\t21\t28-Перун\t4-athena\t10-Велес\t16-himatsubushi\t22-КоролеваСемьи
КоролеваСемьи\t22\t15-Kamigrain\t9-Clan Destino\t3-Mattari\t27-ЛЕВ\t21-Bansh
MUKAKIN-MUGON\t23\t30-I FURIANI\t6-Lily\t12-Belgique\t18-The LIONS\t24-ONI SKY
ONI SKY\t24\t17-Schriese\t11-The Eyrie\t5-Heros\t29-Mogontiacum\t23-MUKAKIN-MUGON
СССР-2\t25\t2-Knight of Knights\t8-CCCP\t14-CRYSTAL\t20-StormCat\t26-Pif Paf Pouf
Pif Paf Pouf\t26\t19-Soul Reapers\t13-NBC\t7-Fighter\t1-Sax Clan\t25-СССР-2
ЛЕВ\t27\t4-athena\t10-Велес\t16-himatsubushi\t22-КоролеваСемьи\t28-Перун
Перун\t28\t21-Bansh\t15-Kamigrain\t9-Clan Destino\t3-Mattari\t27-ЛЕВ
Mogontiacum\t29\t6-Lily\t12-Belgique\t18-The LIONS\t24-ONI SKY\t30-I FURIANI
I FURIANI\t30\t23-MUKAKIN-MUGON\t17-Schriese\t11-The Eyrie\t5-Heros\t29-Mogontiacum
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
            dispatch(addAllTeams(warObj.data.filter(team => team.league === "Bronze").sort((a, b) => a.position - b.position)))
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
