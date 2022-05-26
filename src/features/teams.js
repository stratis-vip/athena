import styles from './users.module.css'
import commonStyles from '../components/common.module.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";
import Program from "../components/program";
import War from "../components/war";

export const getOpponents = (teams, teamPosition) => {

    const team = teams[teamPosition - 1]
    console.log(teams[teamPosition - 1])
    //is even
    const opponents = []
    const position = team.position
    if (team.league == "Bronze") {
        if (teamPosition % 2 !== 0) {
            let next = position + 7;
            if (next > 30) {
                next -= 30;
            }
            for (let i = 0; i < 5; ++i) {
                opponents.push(next)
                next = next + 6;
                if (next > 30) {
                    next -= 30;
                }

            }


        } else {
            let next = position - 7;
            if (next < 0) {
                next += 30;
            }
            for (let i = 0; i < 5; ++i) {
                opponents.push(next)
                next = next - 6;
                if (next < 0) {
                    next += 30;
                }
            }
        }
    } else { //Silver
        debugger
        if (teamPosition % 2 !== 0) {
            let next = position + 3;
            if (next > 10) {
                next -= 10;
            }
            for (let i = 0; i < 5; ++i) {
                opponents.push(next)
                next = next + 2;
                if (next > 10) {
                    next -= 10;
                }

            }


        } else {
            let next = position - 3;
            if (next < 0) {
                next += 10;
            }
            for (let i = 0; i < 5; ++i) {
                opponents.push(next)
                next = next - 2;
                if (next < 0) {
                    next += 10;
                }
            }
        }
    }
    return opponents
}
const Teams = () => {
    const teams = useSelector(state => state.teams.teams)
    // const [teams, setTeams] = useState(null)
    const [cTeam, setCTeam] = useState(0)
    const [warOpponents, setWarOpponents] = useState([])


    useEffect(() => {
        if (cTeam > 0) {
            setWarOpponents(getOpponents(teams, cTeam))
        } else {
            setWarOpponents([])

        }
    }, [cTeam])
    // useEffect(()=>{
    //     if (!teams){
    //         if (warObj.answer){
    //             setTeams(warObj.data.filter(team => team.league === "Bronze"))
    //             console.log('WAROBJ =>' ,warObj.data.filter(team => team.league === "Bronze"))
    //         }
    // }
    //
    // },[teams])

    if (teams == null) {
        return null
    } else {
        return (

            <div className={commonStyles.container}>
                <div>


                    <div className={styles.container}>
                        <div className={styles.programContainer}>

                            <label className={styles.select}>Guild's: <select className={styles.select}
                                                                              onChange={(e) => setCTeam(e.target.value)}>
                                <option value={0} key={0}>Select team</option>
                                {teams.map(team => <option value={team.position}
                                                           key={team.position}> {team.position} - {team.name} </option>)}
                            </select> war program</label>

                            {cTeam > 0 && <Program opponents={warOpponents}/>}
                        </div>
                    </div>
                    <War/>
                </div>
                <div style={{marginTop: "5rem"}}>
                    <div className={styles.programContainer}>
                        <div style={{marginBottom: "2rem"}}><h1>Bronze league</h1></div>
                        <table _ngcontent-mnm-c63="" className="table table-striped table-sm">
                            <thead _ngcontent-mnm-c63="" className="thead-dark">
                            <tr _ngcontent-mnm-c63="">
                                <th _ngcontent-mnm-c63="" scope="col">Guild</th>
                                <th _ngcontent-mnm-c63="" scope="col">Pos.</th>
                                <th _ngcontent-mnm-c63="" scope="col"> Monday</th>
                                <th _ngcontent-mnm-c63="" scope="col"> Tuesday</th>
                                <th _ngcontent-mnm-c63="" scope="col"> Wednesday</th>
                                <th _ngcontent-mnm-c63="" scope="col"> Thursday</th>
                                <th _ngcontent-mnm-c63="" scope="col"> Friday</th>
                            </tr>
                            </thead>
                            <tbody _ngcontent-mnm-c63="">
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">First Wave</td>
                                <td _ngcontent-mnm-c63="">1</td>
                                <td _ngcontent-mnm-c63=""> 8-CCCP</td>
                                <td _ngcontent-mnm-c63=""> 14-Stoned Dragon</td>
                                <td _ngcontent-mnm-c63=""> 20-Kamigrain</td>
                                <td _ngcontent-mnm-c63=""> 26-Pif Paf Pouf</td>
                                <td _ngcontent-mnm-c63=""> 2-Mattari</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Mattari</td>
                                <td _ngcontent-mnm-c63="">2</td>
                                <td _ngcontent-mnm-c63=""> 25-ЛЕВ</td>
                                <td _ngcontent-mnm-c63=""> 19-Перун</td>
                                <td _ngcontent-mnm-c63=""> 13-CRYSTAL</td>
                                <td _ngcontent-mnm-c63=""> 7-Lily</td>
                                <td _ngcontent-mnm-c63=""> 1-First Wave</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">athena</td>
                                <td _ngcontent-mnm-c63="">3</td>
                                <td _ngcontent-mnm-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-mnm-c63=""> 16-Death or Glory</td>
                                <td _ngcontent-mnm-c63=""> 22-StormCat</td>
                                <td _ngcontent-mnm-c63=""> 28-ppmmOmmqq</td>
                                <td _ngcontent-mnm-c63=""> 4-Clan Destino</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Clan Destino</td>
                                <td _ngcontent-mnm-c63="">4</td>
                                <td _ngcontent-mnm-c63=""> 27-Die Hanse</td>
                                <td _ngcontent-mnm-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-mnm-c63=""> 15-NBC</td>
                                <td _ngcontent-mnm-c63=""> 9-Belgique</td>
                                <td _ngcontent-mnm-c63=""> 3-athena</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Sax Clan</td>
                                <td _ngcontent-mnm-c63="">5</td>
                                <td _ngcontent-mnm-c63=""> 12-The LIONS</td>
                                <td _ngcontent-mnm-c63=""> 18-Bansh</td>
                                <td _ngcontent-mnm-c63=""> 24-КоролеваСемьи</td>
                                <td _ngcontent-mnm-c63=""> 30-I FURIANI</td>
                                <td _ngcontent-mnm-c63=""> 6-Heros</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Heros</td>
                                <td _ngcontent-mnm-c63="">6</td>
                                <td _ngcontent-mnm-c63=""> 29-La 42 eme</td>
                                <td _ngcontent-mnm-c63=""> 23-Schriese</td>
                                <td _ngcontent-mnm-c63=""> 17-Soul Reapers</td>
                                <td _ngcontent-mnm-c63=""> 11-The Eyrie</td>
                                <td _ngcontent-mnm-c63=""> 5-Sax Clan</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Lily</td>
                                <td _ngcontent-mnm-c63="">7</td>
                                <td _ngcontent-mnm-c63=""> 14-Stoned Dragon</td>
                                <td _ngcontent-mnm-c63=""> 20-Kamigrain</td>
                                <td _ngcontent-mnm-c63=""> 26-Pif Paf Pouf</td>
                                <td _ngcontent-mnm-c63=""> 2-Mattari</td>
                                <td _ngcontent-mnm-c63=""> 8-CCCP</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">CCCP</td>
                                <td _ngcontent-mnm-c63="">8</td>
                                <td _ngcontent-mnm-c63=""> 1-First Wave</td>
                                <td _ngcontent-mnm-c63=""> 25-ЛЕВ</td>
                                <td _ngcontent-mnm-c63=""> 19-Перун</td>
                                <td _ngcontent-mnm-c63=""> 13-CRYSTAL</td>
                                <td _ngcontent-mnm-c63=""> 7-Lily</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Belgique</td>
                                <td _ngcontent-mnm-c63="">9</td>
                                <td _ngcontent-mnm-c63=""> 16-Death or Glory</td>
                                <td _ngcontent-mnm-c63=""> 22-StormCat</td>
                                <td _ngcontent-mnm-c63=""> 28-ppmmOmmqq</td>
                                <td _ngcontent-mnm-c63=""> 4-Clan Destino</td>
                                <td _ngcontent-mnm-c63=""> 10-himatsubushi</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">himatsubushi</td>
                                <td _ngcontent-mnm-c63="">10</td>
                                <td _ngcontent-mnm-c63=""> 3-athena</td>
                                <td _ngcontent-mnm-c63=""> 27-Die Hanse</td>
                                <td _ngcontent-mnm-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-mnm-c63=""> 15-NBC</td>
                                <td _ngcontent-mnm-c63=""> 9-Belgique</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">The Eyrie</td>
                                <td _ngcontent-mnm-c63="">11</td>
                                <td _ngcontent-mnm-c63=""> 18-Bansh</td>
                                <td _ngcontent-mnm-c63=""> 24-КоролеваСемьи</td>
                                <td _ngcontent-mnm-c63=""> 30-I FURIANI</td>
                                <td _ngcontent-mnm-c63=""> 6-Heros</td>
                                <td _ngcontent-mnm-c63=""> 12-The LIONS</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">The LIONS</td>
                                <td _ngcontent-mnm-c63="">12</td>
                                <td _ngcontent-mnm-c63=""> 5-Sax Clan</td>
                                <td _ngcontent-mnm-c63=""> 29-La 42 eme</td>
                                <td _ngcontent-mnm-c63=""> 23-Schriese</td>
                                <td _ngcontent-mnm-c63=""> 17-Soul Reapers</td>
                                <td _ngcontent-mnm-c63=""> 11-The Eyrie</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">CRYSTAL</td>
                                <td _ngcontent-mnm-c63="">13</td>
                                <td _ngcontent-mnm-c63=""> 20-Kamigrain</td>
                                <td _ngcontent-mnm-c63=""> 26-Pif Paf Pouf</td>
                                <td _ngcontent-mnm-c63=""> 2-Mattari</td>
                                <td _ngcontent-mnm-c63=""> 8-CCCP</td>
                                <td _ngcontent-mnm-c63=""> 14-Stoned Dragon</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Stoned Dragon</td>
                                <td _ngcontent-mnm-c63="">14</td>
                                <td _ngcontent-mnm-c63=""> 7-Lily</td>
                                <td _ngcontent-mnm-c63=""> 1-First Wave</td>
                                <td _ngcontent-mnm-c63=""> 25-ЛЕВ</td>
                                <td _ngcontent-mnm-c63=""> 19-Перун</td>
                                <td _ngcontent-mnm-c63=""> 13-CRYSTAL</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">NBC</td>
                                <td _ngcontent-mnm-c63="">15</td>
                                <td _ngcontent-mnm-c63=""> 22-StormCat</td>
                                <td _ngcontent-mnm-c63=""> 28-ppmmOmmqq</td>
                                <td _ngcontent-mnm-c63=""> 4-Clan Destino</td>
                                <td _ngcontent-mnm-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-mnm-c63=""> 16-Death or Glory</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Death or Glory</td>
                                <td _ngcontent-mnm-c63="">16</td>
                                <td _ngcontent-mnm-c63=""> 9-Belgique</td>
                                <td _ngcontent-mnm-c63=""> 3-athena</td>
                                <td _ngcontent-mnm-c63=""> 27-Die Hanse</td>
                                <td _ngcontent-mnm-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-mnm-c63=""> 15-NBC</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Soul Reapers</td>
                                <td _ngcontent-mnm-c63="">17</td>
                                <td _ngcontent-mnm-c63=""> 24-КоролеваСемьи</td>
                                <td _ngcontent-mnm-c63=""> 30-I FURIANI</td>
                                <td _ngcontent-mnm-c63=""> 6-Heros</td>
                                <td _ngcontent-mnm-c63=""> 12-The LIONS</td>
                                <td _ngcontent-mnm-c63=""> 18-Bansh</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Bansh</td>
                                <td _ngcontent-mnm-c63="">18</td>
                                <td _ngcontent-mnm-c63=""> 11-The Eyrie</td>
                                <td _ngcontent-mnm-c63=""> 5-Sax Clan</td>
                                <td _ngcontent-mnm-c63=""> 29-La 42 eme</td>
                                <td _ngcontent-mnm-c63=""> 23-Schriese</td>
                                <td _ngcontent-mnm-c63=""> 17-Soul Reapers</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Перун</td>
                                <td _ngcontent-mnm-c63="">19</td>
                                <td _ngcontent-mnm-c63=""> 26-Pif Paf Pouf</td>
                                <td _ngcontent-mnm-c63=""> 2-Mattari</td>
                                <td _ngcontent-mnm-c63=""> 8-CCCP</td>
                                <td _ngcontent-mnm-c63=""> 14-Stoned Dragon</td>
                                <td _ngcontent-mnm-c63=""> 20-Kamigrain</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Kamigrain</td>
                                <td _ngcontent-mnm-c63="">20</td>
                                <td _ngcontent-mnm-c63=""> 13-CRYSTAL</td>
                                <td _ngcontent-mnm-c63=""> 7-Lily</td>
                                <td _ngcontent-mnm-c63=""> 1-First Wave</td>
                                <td _ngcontent-mnm-c63=""> 25-ЛЕВ</td>
                                <td _ngcontent-mnm-c63=""> 19-Перун</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">MUKAKIN-MUGON</td>
                                <td _ngcontent-mnm-c63="">21</td>
                                <td _ngcontent-mnm-c63=""> 28-ppmmOmmqq</td>
                                <td _ngcontent-mnm-c63=""> 4-Clan Destino</td>
                                <td _ngcontent-mnm-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-mnm-c63=""> 16-Death or Glory</td>
                                <td _ngcontent-mnm-c63=""> 22-StormCat</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">StormCat</td>
                                <td _ngcontent-mnm-c63="">22</td>
                                <td _ngcontent-mnm-c63=""> 15-NBC</td>
                                <td _ngcontent-mnm-c63=""> 9-Belgique</td>
                                <td _ngcontent-mnm-c63=""> 3-athena</td>
                                <td _ngcontent-mnm-c63=""> 27-Die Hanse</td>
                                <td _ngcontent-mnm-c63=""> 21-MUKAKIN-MUGON</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Schriese</td>
                                <td _ngcontent-mnm-c63="">23</td>
                                <td _ngcontent-mnm-c63=""> 30-I FURIANI</td>
                                <td _ngcontent-mnm-c63=""> 6-Heros</td>
                                <td _ngcontent-mnm-c63=""> 12-The LIONS</td>
                                <td _ngcontent-mnm-c63=""> 18-Bansh</td>
                                <td _ngcontent-mnm-c63=""> 24-КоролеваСемьи</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">КоролеваСемьи</td>
                                <td _ngcontent-mnm-c63="">24</td>
                                <td _ngcontent-mnm-c63=""> 17-Soul Reapers</td>
                                <td _ngcontent-mnm-c63=""> 11-The Eyrie</td>
                                <td _ngcontent-mnm-c63=""> 5-Sax Clan</td>
                                <td _ngcontent-mnm-c63=""> 29-La 42 eme</td>
                                <td _ngcontent-mnm-c63=""> 23-Schriese</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">ЛЕВ</td>
                                <td _ngcontent-mnm-c63="">25</td>
                                <td _ngcontent-mnm-c63=""> 2-Mattari</td>
                                <td _ngcontent-mnm-c63=""> 8-CCCP</td>
                                <td _ngcontent-mnm-c63=""> 14-Stoned Dragon</td>
                                <td _ngcontent-mnm-c63=""> 20-Kamigrain</td>
                                <td _ngcontent-mnm-c63=""> 26-Pif Paf Pouf</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Pif Paf Pouf</td>
                                <td _ngcontent-mnm-c63="">26</td>
                                <td _ngcontent-mnm-c63=""> 19-Перун</td>
                                <td _ngcontent-mnm-c63=""> 13-CRYSTAL</td>
                                <td _ngcontent-mnm-c63=""> 7-Lily</td>
                                <td _ngcontent-mnm-c63=""> 1-First Wave</td>
                                <td _ngcontent-mnm-c63=""> 25-ЛЕВ</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">Die Hanse</td>
                                <td _ngcontent-mnm-c63="">27</td>
                                <td _ngcontent-mnm-c63=""> 4-Clan Destino</td>
                                <td _ngcontent-mnm-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-mnm-c63=""> 16-Death or Glory</td>
                                <td _ngcontent-mnm-c63=""> 22-StormCat</td>
                                <td _ngcontent-mnm-c63=""> 28-ppmmOmmqq</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">ppmmOmmqq</td>
                                <td _ngcontent-mnm-c63="">28</td>
                                <td _ngcontent-mnm-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-mnm-c63=""> 15-NBC</td>
                                <td _ngcontent-mnm-c63=""> 9-Belgique</td>
                                <td _ngcontent-mnm-c63=""> 3-athena</td>
                                <td _ngcontent-mnm-c63=""> 27-Die Hanse</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">La 42 eme</td>
                                <td _ngcontent-mnm-c63="">29</td>
                                <td _ngcontent-mnm-c63=""> 6-Heros</td>
                                <td _ngcontent-mnm-c63=""> 12-The LIONS</td>
                                <td _ngcontent-mnm-c63=""> 18-Bansh</td>
                                <td _ngcontent-mnm-c63=""> 24-КоролеваСемьи</td>
                                <td _ngcontent-mnm-c63=""> 30-I FURIANI</td>
                            </tr>
                            <tr _ngcontent-mnm-c63="">
                                <td _ngcontent-mnm-c63="">I FURIANI</td>
                                <td _ngcontent-mnm-c63="">30</td>
                                <td _ngcontent-mnm-c63=""> 23-Schriese</td>
                                <td _ngcontent-mnm-c63=""> 17-Soul Reapers</td>
                                <td _ngcontent-mnm-c63=""> 11-The Eyrie</td>
                                <td _ngcontent-mnm-c63=""> 5-Sax Clan</td>
                                <td _ngcontent-mnm-c63=""> 29-La 42 eme</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>

        )
    }
}

export default Teams
