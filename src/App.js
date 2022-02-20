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
// import {login, loginAuth, logoutAuth} from "./features/logSlice";
import RouterComponent from "./components/router-comp";
import {analyzeString, warObj} from "./components/import";
// import { ClerkProvider } from "@clerk/clerk-react";
const sortF = (a, b) => {
    return Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"));
}


const data = `Guild\tPos.\tMonday\tTuesday\tWednesday\tThursday\tFriday
athena\t1\t8-Велес\t14-Soul Reapers\t20-ЛЕВ\t26-Pif Paf Pouf\t2-The Eyrie
The Eyrie\t2\t25-The LIONS\t19-Kamigrain\t13-NBC\t7-Heros\t1-athena
Lily\t3\t10-CCCP\t16-CRYSTAL\t22-Schriese\t28-Die Hanse\t4-Knight of Knights
Knight of Knights\t4\t27-ONI SKY\t21-StormCat\t15-himatsubushi\t9-Belgique\t3-Lily
Mattari\t5\t12-СССР-2\t18-Bansh\t24-КоролеваСемьи\t30-Dachschaden\t6-Fighter
Fighter\t6\t29-The Demon Vanguard\t23-MUKAKIN-MUGON\t17-Retweet\t11-Clan Destino\t5-Mattari
Heros\t7\t14-Soul Reapers\t20-ЛЕВ\t26-Pif Paf Pouf\t2-The Eyrie\t8-Велес
Велес\t8\t1-athena\t25-The LIONS\t19-Kamigrain\t13-NBC\t7-Heros
Belgique\t9\t16-CRYSTAL\t22-Schriese\t28-Die Hanse\t4-Knight of Knights\t10-CCCP
CCCP\t10\t3-Lily\t27-ONI SKY\t21-StormCat\t15-himatsubushi\t9-Belgique
Clan Destino\t11\t18-Bansh\t24-КоролеваСемьи\t30-Dachschaden\t6-Fighter\t12-СССР-2
СССР-2\t12\t5-Mattari\t29-The Demon Vanguard\t23-MUKAKIN-MUGON\t17-Retweet\t11-Clan Destino
NBC\t13\t20-ЛЕВ\t26-Pif Paf Pouf\t2-The Eyrie\t8-Велес\t14-Soul Reapers
Soul Reapers\t14\t7-Heros\t1-athena\t25-The LIONS\t19-Kamigrain\t13-NBC
himatsubushi\t15\t22-Schriese\t28-Die Hanse\t4-Knight of Knights\t10-CCCP\t16-CRYSTAL
CRYSTAL\t16\t9-Belgique\t3-Lily\t27-ONI SKY\t21-StormCat\t15-himatsubushi
Retweet\t17\t24-КоролеваСемьи\t30-Dachschaden\t6-Fighter\t12-СССР-2\t18-Bansh
Bansh\t18\t11-Clan Destino\t5-Mattari\t29-The Demon Vanguard\t23-MUKAKIN-MUGON\t17-Retweet
Kamigrain\t19\t26-Pif Paf Pouf\t2-The Eyrie\t8-Велес\t14-Soul Reapers\t20-ЛЕВ
ЛЕВ\t20\t13-NBC\t7-Heros\t1-athena\t25-The LIONS\t19-Kamigrain
StormCat\t21\t28-Die Hanse\t4-Knight of Knights\t10-CCCP\t16-CRYSTAL\t22-Schriese
Schriese\t22\t15-himatsubushi\t9-Belgique\t3-Lily\t27-ONI SKY\t21-StormCat
MUKAKIN-MUGON\t23\t30-Dachschaden\t6-Fighter\t12-СССР-2\t18-Bansh\t24-КоролеваСемьи
КоролеваСемьи\t24\t17-Retweet\t11-Clan Destino\t5-Mattari\t29-The Demon Vanguard\t23-MUKAKIN-MUGON
The LIONS\t25\t2-The Eyrie\t8-Велес\t14-Soul Reapers\t20-ЛЕВ\t26-Pif Paf Pouf
Pif Paf Pouf\t26\t19-Kamigrain\t13-NBC\t7-Heros\t1-athena\t25-The LIONS
ONI SKY\t27\t4-Knight of Knights\t10-CCCP\t16-CRYSTAL\t22-Schriese\t28-Die Hanse
Die Hanse\t28\t21-StormCat\t15-himatsubushi\t9-Belgique\t3-Lily\t27-ONI SKY
The Demon Vanguard\t29\t6-Fighter\t12-СССР-2\t18-Bansh\t24-КоролеваСемьи\t30-Dachschaden
Dachschaden\t30\t23-MUKAKIN-MUGON\t17-Retweet\t11-Clan Destino\t5-Mattari\t29-The Demon Vanguard
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
