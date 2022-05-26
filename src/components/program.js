import {useSelector} from "react-redux";
import styles from "./program.module.css"
import {useEffect} from "react";

const Program = ({opponents}) => {
    const teams = useSelector(state => state.teams.teams)


    if (opponents.length === 0) return null

    return <div className={styles.master_container}>
        <div className={styles.container}>

            {["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"].map(
                (number, ind) => (
                    <div key={ind} className={`${styles.cell} ${styles.header}`}>
                        {number}
                    </div>
                )
            )}

            {opponents && opponents.map(index => <div key={teams[index - 1].position}
                                                       className={styles.cell}>{teams[index - 1].position} - {teams[index - 1].name}</div>)}


        </div>



    </div>
}

export default Program
