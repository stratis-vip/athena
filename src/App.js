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
athena\t1\t8-Clan Destino\t14-СССР-2\t20-Pif Paf Pouf\t26-ONI SKY\t2-Mattari
Mattari\t2\t25-КоролеваСемьи\t19-Retweet\t13-CRYSTAL\t7-Heros\t1-athena
First Wave\t3\t10-Lily\t16-himatsubushi\t22-Bansh\t28-Die Hanse\t4-Knight of Knights
Knight of Knights\t4\t27-Schriese\t21-Kamigrain\t15-NBC\t9-CCCP\t3-First Wave
Велес\t5\t12-Belgique\t18-Soul Reapers\t24-MUKAKIN-MUGON\t30-pink pirates\t6-Fighter
Fighter\t6\t29-ppmmOmmqq\t23-StormCat\t17-The LIONS\t11-The Eyrie\t5-Велес
Heros\t7\t14-СССР-2\t20-Pif Paf Pouf\t26-ONI SKY\t2-Mattari\t8-Clan Destino
Clan Destino\t8\t1-athena\t25-КоролеваСемьи\t19-Retweet\t13-CRYSTAL\t7-Heros
CCCP\t9\t16-himatsubushi\t22-Bansh\t28-Die Hanse\t4-Knight of Knights\t10-Lily
Lily\t10\t3-First Wave\t27-Schriese\t21-Kamigrain\t15-NBC\t9-CCCP
The Eyrie\t11\t18-Soul Reapers\t24-MUKAKIN-MUGON\t30-pink pirates\t6-Fighter\t12-Belgique
Belgique\t12\t5-Велес\t29-ppmmOmmqq\t23-StormCat\t17-The LIONS\t11-The Eyrie
CRYSTAL\t13\t20-Pif Paf Pouf\t26-ONI SKY\t2-Mattari\t8-Clan Destino\t14-СССР-2
СССР-2\t14\t7-Heros\t1-athena\t25-КоролеваСемьи\t19-Retweet\t13-CRYSTAL
NBC\t15\t22-Bansh\t28-Die Hanse\t4-Knight of Knights\t10-Lily\t16-himatsubushi
himatsubushi\t16\t9-CCCP\t3-First Wave\t27-Schriese\t21-Kamigrain\t15-NBC
The LIONS\t17\t24-MUKAKIN-MUGON\t30-pink pirates\t6-Fighter\t12-Belgique\t18-Soul Reapers
Soul Reapers\t18\t11-The Eyrie\t5-Велес\t29-ppmmOmmqq\t23-StormCat\t17-The LIONS
Retweet\t19\t26-ONI SKY\t2-Mattari\t8-Clan Destino\t14-СССР-2\t20-Pif Paf Pouf
Pif Paf Pouf\t20\t13-CRYSTAL\t7-Heros\t1-athena\t25-КоролеваСемьи\t19-Retweet
Kamigrain\t21\t28-Die Hanse\t4-Knight of Knights\t10-Lily\t16-himatsubushi\t22-Bansh
Bansh\t22\t15-NBC\t9-CCCP\t3-First Wave\t27-Schriese\t21-Kamigrain
StormCat\t23\t30-pink pirates\t6-Fighter\t12-Belgique\t18-Soul Reapers\t24-MUKAKIN-MUGON
MUKAKIN-MUGON\t24\t17-The LIONS\t11-The Eyrie\t5-Велес\t29-ppmmOmmqq\t23-StormCat
КоролеваСемьи\t25\t2-Mattari\t8-Clan Destino\t14-СССР-2\t20-Pif Paf Pouf\t26-ONI SKY
ONI SKY\t26\t19-Retweet\t13-CRYSTAL\t7-Heros\t1-athena\t25-КоролеваСемьи
Schriese\t27\t4-Knight of Knights\t10-Lily\t16-himatsubushi\t22-Bansh\t28-Die Hanse
Die Hanse\t28\t21-Kamigrain\t15-NBC\t9-CCCP\t3-First Wave\t27-Schriese
ppmmOmmqq\t29\t6-Fighter\t12-Belgique\t18-Soul Reapers\t24-MUKAKIN-MUGON\t30-pink pirates
pink pirates\t30\t23-StormCat\t17-The LIONS\t11-The Eyrie\t5-Велес\t29-ppmmOmmqq
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
