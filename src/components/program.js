import {useSelector} from "react-redux";
import styles from "./program.module.css"

const Program = ({opponents}) => {
    const teams = useSelector(state => state.teams.teams)

    if (opponents.length === 0) return null

    return <div className={styles.programContainer}>

        <table className={styles.table}>
            <thead>
            <tr>
                <th>Monday</th>
                <th>Tuesday</th>
                <th>Wednesday</th>
                <th>Thursday</th>
                <th>Friday</th>
            </tr>
            </thead>
            <tbody>
            <tr>
                {opponents && opponents.map(index => <td
                    key={teams[index - 1].position}>{teams[index - 1].position} - {teams[index - 1].name}</td>)}
            </tr>
            </tbody>
        </table>

    </div>
}

export default Program
