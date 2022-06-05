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
                        <table _ngcontent-jet-c63="" className="table table-striped table-sm">
                            <thead _ngcontent-jet-c63="" className="thead-dark">
                            <tr _ngcontent-jet-c63="">
                                <th _ngcontent-jet-c63="" scope="col">Guild</th>
                                <th _ngcontent-jet-c63="" scope="col">Pos.</th>
                                <th _ngcontent-jet-c63="" scope="col"> Monday</th>
                                <th _ngcontent-jet-c63="" scope="col"> Tuesday</th>
                                <th _ngcontent-jet-c63="" scope="col"> Wednesday</th>
                                <th _ngcontent-jet-c63="" scope="col"> Thursday</th>
                                <th _ngcontent-jet-c63="" scope="col"> Friday</th>
                                </tr>
                            </thead>
                            <tbody _ngcontent-jet-c63="">
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Fighter</td>
                                <td _ngcontent-jet-c63="">1</td>
                                <td _ngcontent-jet-c63=""> 8-The Eyrie</td>
                                <td _ngcontent-jet-c63=""> 14-Tramps and Thieves</td>
                                <td _ngcontent-jet-c63=""> 20-Soul Reapers</td>
                                <td _ngcontent-jet-c63=""> 26-КоролеваСемьи</td>
                                <td _ngcontent-jet-c63=""> 2-Велес</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Велес</td>
                                <td _ngcontent-jet-c63="">2</td>
                                <td _ngcontent-jet-c63=""> 25-1111</td>
                                <td _ngcontent-jet-c63=""> 19-StormCat</td>
                                <td _ngcontent-jet-c63=""> 13-Stoned Dragon</td>
                                <td _ngcontent-jet-c63=""> 7-CCCP</td>
                                <td _ngcontent-jet-c63=""> 1-Fighter</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Clan Destino</td>
                                <td _ngcontent-jet-c63="">3</td>
                                <td _ngcontent-jet-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-jet-c63=""> 16-Перун</td>
                                <td _ngcontent-jet-c63=""> 22-SKY LORDS</td>
                                <td _ngcontent-jet-c63=""> 28-I FURIANI</td>
                                <td _ngcontent-jet-c63=""> 4-Sax Clan</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Sax Clan</td>
                                <td _ngcontent-jet-c63="">4</td>
                                <td _ngcontent-jet-c63=""> 27-Einfach so</td>
                                <td _ngcontent-jet-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-jet-c63=""> 15-Bansh</td>
                                <td _ngcontent-jet-c63=""> 9-Belgique</td>
                                <td _ngcontent-jet-c63=""> 3-Clan Destino</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Lily</td>
                                <td _ngcontent-jet-c63="">5</td>
                                <td _ngcontent-jet-c63=""> 12-Death or Glory</td>
                                <td _ngcontent-jet-c63=""> 18-ЛЕВ</td>
                                <td _ngcontent-jet-c63=""> 24-Schriese</td>
                                <td _ngcontent-jet-c63=""> 30-Die Hanse</td>
                                <td _ngcontent-jet-c63=""> 6-The LIONS</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">The LIONS</td>
                                <td _ngcontent-jet-c63="">6</td>
                                <td _ngcontent-jet-c63=""> 29-The Dragon Way</td>
                                <td _ngcontent-jet-c63=""> 23-Pif Paf Pouf</td>
                                <td _ngcontent-jet-c63=""> 17-Kamigrain</td>
                                <td _ngcontent-jet-c63=""> 11-CRYSTAL</td>
                                <td _ngcontent-jet-c63=""> 5-Lily</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">CCCP</td>
                                <td _ngcontent-jet-c63="">7</td>
                                <td _ngcontent-jet-c63=""> 14-Tramps and Thieves</td>
                                <td _ngcontent-jet-c63=""> 20-Soul Reapers</td>
                                <td _ngcontent-jet-c63=""> 26-КоролеваСемьи</td>
                                <td _ngcontent-jet-c63=""> 2-Велес</td>
                                <td _ngcontent-jet-c63=""> 8-The Eyrie</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">The Eyrie</td>
                                <td _ngcontent-jet-c63="">8</td>
                                <td _ngcontent-jet-c63=""> 1-Fighter</td>
                                <td _ngcontent-jet-c63=""> 25-1111</td>
                                <td _ngcontent-jet-c63=""> 19-StormCat</td>
                                <td _ngcontent-jet-c63=""> 13-Stoned Dragon</td>
                                <td _ngcontent-jet-c63=""> 7-CCCP</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Belgique</td>
                                <td _ngcontent-jet-c63="">9</td>
                                <td _ngcontent-jet-c63=""> 16-Перун</td>
                                <td _ngcontent-jet-c63=""> 22-SKY LORDS</td>
                                <td _ngcontent-jet-c63=""> 28-I FURIANI</td>
                                <td _ngcontent-jet-c63=""> 4-Sax Clan</td>
                                <td _ngcontent-jet-c63=""> 10-himatsubushi</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">himatsubushi</td>
                                <td _ngcontent-jet-c63="">10</td>
                                <td _ngcontent-jet-c63=""> 3-Clan Destino</td>
                                <td _ngcontent-jet-c63=""> 27-Einfach so</td>
                                <td _ngcontent-jet-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-jet-c63=""> 15-Bansh</td>
                                <td _ngcontent-jet-c63=""> 9-Belgique</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">CRYSTAL</td>
                                <td _ngcontent-jet-c63="">11</td>
                                <td _ngcontent-jet-c63=""> 18-ЛЕВ</td>
                                <td _ngcontent-jet-c63=""> 24-Schriese</td>
                                <td _ngcontent-jet-c63=""> 30-Die Hanse</td>
                                <td _ngcontent-jet-c63=""> 6-The LIONS</td>
                                <td _ngcontent-jet-c63=""> 12-Death or Glory</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Death or Glory</td>
                                <td _ngcontent-jet-c63="">12</td>
                                <td _ngcontent-jet-c63=""> 5-Lily</td>
                                <td _ngcontent-jet-c63=""> 29-The Dragon Way</td>
                                <td _ngcontent-jet-c63=""> 23-Pif Paf Pouf</td>
                                <td _ngcontent-jet-c63=""> 17-Kamigrain</td>
                                <td _ngcontent-jet-c63=""> 11-CRYSTAL</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Stoned Dragon</td>
                                <td _ngcontent-jet-c63="">13</td>
                                <td _ngcontent-jet-c63=""> 20-Soul Reapers</td>
                                <td _ngcontent-jet-c63=""> 26-КоролеваСемьи</td>
                                <td _ngcontent-jet-c63=""> 2-Велес</td>
                                <td _ngcontent-jet-c63=""> 8-The Eyrie</td>
                                <td _ngcontent-jet-c63=""> 14-Tramps and Thieves</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Tramps and Thieves</td>
                                <td _ngcontent-jet-c63="">14</td>
                                <td _ngcontent-jet-c63=""> 7-CCCP</td>
                                <td _ngcontent-jet-c63=""> 1-Fighter</td>
                                <td _ngcontent-jet-c63=""> 25-1111</td>
                                <td _ngcontent-jet-c63=""> 19-StormCat</td>
                                <td _ngcontent-jet-c63=""> 13-Stoned Dragon</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Bansh</td>
                                <td _ngcontent-jet-c63="">15</td>
                                <td _ngcontent-jet-c63=""> 22-SKY LORDS</td>
                                <td _ngcontent-jet-c63=""> 28-I FURIANI</td>
                                <td _ngcontent-jet-c63=""> 4-Sax Clan</td>
                                <td _ngcontent-jet-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-jet-c63=""> 16-Перун</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Перун</td>
                                <td _ngcontent-jet-c63="">16</td>
                                <td _ngcontent-jet-c63=""> 9-Belgique</td>
                                <td _ngcontent-jet-c63=""> 3-Clan Destino</td>
                                <td _ngcontent-jet-c63=""> 27-Einfach so</td>
                                <td _ngcontent-jet-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-jet-c63=""> 15-Bansh</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Kamigrain</td>
                                <td _ngcontent-jet-c63="">17</td>
                                <td _ngcontent-jet-c63=""> 24-Schriese</td>
                                <td _ngcontent-jet-c63=""> 30-Die Hanse</td>
                                <td _ngcontent-jet-c63=""> 6-The LIONS</td>
                                <td _ngcontent-jet-c63=""> 12-Death or Glory</td>
                                <td _ngcontent-jet-c63=""> 18-ЛЕВ</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">ЛЕВ</td>
                                <td _ngcontent-jet-c63="">18</td>
                                <td _ngcontent-jet-c63=""> 11-CRYSTAL</td>
                                <td _ngcontent-jet-c63=""> 5-Lily</td>
                                <td _ngcontent-jet-c63=""> 29-The Dragon Way</td>
                                <td _ngcontent-jet-c63=""> 23-Pif Paf Pouf</td>
                                <td _ngcontent-jet-c63=""> 17-Kamigrain</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">StormCat</td>
                                <td _ngcontent-jet-c63="">19</td>
                                <td _ngcontent-jet-c63=""> 26-КоролеваСемьи</td>
                                <td _ngcontent-jet-c63=""> 2-Велес</td>
                                <td _ngcontent-jet-c63=""> 8-The Eyrie</td>
                                <td _ngcontent-jet-c63=""> 14-Tramps and Thieves</td>
                                <td _ngcontent-jet-c63=""> 20-Soul Reapers</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Soul Reapers</td>
                                <td _ngcontent-jet-c63="">20</td>
                                <td _ngcontent-jet-c63=""> 13-Stoned Dragon</td>
                                <td _ngcontent-jet-c63=""> 7-CCCP</td>
                                <td _ngcontent-jet-c63=""> 1-Fighter</td>
                                <td _ngcontent-jet-c63=""> 25-1111</td>
                                <td _ngcontent-jet-c63=""> 19-StormCat</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">MUKAKIN-MUGON</td>
                                <td _ngcontent-jet-c63="">21</td>
                                <td _ngcontent-jet-c63=""> 28-I FURIANI</td>
                                <td _ngcontent-jet-c63=""> 4-Sax Clan</td>
                                <td _ngcontent-jet-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-jet-c63=""> 16-Перун</td>
                                <td _ngcontent-jet-c63=""> 22-SKY LORDS</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">SKY LORDS</td>
                                <td _ngcontent-jet-c63="">22</td>
                                <td _ngcontent-jet-c63=""> 15-Bansh</td>
                                <td _ngcontent-jet-c63=""> 9-Belgique</td>
                                <td _ngcontent-jet-c63=""> 3-Clan Destino</td>
                                <td _ngcontent-jet-c63=""> 27-Einfach so</td>
                                <td _ngcontent-jet-c63=""> 21-MUKAKIN-MUGON</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Pif Paf Pouf</td>
                                <td _ngcontent-jet-c63="">23</td>
                                <td _ngcontent-jet-c63=""> 30-Die Hanse</td>
                                <td _ngcontent-jet-c63=""> 6-The LIONS</td>
                                <td _ngcontent-jet-c63=""> 12-Death or Glory</td>
                                <td _ngcontent-jet-c63=""> 18-ЛЕВ</td>
                                <td _ngcontent-jet-c63=""> 24-Schriese</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Schriese</td>
                                <td _ngcontent-jet-c63="">24</td>
                                <td _ngcontent-jet-c63=""> 17-Kamigrain</td>
                                <td _ngcontent-jet-c63=""> 11-CRYSTAL</td>
                                <td _ngcontent-jet-c63=""> 5-Lily</td>
                                <td _ngcontent-jet-c63=""> 29-The Dragon Way</td>
                                <td _ngcontent-jet-c63=""> 23-Pif Paf Pouf</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">1111</td>
                                <td _ngcontent-jet-c63="">25</td>
                                <td _ngcontent-jet-c63=""> 2-Велес</td>
                                <td _ngcontent-jet-c63=""> 8-The Eyrie</td>
                                <td _ngcontent-jet-c63=""> 14-Tramps and Thieves</td>
                                <td _ngcontent-jet-c63=""> 20-Soul Reapers</td>
                                <td _ngcontent-jet-c63=""> 26-КоролеваСемьи</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">КоролеваСемьи</td>
                                <td _ngcontent-jet-c63="">26</td>
                                <td _ngcontent-jet-c63=""> 19-StormCat</td>
                                <td _ngcontent-jet-c63=""> 13-Stoned Dragon</td>
                                <td _ngcontent-jet-c63=""> 7-CCCP</td>
                                <td _ngcontent-jet-c63=""> 1-Fighter</td>
                                <td _ngcontent-jet-c63=""> 25-1111</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Einfach so</td>
                                <td _ngcontent-jet-c63="">27</td>
                                <td _ngcontent-jet-c63=""> 4-Sax Clan</td>
                                <td _ngcontent-jet-c63=""> 10-himatsubushi</td>
                                <td _ngcontent-jet-c63=""> 16-Перун</td>
                                <td _ngcontent-jet-c63=""> 22-SKY LORDS</td>
                                <td _ngcontent-jet-c63=""> 28-I FURIANI</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">I FURIANI</td>
                                <td _ngcontent-jet-c63="">28</td>
                                <td _ngcontent-jet-c63=""> 21-MUKAKIN-MUGON</td>
                                <td _ngcontent-jet-c63=""> 15-Bansh</td>
                                <td _ngcontent-jet-c63=""> 9-Belgique</td>
                                <td _ngcontent-jet-c63=""> 3-Clan Destino</td>
                                <td _ngcontent-jet-c63=""> 27-Einfach so</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">The Dragon Way</td>
                                <td _ngcontent-jet-c63="">29</td>
                                <td _ngcontent-jet-c63=""> 6-The LIONS</td>
                                <td _ngcontent-jet-c63=""> 12-Death or Glory</td>
                                <td _ngcontent-jet-c63=""> 18-ЛЕВ</td>
                                <td _ngcontent-jet-c63=""> 24-Schriese</td>
                                <td _ngcontent-jet-c63=""> 30-Die Hanse</td>
                                </tr>
                            <tr _ngcontent-jet-c63="">
                                <td _ngcontent-jet-c63="">Die Hanse</td>
                                <td _ngcontent-jet-c63="">30</td>
                                <td _ngcontent-jet-c63=""> 23-Pif Paf Pouf</td>
                                <td _ngcontent-jet-c63=""> 17-Kamigrain</td>
                                <td _ngcontent-jet-c63=""> 11-CRYSTAL</td>
                                <td _ngcontent-jet-c63=""> 5-Lily</td>
                                <td _ngcontent-jet-c63=""> 29-The Dragon Way</td>
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
