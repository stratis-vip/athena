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
Sax Clan\t1\t8-Lily\t14-NBC\t20-Schriese\t26-ONI SKY\t2-Mattari
Mattari\t2\t25-Die Hanse\t19-ЛЕВ\t13-Bansh\t7-The LIONS\t1-Sax Clan
athena\t3\t10-CCCP\t16-CRYSTAL\t22-Pif Paf Pouf\t28-Stoned Dragon\t4-Heros
Heros\t4\t27-ppmmOmmqq\t21-StormCat\t15-Death or Glory\t9-Belgique\t3-athena
Clan Destino\t5\t12-The Eyrie\t18-MUKAKIN-MUGON\t24-Kamigrain\t30-Talons of Power\t6-Велес
Велес\t6\t29-Перун\t23-КоролеваСемьи\t17-Soul Reapers\t11-himatsubushi\t5-Clan Destino
The LIONS\t7\t14-NBC\t20-Schriese\t26-ONI SKY\t2-Mattari\t8-Lily
Lily\t8\t1-Sax Clan\t25-Die Hanse\t19-ЛЕВ\t13-Bansh\t7-The LIONS
Belgique\t9\t16-CRYSTAL\t22-Pif Paf Pouf\t28-Stoned Dragon\t4-Heros\t10-CCCP
CCCP\t10\t3-athena\t27-ppmmOmmqq\t21-StormCat\t15-Death or Glory\t9-Belgique
himatsubushi\t11\t18-MUKAKIN-MUGON\t24-Kamigrain\t30-Talons of Power\t6-Велес\t12-The Eyrie
The Eyrie\t12\t5-Clan Destino\t29-Перун\t23-КоролеваСемьи\t17-Soul Reapers\t11-himatsubushi
Bansh\t13\t20-Schriese\t26-ONI SKY\t2-Mattari\t8-Lily\t14-NBC
NBC\t14\t7-The LIONS\t1-Sax Clan\t25-Die Hanse\t19-ЛЕВ\t13-Bansh
Death or Glory\t15\t22-Pif Paf Pouf\t28-Stoned Dragon\t4-Heros\t10-CCCP\t16-CRYSTAL
CRYSTAL\t16\t9-Belgique\t3-athena\t27-ppmmOmmqq\t21-StormCat\t15-Death or Glory
Soul Reapers\t17\t24-Kamigrain\t30-Talons of Power\t6-Велес\t12-The Eyrie\t18-MUKAKIN-MUGON
MUKAKIN-MUGON\t18\t11-himatsubushi\t5-Clan Destino\t29-Перун\t23-КоролеваСемьи\t17-Soul Reapers
ЛЕВ\t19\t26-ONI SKY\t2-Mattari\t8-Lily\t14-NBC\t20-Schriese
Schriese\t20\t13-Bansh\t7-The LIONS\t1-Sax Clan\t25-Die Hanse\t19-ЛЕВ
StormCat\t21\t28-Stoned Dragon\t4-Heros\t10-CCCP\t16-CRYSTAL\t22-Pif Paf Pouf
Pif Paf Pouf\t22\t15-Death or Glory\t9-Belgique\t3-athena\t27-ppmmOmmqq\t21-StormCat
КоролеваСемьи\t23\t30-Talons of Power\t6-Велес\t12-The Eyrie\t18-MUKAKIN-MUGON\t24-Kamigrain
Kamigrain\t24\t17-Soul Reapers\t11-himatsubushi\t5-Clan Destino\t29-Перун\t23-КоролеваСемьи
Die Hanse\t25\t2-Mattari\t8-Lily\t14-NBC\t20-Schriese\t26-ONI SKY
ONI SKY\t26\t19-ЛЕВ\t13-Bansh\t7-The LIONS\t1-Sax Clan\t25-Die Hanse
ppmmOmmqq\t27\t4-Heros\t10-CCCP\t16-CRYSTAL\t22-Pif Paf Pouf\t28-Stoned Dragon
Stoned Dragon\t28\t21-StormCat\t15-Death or Glory\t9-Belgique\t3-athena\t27-ppmmOmmqq
Перун\t29\t6-Велес\t12-The Eyrie\t18-MUKAKIN-MUGON\t24-Kamigrain\t30-Talons of Power
Talons of Power\t30\t23-КоролеваСемьи\t17-Soul Reapers\t11-himatsubushi\t5-Clan Destino\t29-Перун
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
