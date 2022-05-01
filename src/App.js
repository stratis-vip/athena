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
Knight of Knights\t1\t8-Lily\t14-CRYSTAL\t20-Kamigrain\t26-ONI SKY\t2-athena
athena\t2\t25-Crab Club\t19-StormCat\t13-Death or Glory\t7-CCCP\t1-Knight of Knights
Mattari\t3\t10-The Eyrie\t16-The LIONS\t22-КоролеваСемьи\t28-I FURIANI\t4-Велес
Велес\t4\t27-ЛЕВ\t21-MUKAKIN-MUGON\t15-Soul Reapers\t9-Belgique\t3-Mattari
Heros\t5\t12-NBC\t18-Schriese\t24-Die Hanse\t30-ppmmOmmqq\t6-Clan Destino
Clan Destino\t6\t29-Retweet\t23-Pif Paf Pouf\t17-Bansh\t11-himatsubushi\t5-Heros
CCCP\t7\t14-CRYSTAL\t20-Kamigrain\t26-ONI SKY\t2-athena\t8-Lily
Lily\t8\t1-Knight of Knights\t25-Crab Club\t19-StormCat\t13-Death or Glory\t7-CCCP
Belgique\t9\t16-The LIONS\t22-КоролеваСемьи\t28-I FURIANI\t4-Велес\t10-The Eyrie
The Eyrie\t10\t3-Mattari\t27-ЛЕВ\t21-MUKAKIN-MUGON\t15-Soul Reapers\t9-Belgique
himatsubushi\t11\t18-Schriese\t24-Die Hanse\t30-ppmmOmmqq\t6-Clan Destino\t12-NBC
NBC\t12\t5-Heros\t29-Retweet\t23-Pif Paf Pouf\t17-Bansh\t11-himatsubushi
Death or Glory\t13\t20-Kamigrain\t26-ONI SKY\t2-athena\t8-Lily\t14-CRYSTAL
CRYSTAL\t14\t7-CCCP\t1-Knight of Knights\t25-Crab Club\t19-StormCat\t13-Death or Glory
Soul Reapers\t15\t22-КоролеваСемьи\t28-I FURIANI\t4-Велес\t10-The Eyrie\t16-The LIONS
The LIONS\t16\t9-Belgique\t3-Mattari\t27-ЛЕВ\t21-MUKAKIN-MUGON\t15-Soul Reapers
Bansh\t17\t24-Die Hanse\t30-ppmmOmmqq\t6-Clan Destino\t12-NBC\t18-Schriese
Schriese\t18\t11-himatsubushi\t5-Heros\t29-Retweet\t23-Pif Paf Pouf\t17-Bansh
StormCat\t19\t26-ONI SKY\t2-athena\t8-Lily\t14-CRYSTAL\t20-Kamigrain
Kamigrain\t20\t13-Death or Glory\t7-CCCP\t1-Knight of Knights\t25-Crab Club\t19-StormCat
MUKAKIN-MUGON\t21\t28-I FURIANI\t4-Велес\t10-The Eyrie\t16-The LIONS\t22-КоролеваСемьи
КоролеваСемьи\t22\t15-Soul Reapers\t9-Belgique\t3-Mattari\t27-ЛЕВ\t21-MUKAKIN-MUGON
Pif Paf Pouf\t23\t30-ppmmOmmqq\t6-Clan Destino\t12-NBC\t18-Schriese\t24-Die Hanse
Die Hanse\t24\t17-Bansh\t11-himatsubushi\t5-Heros\t29-Retweet\t23-Pif Paf Pouf
Crab Club\t25\t2-athena\t8-Lily\t14-CRYSTAL\t20-Kamigrain\t26-ONI SKY
ONI SKY\t26\t19-StormCat\t13-Death or Glory\t7-CCCP\t1-Knight of Knights\t25-Crab Club
ЛЕВ\t27\t4-Велес\t10-The Eyrie\t16-The LIONS\t22-КоролеваСемьи\t28-I FURIANI
I FURIANI\t28\t21-MUKAKIN-MUGON\t15-Soul Reapers\t9-Belgique\t3-Mattari\t27-ЛЕВ
Retweet\t29\t6-Clan Destino\t12-NBC\t18-Schriese\t24-Die Hanse\t30-ppmmOmmqq
ppmmOmmqq\t30\t23-Pif Paf Pouf\t17-Bansh\t11-himatsubushi\t5-Heros\t29-Retweet
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
