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

                            <label className={styles.select}>Guild's: <select className={styles.select} onChange={(e) => setCTeam(e.target.value)}>
                                <option value={0} key={0}>Select team</option>
                                {teams.map(team => <option value={team.position}
                                                           key={team.position}> {team.position} - {team.name} </option>)}
                            </select> war program</label>

                            {cTeam > 0 && <Program opponents={warOpponents}/>}
                        </div>
                    </div>
                    <War/>
                </div>
            </div>

        )
    }
}

export default Teams
