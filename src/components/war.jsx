import styles from './war.module.css'
import {DateTime} from "luxon";
import {useEffect, useState} from "react";
import {Duration} from "luxon/build/cjs-browser/luxon";

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
