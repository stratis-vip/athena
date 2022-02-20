import styles from './war.module.css'
import {DateTime} from "luxon";
import {useEffect, useState} from "react";
import {Duration} from "luxon/build/cjs-browser/luxon";
import commonStyles from './common.module.css'
import {coreModule} from "@reduxjs/toolkit/query";
// const total = 10 * 3600 * 1000
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
                        <caption className={commonStyles.caption}>War Program</caption>
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
                        <tr className={styles.currentTeam}>
                            <td data-label={"Guild"}>athena</td>
                            <td data-label={"Pos."}>1</td>
                            <td data-label={"Monday"}>8-Велес</td>
                            <td data-label={"Tuesday"}>14-Soul Reapers</td>
                            <td data-label={"Wednesday"}>20-ЛЕВ</td>
                            <td data-label={"Thursday"}>26-Pif Paf Pouf</td>
                            <td data-label={"Friday"}>2-The Eyrie</td>
                        </tr>
                        <tr>
                            <td data-label={"Guild"}>The Eyrie</td>
                            <td data-label={"Pos."}>2</td>
                            <td data-label={"Monday"}>25-The LIONS</td>
                            <td data-label={"Tuesday"}>19-Kamigrain</td>
                            <td data-label={""}>13-NBC</td>
                            <td data-label={""}>7-Heros</td>
                            <td data-label={""}>1-athena</td>
                        </tr>
                        <tr>
                            <td data-label={"Guild"}>Lily</td>
                            <td>3</td>
                            <td data-label={""}>10-CCCP</td>
                            <td data-label={""}>16-CRYSTAL</td>
                            <td data-label={"Tuesday"}>22-Schriese</td>
                            <td data-label={""}>28-Die Hanse</td>
                            <td data-label={""}>4-Knight of Knights</td>
                        </tr>
                        <tr>
                            <td data-label={"Guild"}>Knight of Knights</td>
                            <td>4</td>
                            <td data-label={""}>27-ONI SKY</td>
                            <td data-label={""}>21-StormCat</td>
                            <td data-label={""}>15-himatsubushi</td>
                            <td data-label={""}>9-Belgique</td>
                            <td data-label={""}>3-Lily</td>
                        </tr>
                        <tr>
                            <td data-label={"Guild"}>Mattari</td>
                            <td>5</td>
                            <td data-label={""}>12-СССР-2</td>
                            <td data-label={""}>18-Bansh</td>
                            <td data-label={""}>24-КоролеваСемьи</td>
                            <td data-label={""}>30-Dachschaden</td>
                            <td data-label={""}>6-Fighter</td>
                        </tr>
                        <tr>
                            <td>Fighter</td>
                            <td>6</td>
                            <td data-label={""}>29-The Demon Vanguard</td>
                            <td data-label={""}>23-MUKAKIN-MUGON</td>
                            <td data-label={""}>17-Retweet</td>
                            <td data-label={""}>11-Clan Destino</td>
                            <td data-label={""}>5-Mattari</td>
                        </tr>
                        <tr>
                            <td>Heros</td>
                            <td>7</td>
                            <td data-label={""}>14-Soul Reapers</td>
                            <td data-label={""}>20-ЛЕВ</td>
                            <td data-label={""}>26-Pif Paf Pouf</td>
                            <td data-label={""}>2-The Eyrie</td>
                            <td data-label={""}>8-Велес</td>
                        </tr>
                        <tr>
                            <td>Велес</td>
                            <td>8</td>
                            <td data-label={""}>1-athena</td>
                            <td data-label={""}>25-The LIONS</td>
                            <td data-label={""}>19-Kamigrain</td>
                            <td data-label={""}>13-NBC</td>
                            <td data-label={""}>7-Heros</td>
                        </tr>
                        <tr>
                            <td>Belgique</td>
                            <td>9</td>
                            <td data-label={""}>16-CRYSTAL</td>
                            <td data-label={""}>22-Schriese</td>
                            <td data-label={""}>28-Die Hanse</td>
                            <td data-label={""}>4-Knight of Knights</td>
                            <td data-label={""}>10-CCCP</td>
                        </tr>
                        <tr>
                            <td>CCCP</td>
                            <td>10</td>
                            <td data-label={""}>3-Lily</td>
                            <td data-label={""}>27-ONI SKY</td>
                            <td data-label={""}>21-StormCat</td>
                            <td data-label={""}>15-himatsubushi</td>
                            <td data-label={""}>9-Belgique</td>
                        </tr>
                        <tr>
                            <td>Clan Destino</td>
                            <td>11</td>
                            <td data-label={""}>18-Bansh</td>
                            <td data-label={""}>24-КоролеваСемьи</td>
                            <td data-label={""}>30-Dachschaden</td>
                            <td data-label={""}>6-Fighter</td>
                            <td data-label={""}>12-СССР-2</td>
                        </tr>
                        <tr>
                            <td>СССР-2</td>
                            <td>12</td>
                            <td data-label={""}>5-Mattari</td>
                            <td data-label={""}>29-The Demon Vanguard</td>
                            <td data-label={""}>23-MUKAKIN-MUGON</td>
                            <td data-label={""}>17-Retweet</td>
                            <td data-label={""}>11-Clan Destino</td>
                        </tr>
                        <tr>
                            <td>NBC</td>
                            <td>13</td>
                            <td data-label={""}>20-ЛЕВ</td>
                            <td data-label={""}>26-Pif Paf Pouf</td>
                            <td data-label={""}>2-The Eyrie</td>
                            <td data-label={""}>8-Велес</td>
                            <td data-label={""}>14-Soul Reapers</td>
                        </tr>
                        <tr>
                            <td>Soul Reapers</td>
                            <td>14</td>
                            <td data-label={""}>7-Heros</td>
                            <td data-label={""}>1-athena</td>
                            <td data-label={""}>25-The LIONS</td>
                            <td data-label={""}>19-Kamigrain</td>
                            <td data-label={""}>13-NBC</td>
                        </tr>
                        <tr>
                            <td>himatsubushi</td>
                            <td>15</td>
                            <td data-label={""}>22-Schriese</td>
                            <td data-label={""}>28-Die Hanse</td>
                            <td data-label={""}>4-Knight of Knights</td>
                            <td data-label={""}>10-CCCP</td>
                            <td data-label={""}>16-CRYSTAL</td>
                        </tr>
                        <tr>
                            <td>CRYSTAL</td>
                            <td>16</td>
                            <td data-label={""}>9-Belgique</td>
                            <td data-label={""}>3-Lily</td>
                            <td data-label={""}>27-ONI SKY</td>
                            <td data-label={""}>21-StormCat</td>
                            <td data-label={""}>15-himatsubushi</td>
                        </tr>
                        <tr>
                            <td>Retweet</td>
                            <td>17</td>
                            <td data-label={""}>24-КоролеваСемьи</td>
                            <td data-label={""}>30-Dachschaden</td>
                            <td data-label={""}>6-Fighter</td>
                            <td data-label={""}>12-СССР-2</td>
                            <td data-label={""}>18-Bansh</td>
                        </tr>
                        <tr>
                            <td>Bansh</td>
                            <td>18</td>
                            <td data-label={""}>11-Clan Destino</td>
                            <td data-label={""}>5-Mattari</td>
                            <td data-label={""}>29-The Demon Vanguard</td>
                            <td data-label={""}>23-MUKAKIN-MUGON</td>
                            <td data-label={""}>17-Retweet</td>
                        </tr>
                        <tr>
                            <td>Kamigrain</td>
                            <td>19</td>
                            <td data-label={""}>26-Pif Paf Pouf</td>
                            <td data-label={""}>2-The Eyrie</td>
                            <td data-label={""}>8-Велес</td>
                            <td data-label={""}>14-Soul Reapers</td>
                            <td data-label={""}>20-ЛЕВ</td>
                        </tr>
                        <tr>
                            <td>ЛЕВ</td>
                            <td>20</td>
                            <td data-label={""}>13-NBC</td>
                            <td data-label={""}>7-Heros</td>
                            <td data-label={""}>1-athena</td>
                            <td data-label={""}>25-The LIONS</td>
                            <td data-label={""}>19-Kamigrain</td>
                        </tr>
                        <tr>
                            <td>StormCat</td>
                            <td>21</td>
                            <td data-label={""}>28-Die Hanse</td>
                            <td data-label={""}>4-Knight of Knights</td>
                            <td data-label={""}>10-CCCP</td>
                            <td data-label={""}>16-CRYSTAL</td>
                            <td data-label={""}>22-Schriese</td>
                        </tr>
                        <tr>
                            <td>Schriese</td>
                            <td>22</td>
                            <td data-label={""}>15-himatsubushi</td>
                            <td data-label={""}>9-Belgique</td>
                            <td data-label={""}>3-Lily</td>
                            <td data-label={""}>27-ONI SKY</td>
                            <td data-label={""}>21-StormCat</td>
                        </tr>
                        <tr>
                            <td>MUKAKIN-MUGON</td>
                            <td>23</td>
                            <td data-label={""}>30-Dachschaden</td>
                            <td data-label={""}>6-Fighter</td>
                            <td data-label={""}>12-СССР-2</td>
                            <td data-label={""}>18-Bansh</td>
                            <td data-label={""}>24-КоролеваСемьи</td>
                        </tr>
                        <tr>
                            <td>КоролеваСемьи</td>
                            <td>24</td>
                            <td data-label={""}>17-Retweet</td>
                            <td data-label={""}>11-Clan Destino</td>
                            <td data-label={""}>5-Mattari</td>
                            <td data-label={""}>29-The Demon Vanguard</td>
                            <td data-label={""}>23-MUKAKIN-MUGON</td>
                        </tr>
                        <tr>
                            <td>The LIONS</td>
                            <td>25</td>
                            <td data-label={""}>2-The Eyrie</td>
                            <td data-label={""}>8-Велес</td>
                            <td data-label={""}>14-Soul Reapers</td>
                            <td data-label={""}>20-ЛЕВ</td>
                            <td data-label={""}>26-Pif Paf Pouf</td>
                        </tr>
                        <tr>
                            <td>Pif Paf Pouf</td>
                            <td>26</td>
                            <td data-label={""}>19-Kamigrain</td>
                            <td data-label={""}>13-NBC</td>
                            <td data-label={""}>7-Heros</td>
                            <td data-label={""}>1-athena</td>
                            <td data-label={""}>25-The LIONS</td>
                        </tr>
                        <tr>
                            <td>ONI SKY</td>
                            <td>27</td>
                            <td data-label={""}>4-Knight of Knights</td>
                            <td data-label={""}>10-CCCP</td>
                            <td data-label={""}>16-CRYSTAL</td>
                            <td data-label={""}>22-Schriese</td>
                            <td data-label={""}>28-Die Hanse</td>
                        </tr>
                        <tr>
                            <td>Die Hanse</td>
                            <td>28</td>
                            <td data-label={""}>21-StormCat</td>
                            <td data-label={""}>15-himatsubushi</td>
                            <td data-label={""}>9-Belgique</td>
                            <td data-label={""}>3-Lily</td>
                            <td data-label={""}>27-ONI SKY</td>
                        </tr>
                        <tr>
                            <td>The Demon Vanguard</td>
                            <td>29</td>
                            <td data-label={""}>6-Fighter</td>
                            <td data-label={""}>12-СССР-2</td>
                            <td data-label={""}>18-Bansh</td>
                            <td data-label={""}>24-КоролеваСемьи</td>
                            <td data-label={""}>30-Dachschaden</td>
                        </tr>
                        <tr>
                            <td>Dachschaden</td>
                            <td>30</td>
                            <td data-label={""}>23-MUKAKIN-MUGON</td>
                            <td data-label={""}>17-Retweet</td>
                            <td data-label={""}>11-Clan Destino</td>
                            <td data-label={""}>5-Mattari</td>
                            <td data-label={""}>29-The Demon Vanguard</td>
                        </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </>
    )
}

export default War
