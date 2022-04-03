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
Mattari\t1\t8-Lily\t14-The Eyrie\t20-Kamigrain\t26-Crab Club\t2-SUNRISE
SUNRISE\t2\t25-ONI SKY\t19-Bansh\t13-NBC\t7-Clan Destino\t1-Mattari
athena\t3\t10-Belgique\t16-The LIONS\t22-Retweet\t28-Schriese\t4-Велес
Велес\t4\t27-StormCat\t21-КоролеваСемьи\t15-CRYSTAL\t9-CCCP\t3-athena
Heros\t5\t12-Death or Glory\t18-ЛЕВ\t24-Die Hanse\t30-I FURIANI\t6-Fighter
Fighter\t6\t29-ppmmOmmqq\t23-Pif Paf Pouf\t17-Soul Reapers\t11-himatsubushi\t5-Heros
Clan Destino\t7\t14-The Eyrie\t20-Kamigrain\t26-Crab Club\t2-SUNRISE\t8-Lily
Lily\t8\t1-Mattari\t25-ONI SKY\t19-Bansh\t13-NBC\t7-Clan Destino
CCCP\t9\t16-The LIONS\t22-Retweet\t28-Schriese\t4-Велес\t10-Belgique
Belgique\t10\t3-athena\t27-StormCat\t21-КоролеваСемьи\t15-CRYSTAL\t9-CCCP
himatsubushi\t11\t18-ЛЕВ\t24-Die Hanse\t30-I FURIANI\t6-Fighter\t12-Death or Glory
Death or Glory\t12\t5-Heros\t29-ppmmOmmqq\t23-Pif Paf Pouf\t17-Soul Reapers\t11-himatsubushi
NBC\t13\t20-Kamigrain\t26-Crab Club\t2-SUNRISE\t8-Lily\t14-The Eyrie
The Eyrie\t14\t7-Clan Destino\t1-Mattari\t25-ONI SKY\t19-Bansh\t13-NBC
CRYSTAL\t15\t22-Retweet\t28-Schriese\t4-Велес\t10-Belgique\t16-The LIONS
The LIONS\t16\t9-CCCP\t3-athena\t27-StormCat\t21-КоролеваСемьи\t15-CRYSTAL
Soul Reapers\t17\t24-Die Hanse\t30-I FURIANI\t6-Fighter\t12-Death or Glory\t18-ЛЕВ
ЛЕВ\t18\t11-himatsubushi\t5-Heros\t29-ppmmOmmqq\t23-Pif Paf Pouf\t17-Soul Reapers
Bansh\t19\t26-Crab Club\t2-SUNRISE\t8-Lily\t14-The Eyrie\t20-Kamigrain
Kamigrain\t20\t13-NBC\t7-Clan Destino\t1-Mattari\t25-ONI SKY\t19-Bansh
КоролеваСемьи\t21\t28-Schriese\t4-Велес\t10-Belgique\t16-The LIONS\t22-Retweet
Retweet\t22\t15-CRYSTAL\t9-CCCP\t3-athena\t27-StormCat\t21-КоролеваСемьи
Pif Paf Pouf\t23\t30-I FURIANI\t6-Fighter\t12-Death or Glory\t18-ЛЕВ\t24-Die Hanse
Die Hanse\t24\t17-Soul Reapers\t11-himatsubushi\t5-Heros\t29-ppmmOmmqq\t23-Pif Paf Pouf
ONI SKY\t25\t2-SUNRISE\t8-Lily\t14-The Eyrie\t20-Kamigrain\t26-Crab Club
Crab Club\t26\t19-Bansh\t13-NBC\t7-Clan Destino\t1-Mattari\t25-ONI SKY
StormCat\t27\t4-Велес\t10-Belgique\t16-The LIONS\t22-Retweet\t28-Schriese
Schriese\t28\t21-КоролеваСемьи\t15-CRYSTAL\t9-CCCP\t3-athena\t27-StormCat
ppmmOmmqq\t29\t6-Fighter\t12-Death or Glory\t18-ЛЕВ\t24-Die Hanse\t30-I FURIANI
I FURIANI\t30\t23-Pif Paf Pouf\t17-Soul Reapers\t11-himatsubushi\t5-Heros\t29-ppmmOmmqq
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
