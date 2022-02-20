import styles from './users.module.css'
import commonStyles from '../components/common.module.css'
import {useSelector} from "react-redux";
// import {useEffect, useState} from "react";
// import Program from "../components/program";
import War from "../components/war";

const Teams = () => {
    const teams = useSelector(state => state.teams.teams)
    // const [cTeam, setCTeam] = useState(0)
    // const [warOpponents, setWarOpponents] = useState([])


    // useEffect(() => {
    //     if (cTeam > 0) {
    //         const team = teams[cTeam - 1]
    //         console.log(teams[cTeam - 1])
    //         //is even
    //         const opponents = []
    //         const position = team.position
    //         if (cTeam % 2 !== 0) {
    //             let next = position + 7;
    //             if (next > 30) {
    //                 next -= 30;
    //             }
    //             for (let i = 0; i < 5; ++i) {
    //                 opponents.push(next)
    //                 next = next + 6;
    //                 if (next > 30) {
    //                     next -= 30;
    //                 }
    //
    //             }
    //
    //
    //         } else {
    //             let next = position - 7;
    //             if (next < 0) {
    //                 next += 30;
    //             }
    //             for (let i = 0; i < 5; ++i) {
    //                 opponents.push(next)
    //                 next = next - 6;
    //                 if (next < 0) {
    //                     next += 30;
    //                 }
    //             }
    //         }
    //         setWarOpponents(opponents)
    //         console.log(opponents)
    //     } else {
    //         setWarOpponents([])
    //     }
    // }, [cTeam])
    if (teams == null) {
        return null
    } else {
        return (

            <div className={commonStyles.container}>
                <div>
                    <War/>

                    {/*<div className={styles.container}>*/}
                    {/*    <div className={styles.programContainer}>*/}

                    {/*        <select className={styles.select} onChange={(e) => setCTeam(e.target.value)}>*/}
                    {/*            <option value={0} key={0}>Select team</option>*/}
                    {/*            {teams.map(team => <option value={team.position}*/}
                    {/*                                       key={team.position}> {team.position} - {team.name} </option>)}*/}
                    {/*        </select>*/}

                    {/*        {cTeam > 0 && <Program opponents={warOpponents}/>}*/}
                    {/*    </div>*/}
                    {/*</div>*/}
                </div>
            </div>

        )
    }
}

export default Teams
