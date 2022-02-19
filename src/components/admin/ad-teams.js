import styles from './admin.module.css'
import SelectTeam from "./select-team";
import {gql, useMutation, useQuery} from "@apollo/client";
import {useEffect, useState} from "react";

const AdminTeams = () => {
    const {loading, data, error, refetch} = useQuery(gql`query{team {id name}}`)
    const [teams, setTeams] = useState(null)
    const [currentTeam, setCurrentTeam] = useState(null)
    const [teamToAdd, setTeamToAdd] = useState("")
    const [errorInAddTeam, setErrorInAddTeam] = useState({value: false})

    const [addTeam, mutationAddTeam] = useMutation(
        gql`mutation AddTeam( $team: TeamInput!) {addTeam(team: $team) {id}}`,
        {
            variables: {
                team: {
                    name: teamToAdd
                }
            },
            onCompleted: async (data) =>{
                try {
                    await refetch()
                    alert(`${teamToAdd} successfully added!`)
                    setCurrentTeam(data.addTeam.id)
                    setTeamToAdd("")
                } catch (e) {
                    setErrorInAddTeam({value: true, text: e.error})
                }

            }
        }
    )

    const [deleteTeam, mutationDeleteTeam] = useMutation(
        gql`mutation DeleteTeam( $deleteTeamId: ID!) {deleteTeam(id: $deleteTeamId) {id name}}`,
        {
            variables: {
                deleteTeamId: currentTeam
            },
            onCompleted: async (data) =>{
                try {
                    await refetch()
                    alert(`${data.deleteTeam.name} successfully deleted!`)
                } catch (e) {
                    setErrorInAddTeam({value: true, text: e.error})
                }

            }
        }
    )

    const change = (e) => {
        console.log(e.target.value)
        setCurrentTeam(e.target.value)
    }

    useEffect(() => {
        if (data) {
            console.log(data)
            setTeams(data.team.map(team => {return {id:team.id, name:team.name}}).sort((a, b) => a.name.localeCompare(b.name))
        )
            setCurrentTeam(data.team[0].id)
        }
    }, [data])

    const checkIfExists = (teamToCheck) => {

        if (!teams) return false
        if (teams.length === 0 ) return false
        const f = teams.filter(team => team.name.toLowerCase() === teamToCheck.toLowerCase())

        return  f.length > 0
    }

    const clickAction = async (e) => {
        if (!errorInAddTeam.value) {
            try{
                await addTeam()
                console.log(`added team ${teamToAdd}`)
            }catch(e){
                console.error(e)
            }
        }
        console.log('Add tema click Action. Team to Add: ', teamToAdd, checkIfExists(teamToAdd))
    }

    const changeAction = (e) => {
        const val = e.target.value
        if (val.length > 2) {
            if (checkIfExists(val)) {
                setErrorInAddTeam({value: true, text: `Team "${val}" exists`})
            } else {
                if (errorInAddTeam.value) {
                    setErrorInAddTeam({value: false})
                }
            }
        }else {
            setErrorInAddTeam({value: true, text: "Team name must be over 2 characters long"})
        }
       setTeamToAdd(e.target.value)
    }


    const deleteAction = () => {
        deleteTeam()
    }

    if (mutationAddTeam.error) { console.log(mutationAddTeam.error)}

    return (
        <div className={styles.component}>
            <div className={styles.title}> Admin {teams != null && teams.length} Teams</div>
            {teams &&
            <div className={styles.div}>
                <SelectTeam value={currentTeam} teams={teams} change={change} label={""}/>
                <button className={styles.select} onClick={deleteAction}>Delete {teams.filter(t => t.id === currentTeam)[0].name}</button>
            </div>}
            <div>
                <input className={styles.select} value={teamToAdd} onChange={changeAction}/>
                <button className={styles.select} onClick={clickAction} disabled={errorInAddTeam.value || teamToAdd.length < 3}>Add Team</button>
                <label hidden={!errorInAddTeam.value} className={styles.error}>{errorInAddTeam.text}</label>
            </div>

        </div>
    )
}

export default AdminTeams
