import User from "./user";
import styles from './users.module.css'
import {useSelector} from "react-redux";
import {useEffect, useState} from "react";

const Users = () => {
    const users = useSelector(state => state.users.users)
    const [timeUsers, setTimeUsers] = useState([])
    const [noTimeUsers, setNoTimeUsers] = useState([])


    useEffect(() => {
        if (users != null && users.length > 0) {
            setTimeUsers(users.filter(user => user.zone !== "Etc/UTC"))
            setNoTimeUsers(users.filter(user => user.zone === "Etc/UTC"))

        }
    }, [users])


    if (users == null || users.length === 0) {
        return null
    } else {
        return (
            <div className={styles.container}>
                <h2>Time-zone table members</h2>
                <h3>With info</h3>

                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>local time</th>
                        <th>war starts</th>

                    </tr>
                    </thead>
                    <tbody>
                    {timeUsers.map((user, index) => <tr className={index % 2 && styles.greyed} key={user.key}><User
                        user={user}/></tr>)}
                    </tbody>
                </table>

                <h3>Without info</h3>
                <table>
                    <thead>
                    <tr>
                        <th>name</th>
                        <th>local time</th>
                        <th>war starts</th>
                    </tr>
                    </thead>
                    <tbody>
                    {noTimeUsers.map((user, index) => <tr className={index % 2 && styles.greyed} key={user.key}><User user={user}/></tr>)}
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Users
