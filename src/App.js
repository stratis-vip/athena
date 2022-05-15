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
First Wave\t1\t8-CCCP\t14-Stoned Dragon\t20-Kamigrain\t26-Pif Paf Pouf\t2-Mattari
Mattari\t2\t25-ЛЕВ\t19-Перун\t13-CRYSTAL\t7-Lily\t1-First Wave
athena\t3\t10-himatsubushi\t16-Death or Glory\t22-StormCat\t28-ppmmOmmqq\t4-Clan Destino
Clan Destino\t4\t27-Die Hanse\t21-MUKAKIN-MUGON\t15-NBC\t9-Belgique\t3-athena
Sax Clan\t5\t12-The LIONS\t18-Bansh\t24-КоролеваСемьи\t30-I FURIANI\t6-Heros
Heros\t6\t29-La 42 eme\t23-Schriese\t17-Soul Reapers\t11-The Eyrie\t5-Sax Clan
Lily\t7\t14-Stoned Dragon\t20-Kamigrain\t26-Pif Paf Pouf\t2-Mattari\t8-CCCP
CCCP\t8\t1-First Wave\t25-ЛЕВ\t19-Перун\t13-CRYSTAL\t7-Lily
Belgique\t9\t16-Death or Glory\t22-StormCat\t28-ppmmOmmqq\t4-Clan Destino\t10-himatsubushi
himatsubushi\t10\t3-athena\t27-Die Hanse\t21-MUKAKIN-MUGON\t15-NBC\t9-Belgique
The Eyrie\t11\t18-Bansh\t24-КоролеваСемьи\t30-I FURIANI\t6-Heros\t12-The LIONS
The LIONS\t12\t5-Sax Clan\t29-La 42 eme\t23-Schriese\t17-Soul Reapers\t11-The Eyrie
CRYSTAL\t13\t20-Kamigrain\t26-Pif Paf Pouf\t2-Mattari\t8-CCCP\t14-Stoned Dragon
Stoned Dragon\t14\t7-Lily\t1-First Wave\t25-ЛЕВ\t19-Перун\t13-CRYSTAL
NBC\t15\t22-StormCat\t28-ppmmOmmqq\t4-Clan Destino\t10-himatsubushi\t16-Death or Glory
Death or Glory\t16\t9-Belgique\t3-athena\t27-Die Hanse\t21-MUKAKIN-MUGON\t15-NBC
Soul Reapers\t17\t24-КоролеваСемьи\t30-I FURIANI\t6-Heros\t12-The LIONS\t18-Bansh
Bansh\t18\t11-The Eyrie\t5-Sax Clan\t29-La 42 eme\t23-Schriese\t17-Soul Reapers
Перун\t19\t26-Pif Paf Pouf\t2-Mattari\t8-CCCP\t14-Stoned Dragon\t20-Kamigrain
Kamigrain\t20\t13-CRYSTAL\t7-Lily\t1-First Wave\t25-ЛЕВ\t19-Перун
MUKAKIN-MUGON\t21\t28-ppmmOmmqq\t4-Clan Destino\t10-himatsubushi\t16-Death or Glory\t22-StormCat
StormCat\t22\t15-NBC\t9-Belgique\t3-athena\t27-Die Hanse\t21-MUKAKIN-MUGON
Schriese\t23\t30-I FURIANI\t6-Heros\t12-The LIONS\t18-Bansh\t24-КоролеваСемьи
КоролеваСемьи\t24\t17-Soul Reapers\t11-The Eyrie\t5-Sax Clan\t29-La 42 eme\t23-Schriese
ЛЕВ\t25\t2-Mattari\t8-CCCP\t14-Stoned Dragon\t20-Kamigrain\t26-Pif Paf Pouf
Pif Paf Pouf\t26\t19-Перун\t13-CRYSTAL\t7-Lily\t1-First Wave\t25-ЛЕВ
Die Hanse\t27\t4-Clan Destino\t10-himatsubushi\t16-Death or Glory\t22-StormCat\t28-ppmmOmmqq
ppmmOmmqq\t28\t21-MUKAKIN-MUGON\t15-NBC\t9-Belgique\t3-athena\t27-Die Hanse
La 42 eme\t29\t6-Heros\t12-The LIONS\t18-Bansh\t24-КоролеваСемьи\t30-I FURIANI
I FURIANI\t30\t23-Schriese\t17-Soul Reapers\t11-The Eyrie\t5-Sax Clan\t29-La 42 eme
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
