import styles from './admin.module.css'
import {gql, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";
import SelectTeam from "./select-team";

const handleChange = (e) => console.log(e.target.value)
const AdminOptions = () => {
    const { data} = useQuery(gql`query{team {id name}}`)
    const [teams, setTeams] = useState(null)

    useEffect(() => {
        if (data) {
            setTeams(data.team.map(team => {return {id:team.id, name:team.name}}).sort((a, b) => a.name.localeCompare(b.name)))
        }
    }, [data])


    return (
        <div className={styles.component}>
            <div className={styles.title}>Admin Options</div>
            <SelectTeam teams={teams} label={"Current Team"} change={handleChange}/>
            {/*<label>Current Team:*/}
            {/*    <select onChange={(e) => console.log(e.target.value)}>*/}
            {/*        {teams && teams.map(({id, name}) => <option key={id} value={id}>{name}</option>)}*/}
            {/*    </select></label>*/}

        </div>
    )
}

export default AdminOptions


