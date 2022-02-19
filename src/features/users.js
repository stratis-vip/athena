import User from "./user";
import styles from './users.module.css'
import { useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {DateTime} from "luxon";


const Users = () => {
    const users = useSelector(state => state.users.users)
    const [timeUsers, setTimeUsers] = useState([])
    const [noTimeUsers, setNoTimeUsers] = useState([])
    const [showWarTime, setShowWarTime] = useState(null)

    const sortF = (a,b) => {
        return Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"));
    }

    const handleCheckChange = (e) => {
        setShowWarTime(e.target.checked)
        localStorage.setItem("showWarTime", e.target.checked === true? "true":"false")
    }

    useEffect(()=>{
        if( showWarTime == null){
            const showWarTimeFromLocalStorage = localStorage.getItem("showWarTime")
            if (showWarTimeFromLocalStorage != null){
                console.log('local Store', showWarTimeFromLocalStorage)
                setShowWarTime(showWarTimeFromLocalStorage === "false" ? false : true)
            }else{
                localStorage.setItem("showWarTime", "false")
                setShowWarTime(false)
            }

        }

    }, [showWarTime])
    useEffect(() => {
        if (users) {
            if (users != null && users.length > 0) {
                const tUsers = users.map(user => {return {...user, dt:DateTime.utc().setZone(user.timeZone)}})
                const tt = tUsers.filter(user => user.active && !user.archive).sort(sortF)
                setTimeUsers(tt.filter(user => user.timeZone !== "Etc/UTC"))
                setNoTimeUsers(tt.filter(user => user.timeZone === "Etc/UTC"))
            }
        }
    }, [users])


    return (
        <div className={styles.usersContainer}>
            <h2>Time-zone table members</h2>
            <label><input type={"checkbox"} checked={showWarTime} onChange={handleCheckChange}/>Show War starting/finishing time </label>
            <div className={styles.container}>
                <div className={styles.innerContainer}>
                    <h3>With info</h3>
                    <table className={styles.table}>
                        <thead>
                        <tr>
                            <th>name</th>
                            <th>local time</th>
                            {showWarTime && <th>war starts</th>}
                            {showWarTime && <th>war ends</th>}
                        </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                        {timeUsers.map((user, index) => <tr className={index % 2 && styles.greyed} key={user.id}>
                            <User user={user} showWarTime={showWarTime}/></tr>)}
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
                            {showWarTime && <th>war starts</th>}
                            {showWarTime && <th>war ends</th>}
                        </tr>
                        </thead>
                        <tbody className={styles.tbody}>
                        {noTimeUsers.map((user, index) => <tr className={index % 2 && styles.greyed} key={user.id}>
                            <User user={user} showWarTime={showWarTime}/></tr>)}
                        </tbody>
                    </table>
                </div>

            </div>
        </div>
    )

}

export default Users
