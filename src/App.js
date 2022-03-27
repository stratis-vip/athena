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
First Wave\t1\t8-Clan Destino\t14-CRYSTAL\t20-Schriese\t26-StormCat\t2-Death or Glory
Death or Glory\t2\t25-Pif Paf Pouf\t19-Bansh\t13-himatsubushi\t7-Велес\t1-First Wave
athena\t3\t10-Belgique\t16-NBC\t22-КоролеваСемьи\t28-ppmmOmmqq\t4-Heros
Heros\t4\t27-Retweet\t21-ЛЕВ\t15-The LIONS\t9-Fighter\t3-athena
Knight of Knights\t5\t12-CCCP\t18-Soul Reapers\t24-Kamigrain\t30-Die Hanse\t6-Lily
Lily\t6\t29-Crab Club\t23-I FURIANI\t17-ONI SKY\t11-The Eyrie\t5-Knight of Knights
Велес\t7\t14-CRYSTAL\t20-Schriese\t26-StormCat\t2-Death or Glory\t8-Clan Destino
Clan Destino\t8\t1-First Wave\t25-Pif Paf Pouf\t19-Bansh\t13-himatsubushi\t7-Велес
Fighter\t9\t16-NBC\t22-КоролеваСемьи\t28-ppmmOmmqq\t4-Heros\t10-Belgique
Belgique\t10\t3-athena\t27-Retweet\t21-ЛЕВ\t15-The LIONS\t9-Fighter
The Eyrie\t11\t18-Soul Reapers\t24-Kamigrain\t30-Die Hanse\t6-Lily\t12-CCCP
CCCP\t12\t5-Knight of Knights\t29-Crab Club\t23-I FURIANI\t17-ONI SKY\t11-The Eyrie
himatsubushi\t13\t20-Schriese\t26-StormCat\t2-Death or Glory\t8-Clan Destino\t14-CRYSTAL
CRYSTAL\t14\t7-Велес\t1-First Wave\t25-Pif Paf Pouf\t19-Bansh\t13-himatsubushi
The LIONS\t15\t22-КоролеваСемьи\t28-ppmmOmmqq\t4-Heros\t10-Belgique\t16-NBC
NBC\t16\t9-Fighter\t3-athena\t27-Retweet\t21-ЛЕВ\t15-The LIONS
ONI SKY\t17\t24-Kamigrain\t30-Die Hanse\t6-Lily\t12-CCCP\t18-Soul Reapers
Soul Reapers\t18\t11-The Eyrie\t5-Knight of Knights\t29-Crab Club\t23-I FURIANI\t17-ONI SKY
Bansh\t19\t26-StormCat\t2-Death or Glory\t8-Clan Destino\t14-CRYSTAL\t20-Schriese
Schriese\t20\t13-himatsubushi\t7-Велес\t1-First Wave\t25-Pif Paf Pouf\t19-Bansh
ЛЕВ\t21\t28-ppmmOmmqq\t4-Heros\t10-Belgique\t16-NBC\t22-КоролеваСемьи
КоролеваСемьи\t22\t15-The LIONS\t9-Fighter\t3-athena\t27-Retweet\t21-ЛЕВ
I FURIANI\t23\t30-Die Hanse\t6-Lily\t12-CCCP\t18-Soul Reapers\t24-Kamigrain
Kamigrain\t24\t17-ONI SKY\t11-The Eyrie\t5-Knight of Knights\t29-Crab Club\t23-I FURIANI
Pif Paf Pouf\t25\t2-Death or Glory\t8-Clan Destino\t14-CRYSTAL\t20-Schriese\t26-StormCat
StormCat\t26\t19-Bansh\t13-himatsubushi\t7-Велес\t1-First Wave\t25-Pif Paf Pouf
Retweet\t27\t4-Heros\t10-Belgique\t16-NBC\t22-КоролеваСемьи\t28-ppmmOmmqq
ppmmOmmqq\t28\t21-ЛЕВ\t15-The LIONS\t9-Fighter\t3-athena\t27-Retweet
Crab Club\t29\t6-Lily\t12-CCCP\t18-Soul Reapers\t24-Kamigrain\t30-Die Hanse
Die Hanse\t30\t23-I FURIANI\t17-ONI SKY\t11-The Eyrie\t5-Knight of Knights\t29-Crab Club
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
