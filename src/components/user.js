import {DateTime} from "luxon";
import {useEffect, useState} from "react";

const User = ({user, showWarTime}) => {
    const [time, setTime] = useState(DateTime.now())
    const warStart = DateTime.utc().set({hour:9, minute:0, second: 0})

    useEffect(() => {
        let timer = null
        if (time != null) {
            timer = setInterval(() => {
                setTime(DateTime.now())
            }, 1000)
        }

        return () => {
            if (timer !== null) {
                clearInterval(timer)
            }
        }
    }, [time])


    return (
        <>
            <td data-label={"Name"} key={user.key}>{user.name}</td>
            <td data-label={"Local Time"}>{time.setZone(user.timeZone).setLocale(user.locale).toFormat("dd, HH:mm")}</td>
            {showWarTime && <td data-label={"War Starts"}>{warStart.setZone(user.timeZone).toFormat("HH:mm")}</td>}
            {showWarTime && <td data-label={"War Ends"}>{warStart.plus({hours: 11}).setZone(user.timeZone).toFormat("HH:mm")}</td>}
        </>
    )
}

export default User
