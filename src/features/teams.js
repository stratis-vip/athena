import styles from './users.module.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Teams = () => {
    const teams = useSelector(state => state.teams.teams)
    const [cTeam, setCTeam] = useState(0)


    useEffect(() => {
        if (cTeam >0){
            const team = teams[cTeam -1]
            console.log(teams[cTeam - 1])
            //is even
            if (cTeam % 2 !== 0){
                let position = team.position

            }
        }

    }, [cTeam])
    if (teams == null) {
        return null
    } else {
        return (
            <>
                <h3 className={styles.title}>War program (under construction)</h3>
                <select onChange={(e) => setCTeam(e.target.value)}>
                    <option value={0} key={0}>Select team</option>
                    {teams.map(team => <option value={team.position}
                                               key={team.position}> {team.position} - {team.name} </option>)}
                </select>
                {cTeam > 0 && <div>
                    Program for {teams[cTeam - 1].name} will shown here.
                </div>}
            </>
        )
    }
}

export default Teams
