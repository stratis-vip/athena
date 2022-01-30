import User from "./user";
import styles from './users.module.css'
import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {gql, useQuery} from "@apollo/client";
import {DateTime} from "luxon";
import {addAllUsers} from "./usersSlice";

const Users = () => {
    // const users = useSelector(state => state.users.users)
    const dispatch = useDispatch()
    const [users, setUsers] = useState(null)
    const [timeUsers, setTimeUsers] = useState([])
    const [noTimeUsers, setNoTimeUsers] = useState([])
    const GET_USERS = gql`
        query{
            users {id name timeZone active}
        }
    `;

    const sortF = (a,b) => {
        return Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"));
    }


    const {loading, error, data} = useQuery(GET_USERS);

    useEffect(() => {
        if (data) {
            if (data.users != null && data.users.length > 0) {
                const users = data.users
                const tUsers = users.map(user => {return {...user, dt:DateTime.utc().setZone(user.timeZone)}})
                const tt = tUsers.filter(user => user.active && !user.archive).sort(sortF)
                console.log('USERS',tUsers)
                setTimeUsers(tt.filter(user => user.timeZone !== "Etc/UTC"))
                setNoTimeUsers(tt.filter(user => user.timeZone === "Etc/UTC"))
                dispatch(addAllUsers(tt))
            }
        }
    }, [data])



    if (loading) return <div>loading...</div>
    if (error) return <div>Error loading data from server.</div>
    if (data) {
        console.log(data.users)
    }


    return (
        <>
            <h2>Time-zone table members</h2>
            <div className={styles.container}>


                <div className={styles.innerContainer}>
                    <h3>With info</h3>

                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>local time</th>
                            <th>war starts</th>

                        </tr>
                        </thead>
                        <tbody>
                        {timeUsers.map((user, index) => <tr className={index % 2 && styles.greyed} key={user.id}>
                            <User
                                user={user}/></tr>)}
                        </tbody>
                    </table>
                </div>
                <div className={styles.innerContainer}>
                    <h3>Without info</h3>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>local time</th>
                            <th>war starts</th>
                        </tr>
                        </thead>
                        <tbody>
                        {noTimeUsers.map((user, index) => <tr className={index % 2 && styles.greyed} key={user.id}>
                            <User user={user}/></tr>)}
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )

}

export default Users
