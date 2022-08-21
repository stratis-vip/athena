import {DateTime} from "luxon";
import {useEffect, useState} from "react";

const User = ({user, showWarTime}) => {
    const [time, setTime] = useState(DateTime.now())
    // const [locStart, setLocStart] = useState(null)
    // const [locEnd, setLocEnd] = useState(null)
    // const loc = DateTime.now().set({hour: user.times.start.hour | 0, minutes: user.times.start.minutes | 0})
    const warStart = DateTime.utc().set({hour:9, minute:0, second: 0})
    // useEffect(()=>{
    //     console.log('War', warStart.toString())
    // },[])
    //

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

    // useEffect(() => {
    //     if (user.times != null) {
    //         setLocStart(DateTime.now().setLocale(user.locale).set({
    //             hour: user.times.start.hour,
    //             minutes: user.times.start.minutes
    //         }))
    //
    //         setLocEnd(DateTime.now().setLocale(user.locale).set({
    //             hour: user.times.end.hour,
    //             minutes: user.times.end.minutes
    //         }))
    //     }
    //
    //
    // }, [user])

    return (
        <>
            <td data-label={"Name"} key={user.key}>{user.name}</td>
            <td data-label={"Local Time"}>{time.setZone(user.timeZone).setLocale(user.locale).toFormat("dd, HH:mm")}</td>
            {/*<td>{user.zone}</td>*/}
            {/*{locStart && <>*/}
            {showWarTime && <td data-label={"War Starts"}>{warStart.setZone(user.timeZone).toFormat("HH:mm")}</td>}
            {showWarTime && <td data-label={"War Ends"}>{warStart.plus({hours: 11}).setZone(user.timeZone).toFormat("HH:mm")}</td>}
            {/*    <td>{locEnd.toFormat("HH:mm")}</td>*/}
            {/*    /!*<td>{loc.setZone(user.zone).setLocale(user.locale).toLocaleString(DateTime.TIME_SIMPLE)}</td>*!/*/}
            {/*</>}*/}
        </>
    )
}

export default User