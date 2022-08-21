import styles from './war.module.css'
import {DateTime} from "luxon";
import {useEffect, useState} from "react";
import {Duration} from "luxon/build/cjs-browser/luxon";
import commonStyles from './common.module.css'
import {useSelector} from "react-redux";
import {getOpponents} from "./teams";

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
        if (promotion && isTimeInWar(currentDate)) {
            state = "inWar"
        }
        return [nextDay.toString(), state]
    }
    //else normal war.
    return [nextDay.toString(), isTimeInWar(currentDate) ? "inWar" : "notInWar"]
}

const getCurrentDay = () => {
    const now = DateTime.local()
    return now.weekday


    //     table {
    //     border-collapse: collapse;
    //     border-spacing: 0;
    //     width: 100%;
    //     border: 1px solid #ddd;
    // }
    //
    // th, td {
    //     text-align: left;
    //     padding: 8px;
    // }
    //
    // }
}

const War = () => {
    const day = getCurrentDay()
    const [nextWar, setNextWar] = useState(null)
    const [state, setState] = useState("init")
    const [remaining, setRemaining] = useState(null)
    const teams = useSelector(state=> state.teams.teams)


    useEffect(() => {
        console.log('Day', getCurrentDay())
        console.log(DateTime.utc(2022, 1, 2, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 2, 11, 0, 0)))
        console.log(DateTime.utc(2022, 1, 1, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 11, 0, 0)))
        console.log(DateTime.utc(2022, 1, 1, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 11, 0, 0), true))
        console.log(DateTime.utc(2022, 1, 1, 7, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 7, 0, 0), true))
        console.log(DateTime.utc(2022, 1, 1, 21, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 1, 21, 0, 0), true))
        console.log(DateTime.utc(2022, 1, 3, 11, 0, 0).toString(), ' -> ', getWhereWeAre(DateTime.utc(2022, 1, 3, 11, 0, 0)))

        console.log('Arxh week', DateTime.utc().startOf('week').toISODate())
    }, [])

    useEffect(() => {
        console.log('STATE:', state)
    }, [state])

    useEffect(() => {
        console.log('REMAINING:', remaining)
    }, [remaining])
    useEffect(() => {
        let int = null
        // const endTime = DateTime.utc().set({hours: 20, minutes: 0, seconds:0, milliseconds: 0})

        if (day && day !== 7) {
            int = setInterval(() => {
                const zita = DateTime.utc().set({hours: 20, minutes: 0, seconds: 0, milliseconds: 0})
                const alfa = DateTime.utc().set({hours: 9, minutes: 0, seconds: 0, milliseconds: 0})
                const nextDay = zita.plus({days: 1}).set({hours: 9, minutes: 0, seconds: 0, milliseconds: 0},)

                if (DateTime.utc() > zita) {
                    //after war
                    // console.log("war is end", nextDay.toString())
                    // console.log(Duration.fromMillis(nextDay - DateTime.utc()).toFormat("hh:mm:ss"))
                    setNextWar(Duration.fromMillis(nextDay - DateTime.utc()).toFormat("hh:mm:ss"))
                    setState("notInWar")
                    setRemaining(null)
                } else {
                    if (DateTime.utc() < alfa) {
                        //before war
                        const dur = alfa - DateTime.utc()
                        setRemaining(dur)
                        setNextWar(Duration.fromMillis(alfa - DateTime.utc()).toFormat("hh:mm:ss"))
                        setState("notInWar")
                    } else {
                        //in war
                        const dur = zita - DateTime.utc()
                        setRemaining(dur)
                        setNextWar(null)
                        setState("onWar")
                    }
                }
            }, 1000)
        }


        return () => {
            if (int !== null) {
                clearInterval(int)
            }
        }
    })

    const getColorCode = () => {

        const rem = Duration.fromMillis(remaining).toMillis() / 1000 / 3600
        if (rem > 8) {
            return styles.green
        }
        if (rem > 6) {
            return styles.blue
        }
        if (rem > 4) {
            return styles.orange
        }
        if (rem > 3) {
            return styles.coral
        }
        if (rem > 2) {
            return styles.red1
        }
        if (rem > 1) {
            return styles.red2
        }
        return styles.red

    }
    return (
        <>
            {nextWar && <h1 style={{color: "red"}}>Next war at {nextWar}</h1>}
            <div>
                {state === "onWar" && remaining != null && (<div>
                    <h1>On war!</h1>
                    <h2>Time remaining: <span
                        className={getColorCode()}>{Duration.fromMillis(remaining).toFormat("hh:mm:ss")}</span></h2>

                </div>)
                }


                <div style={{overflow: "auto"}}>
                    <table className={`${commonStyles.table} ${commonStyles.tableStriped} table-sm`}>
                        <caption className={commonStyles.caption}>Full War Program</caption>
                        <thead className="thead-dark">
                        <tr>
                            <th scope="col">Guild</th>
                            <th scope="col">Pos.</th>
                            <th scope="col"> Monday</th>
                            <th scope="col"> Tuesday</th>
                            <th scope="col"> Wednesday</th>
                            <th scope="col"> Thursday</th>
                            <th scope="col"> Friday</th>
                        </tr>
                        </thead>
                        <tbody>
                        {teams != null && teams.map(team => {

                                const opp = getOpponents(teams, team.position)
                                console.log('IN TABLE', teams[opp[0]-1].name)

                                return (<tr key={team.position}>
                                    <td data-label={"Guild"} style={{fontWeight: "bold", fontSize:"large"}}>{team.name}</td>
                                    <td data-label={"Pos."}>{team.position}</td>
                                    <td data-label={"Monday"}>{teams[opp[0]-1].position}-{teams[opp[0]-1].name}</td>
                                    <td data-label={"Tuesday"}>{teams[opp[1]-1].position}-{teams[opp[1]-1].name}</td>
                                    <td data-label={"Wednesday"}>{teams[opp[2]-1].position}-{teams[opp[2]-1].name}</td>
                                    <td data-label={"Thursday"}>{teams[opp[3]-1].position}-{teams[opp[3]-1].name}</td>
                                    <td data-label={"Friday"}>{teams[opp[4]-1].position}-{teams[opp[4]-1].name}</td>
                                </tr>)
                            }
                        )}

                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default War
