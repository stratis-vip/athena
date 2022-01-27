import styles from './war.module.css'
import {DateTime} from "luxon";
import {useEffect, useState} from "react";
import {Duration} from "luxon/build/cjs-browser/luxon";

const isTimeInWar = (currentDate) => {
    const hour = currentDate.hour
    if (hour > 8 && hour < 20) return true
    return false
}
const getWhereWeAre = (currentDate, promotion = false) => {
    //nextDay is the day of next war
    let nextDay = null

    //what day of the week it is currentDate
    const day = currentDate.weekday
    //if day = 7 (sunday) not in war

    nextDay = currentDate.plus({days: 1}).set({hours: 8, minutes: 0, seconds: 0, milliseconds: 0})
    if (day === 7) {
        return [nextDay.toString(), "notInWar"]
    }
    //if day = 6 (saturday) then in promotion/demotion war
    //TODO add rank

    if (day === 6) {
        nextDay = currentDate.plus({days: 2}).set({hours: 8, minutes: 0, seconds: 0, milliseconds: 0})
        let state = "notInWar"
        if (promotion && isTimeInWar(currentDate)){
            state = "inWar"
        }
        return [nextDay.toString(), state]
    }
    //else normal war.
    return [nextDay.toString(), isTimeInWar(currentDate)?"inWar":"notInWar"]
}

const getCurrentDay = () => {
    const now = DateTime.local()
    return now.weekday
}

const War = () => {
    const [day, setDay] = useState(getCurrentDay())
    const [nextWar, setNextWar] = useState(null)
    const [state, setState] = useState("init")


    useEffect(() => {
        console.log('Day', getCurrentDay())
        console.log(DateTime.utc(2022, 1, 2, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 2, 11, 0, 0)))
        console.log(DateTime.utc(2022, 1, 1, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 11, 0, 0)))
        console.log(DateTime.utc(2022, 1, 1, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 11, 0, 0), true))
        console.log(DateTime.utc(2022, 1, 1, 7, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 7, 0, 0), true))
        console.log(DateTime.utc(2022, 1, 1, 21, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 21, 0, 0), true))
        console.log(DateTime.utc(2022, 1, 3, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 3, 11, 0, 0)))

    }, [])

    useEffect(() => {
        let int = null
        if (day && day !== 7) {
            int = setInterval(() => {
                const zita = DateTime.utc().set({hours: 20, minutes: 0, seconds: 0, milliseconds: 0})
                const nextDay = zita.plus({days: 1}).set({hours: 9, minutes: 0, seconds: 0, milliseconds: 0},)
                if (DateTime.utc() > zita) {
                    // console.log("war is end", nextDay.toString())
                    // console.log(Duration.fromMillis(nextDay - DateTime.utc()).toFormat("hh:mm:ss"))
                    setNextWar(Duration.fromMillis(nextDay - DateTime.utc()).toFormat("hh:mm:ss"))
                } else {
                    setNextWar(null)
                    setState("onWar")
                }
                // console.log(zita.toString())
                // console.log(zita.toLocal().toString())
                console.log(getWhereWeAre(DateTime.utc()))
            }, 1000)
        }

        return () => {
            if (int !== null) {
                clearInterval(int)
            }
        }
    })
    return (
        <>
            {nextWar && <h1 style={{color: "red"}}>Next war at {nextWar}</h1>}
            {state === "onWar" &&
            <div className={styles.bar}>
                <div className={styles.red} style={{height: "0.2rem", width: "8rem"}}></div>
            </div>
            }
        </>
    )
}

export default War
