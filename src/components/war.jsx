import styles from './war.module.css'
import {DateTime, Interval} from "luxon";
import {useEffect, useState} from "react";
import {Duration} from "luxon/build/cjs-browser/luxon";

const total = 10 * 3600 * 1000
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
}

const War = () => {
    const [day, setDay] = useState(getCurrentDay())
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

    useEffect(()=>{
        console.log('STATE:', state, 'REMAINING:', remaining)
    }, [state])

    useEffect(()=>{
        console.log( 'REMAINING:', remaining)
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
                    if (DateTime.utc() < alfa){
                        //before war
                        const dur = alfa - DateTime.utc()
                        setRemaining(dur)
                        setNextWar(Duration.fromMillis(alfa - DateTime.utc()).toFormat("hh:mm:ss"))
                        setState("notInWar")
                    }else {
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

        const rem = Duration.fromMillis(remaining).toMillis()/1000/3600
        if (rem > 8 ){
            return styles.green
        }
        if (rem > 6 ){
            return styles.blue
        }
        if (rem > 4 ){
            return styles.orange
        }
        if (rem > 3 ){
            return styles.coral
        }
        if (rem > 2 ){
            return styles.red1
        }
        if (rem > 1 ){
            return styles.red2
        }
        return  styles.red

    }
    return (
        <div>
            {nextWar && <h1 style={{color: "red"}}>Next war at {nextWar}</h1>}
            <div>
                {state === "onWar" && remaining != null && (<div>
                    <h1>On war!</h1>
                    <h2>Time remaining: <span className={getColorCode()}>{Duration.fromMillis(remaining).toFormat("hh:mm:ss")}</span></h2>

                </div>)
                }

                <div>
                    <table _ngcontent-vkv-c63="" className="table table-striped table-sm">
                        <thead _ngcontent-vkv-c63="" className="thead-dark">
                        <tr _ngcontent-vkv-c63="">
                            <th _ngcontent-vkv-c63="" scope="col">Guild</th>
                            <th _ngcontent-vkv-c63="" scope="col">Pos.</th>
                            <th _ngcontent-vkv-c63="" scope="col"> Monday</th>
                            <th _ngcontent-vkv-c63="" scope="col"> Tuesday</th>
                            <th _ngcontent-vkv-c63="" scope="col"> Wednesday</th>
                            <th _ngcontent-vkv-c63="" scope="col"> Thursday</th>
                            <th _ngcontent-vkv-c63="" scope="col"> Friday</th>
                            </tr>
                        </thead>
                        <tbody _ngcontent-vkv-c63="">
                        <tr _ngcontent-vkv-c63="" className={styles.currentTeam}>
                            <td _ngcontent-vkv-c63="">athena</td>
                            <td _ngcontent-vkv-c63="">1</td>
                            <td _ngcontent-vkv-c63=""> 8-Велес</td>
                            <td _ngcontent-vkv-c63=""> 14-Soul Reapers</td>
                            <td _ngcontent-vkv-c63=""> 20-ЛЕВ</td>
                            <td _ngcontent-vkv-c63=""> 26-Pif Paf Pouf</td>
                            <td _ngcontent-vkv-c63=""> 2-The Eyrie</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">The Eyrie</td>
                            <td _ngcontent-vkv-c63="">2</td>
                            <td _ngcontent-vkv-c63=""> 25-The LIONS</td>
                            <td _ngcontent-vkv-c63=""> 19-Kamigrain</td>
                            <td _ngcontent-vkv-c63=""> 13-NBC</td>
                            <td _ngcontent-vkv-c63=""> 7-Heros</td>
                            <td _ngcontent-vkv-c63=""> 1-athena</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Lily</td>
                            <td _ngcontent-vkv-c63="">3</td>
                            <td _ngcontent-vkv-c63=""> 10-CCCP</td>
                            <td _ngcontent-vkv-c63=""> 16-CRYSTAL</td>
                            <td _ngcontent-vkv-c63=""> 22-Schriese</td>
                            <td _ngcontent-vkv-c63=""> 28-Die Hanse</td>
                            <td _ngcontent-vkv-c63=""> 4-Knight of Knights</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Knight of Knights</td>
                            <td _ngcontent-vkv-c63="">4</td>
                            <td _ngcontent-vkv-c63=""> 27-ONI SKY</td>
                            <td _ngcontent-vkv-c63=""> 21-StormCat</td>
                            <td _ngcontent-vkv-c63=""> 15-himatsubushi</td>
                            <td _ngcontent-vkv-c63=""> 9-Belgique</td>
                            <td _ngcontent-vkv-c63=""> 3-Lily</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Mattari</td>
                            <td _ngcontent-vkv-c63="">5</td>
                            <td _ngcontent-vkv-c63=""> 12-СССР-2</td>
                            <td _ngcontent-vkv-c63=""> 18-Bansh</td>
                            <td _ngcontent-vkv-c63=""> 24-КоролеваСемьи</td>
                            <td _ngcontent-vkv-c63=""> 30-Dachschaden</td>
                            <td _ngcontent-vkv-c63=""> 6-Fighter</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Fighter</td>
                            <td _ngcontent-vkv-c63="">6</td>
                            <td _ngcontent-vkv-c63=""> 29-The Demon Vanguard</td>
                            <td _ngcontent-vkv-c63=""> 23-MUKAKIN-MUGON</td>
                            <td _ngcontent-vkv-c63=""> 17-Retweet</td>
                            <td _ngcontent-vkv-c63=""> 11-Clan Destino</td>
                            <td _ngcontent-vkv-c63=""> 5-Mattari</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Heros</td>
                            <td _ngcontent-vkv-c63="">7</td>
                            <td _ngcontent-vkv-c63=""> 14-Soul Reapers</td>
                            <td _ngcontent-vkv-c63=""> 20-ЛЕВ</td>
                            <td _ngcontent-vkv-c63=""> 26-Pif Paf Pouf</td>
                            <td _ngcontent-vkv-c63=""> 2-The Eyrie</td>
                            <td _ngcontent-vkv-c63=""> 8-Велес</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Велес</td>
                            <td _ngcontent-vkv-c63="">8</td>
                            <td _ngcontent-vkv-c63=""> 1-athena</td>
                            <td _ngcontent-vkv-c63=""> 25-The LIONS</td>
                            <td _ngcontent-vkv-c63=""> 19-Kamigrain</td>
                            <td _ngcontent-vkv-c63=""> 13-NBC</td>
                            <td _ngcontent-vkv-c63=""> 7-Heros</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Belgique</td>
                            <td _ngcontent-vkv-c63="">9</td>
                            <td _ngcontent-vkv-c63=""> 16-CRYSTAL</td>
                            <td _ngcontent-vkv-c63=""> 22-Schriese</td>
                            <td _ngcontent-vkv-c63=""> 28-Die Hanse</td>
                            <td _ngcontent-vkv-c63=""> 4-Knight of Knights</td>
                            <td _ngcontent-vkv-c63=""> 10-CCCP</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">CCCP</td>
                            <td _ngcontent-vkv-c63="">10</td>
                            <td _ngcontent-vkv-c63=""> 3-Lily</td>
                            <td _ngcontent-vkv-c63=""> 27-ONI SKY</td>
                            <td _ngcontent-vkv-c63=""> 21-StormCat</td>
                            <td _ngcontent-vkv-c63=""> 15-himatsubushi</td>
                            <td _ngcontent-vkv-c63=""> 9-Belgique</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Clan Destino</td>
                            <td _ngcontent-vkv-c63="">11</td>
                            <td _ngcontent-vkv-c63=""> 18-Bansh</td>
                            <td _ngcontent-vkv-c63=""> 24-КоролеваСемьи</td>
                            <td _ngcontent-vkv-c63=""> 30-Dachschaden</td>
                            <td _ngcontent-vkv-c63=""> 6-Fighter</td>
                            <td _ngcontent-vkv-c63=""> 12-СССР-2</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">СССР-2</td>
                            <td _ngcontent-vkv-c63="">12</td>
                            <td _ngcontent-vkv-c63=""> 5-Mattari</td>
                            <td _ngcontent-vkv-c63=""> 29-The Demon Vanguard</td>
                            <td _ngcontent-vkv-c63=""> 23-MUKAKIN-MUGON</td>
                            <td _ngcontent-vkv-c63=""> 17-Retweet</td>
                            <td _ngcontent-vkv-c63=""> 11-Clan Destino</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">NBC</td>
                            <td _ngcontent-vkv-c63="">13</td>
                            <td _ngcontent-vkv-c63=""> 20-ЛЕВ</td>
                            <td _ngcontent-vkv-c63=""> 26-Pif Paf Pouf</td>
                            <td _ngcontent-vkv-c63=""> 2-The Eyrie</td>
                            <td _ngcontent-vkv-c63=""> 8-Велес</td>
                            <td _ngcontent-vkv-c63=""> 14-Soul Reapers</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Soul Reapers</td>
                            <td _ngcontent-vkv-c63="">14</td>
                            <td _ngcontent-vkv-c63=""> 7-Heros</td>
                            <td _ngcontent-vkv-c63=""> 1-athena</td>
                            <td _ngcontent-vkv-c63=""> 25-The LIONS</td>
                            <td _ngcontent-vkv-c63=""> 19-Kamigrain</td>
                            <td _ngcontent-vkv-c63=""> 13-NBC</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">himatsubushi</td>
                            <td _ngcontent-vkv-c63="">15</td>
                            <td _ngcontent-vkv-c63=""> 22-Schriese</td>
                            <td _ngcontent-vkv-c63=""> 28-Die Hanse</td>
                            <td _ngcontent-vkv-c63=""> 4-Knight of Knights</td>
                            <td _ngcontent-vkv-c63=""> 10-CCCP</td>
                            <td _ngcontent-vkv-c63=""> 16-CRYSTAL</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">CRYSTAL</td>
                            <td _ngcontent-vkv-c63="">16</td>
                            <td _ngcontent-vkv-c63=""> 9-Belgique</td>
                            <td _ngcontent-vkv-c63=""> 3-Lily</td>
                            <td _ngcontent-vkv-c63=""> 27-ONI SKY</td>
                            <td _ngcontent-vkv-c63=""> 21-StormCat</td>
                            <td _ngcontent-vkv-c63=""> 15-himatsubushi</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Retweet</td>
                            <td _ngcontent-vkv-c63="">17</td>
                            <td _ngcontent-vkv-c63=""> 24-КоролеваСемьи</td>
                            <td _ngcontent-vkv-c63=""> 30-Dachschaden</td>
                            <td _ngcontent-vkv-c63=""> 6-Fighter</td>
                            <td _ngcontent-vkv-c63=""> 12-СССР-2</td>
                            <td _ngcontent-vkv-c63=""> 18-Bansh</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Bansh</td>
                            <td _ngcontent-vkv-c63="">18</td>
                            <td _ngcontent-vkv-c63=""> 11-Clan Destino</td>
                            <td _ngcontent-vkv-c63=""> 5-Mattari</td>
                            <td _ngcontent-vkv-c63=""> 29-The Demon Vanguard</td>
                            <td _ngcontent-vkv-c63=""> 23-MUKAKIN-MUGON</td>
                            <td _ngcontent-vkv-c63=""> 17-Retweet</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Kamigrain</td>
                            <td _ngcontent-vkv-c63="">19</td>
                            <td _ngcontent-vkv-c63=""> 26-Pif Paf Pouf</td>
                            <td _ngcontent-vkv-c63=""> 2-The Eyrie</td>
                            <td _ngcontent-vkv-c63=""> 8-Велес</td>
                            <td _ngcontent-vkv-c63=""> 14-Soul Reapers</td>
                            <td _ngcontent-vkv-c63=""> 20-ЛЕВ</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">ЛЕВ</td>
                            <td _ngcontent-vkv-c63="">20</td>
                            <td _ngcontent-vkv-c63=""> 13-NBC</td>
                            <td _ngcontent-vkv-c63=""> 7-Heros</td>
                            <td _ngcontent-vkv-c63=""> 1-athena</td>
                            <td _ngcontent-vkv-c63=""> 25-The LIONS</td>
                            <td _ngcontent-vkv-c63=""> 19-Kamigrain</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">StormCat</td>
                            <td _ngcontent-vkv-c63="">21</td>
                            <td _ngcontent-vkv-c63=""> 28-Die Hanse</td>
                            <td _ngcontent-vkv-c63=""> 4-Knight of Knights</td>
                            <td _ngcontent-vkv-c63=""> 10-CCCP</td>
                            <td _ngcontent-vkv-c63=""> 16-CRYSTAL</td>
                            <td _ngcontent-vkv-c63=""> 22-Schriese</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Schriese</td>
                            <td _ngcontent-vkv-c63="">22</td>
                            <td _ngcontent-vkv-c63=""> 15-himatsubushi</td>
                            <td _ngcontent-vkv-c63=""> 9-Belgique</td>
                            <td _ngcontent-vkv-c63=""> 3-Lily</td>
                            <td _ngcontent-vkv-c63=""> 27-ONI SKY</td>
                            <td _ngcontent-vkv-c63=""> 21-StormCat</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">MUKAKIN-MUGON</td>
                            <td _ngcontent-vkv-c63="">23</td>
                            <td _ngcontent-vkv-c63=""> 30-Dachschaden</td>
                            <td _ngcontent-vkv-c63=""> 6-Fighter</td>
                            <td _ngcontent-vkv-c63=""> 12-СССР-2</td>
                            <td _ngcontent-vkv-c63=""> 18-Bansh</td>
                            <td _ngcontent-vkv-c63=""> 24-КоролеваСемьи</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">КоролеваСемьи</td>
                            <td _ngcontent-vkv-c63="">24</td>
                            <td _ngcontent-vkv-c63=""> 17-Retweet</td>
                            <td _ngcontent-vkv-c63=""> 11-Clan Destino</td>
                            <td _ngcontent-vkv-c63=""> 5-Mattari</td>
                            <td _ngcontent-vkv-c63=""> 29-The Demon Vanguard</td>
                            <td _ngcontent-vkv-c63=""> 23-MUKAKIN-MUGON</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">The LIONS</td>
                            <td _ngcontent-vkv-c63="">25</td>
                            <td _ngcontent-vkv-c63=""> 2-The Eyrie</td>
                            <td _ngcontent-vkv-c63=""> 8-Велес</td>
                            <td _ngcontent-vkv-c63=""> 14-Soul Reapers</td>
                            <td _ngcontent-vkv-c63=""> 20-ЛЕВ</td>
                            <td _ngcontent-vkv-c63=""> 26-Pif Paf Pouf</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Pif Paf Pouf</td>
                            <td _ngcontent-vkv-c63="">26</td>
                            <td _ngcontent-vkv-c63=""> 19-Kamigrain</td>
                            <td _ngcontent-vkv-c63=""> 13-NBC</td>
                            <td _ngcontent-vkv-c63=""> 7-Heros</td>
                            <td _ngcontent-vkv-c63=""> 1-athena</td>
                            <td _ngcontent-vkv-c63=""> 25-The LIONS</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">ONI SKY</td>
                            <td _ngcontent-vkv-c63="">27</td>
                            <td _ngcontent-vkv-c63=""> 4-Knight of Knights</td>
                            <td _ngcontent-vkv-c63=""> 10-CCCP</td>
                            <td _ngcontent-vkv-c63=""> 16-CRYSTAL</td>
                            <td _ngcontent-vkv-c63=""> 22-Schriese</td>
                            <td _ngcontent-vkv-c63=""> 28-Die Hanse</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Die Hanse</td>
                            <td _ngcontent-vkv-c63="">28</td>
                            <td _ngcontent-vkv-c63=""> 21-StormCat</td>
                            <td _ngcontent-vkv-c63=""> 15-himatsubushi</td>
                            <td _ngcontent-vkv-c63=""> 9-Belgique</td>
                            <td _ngcontent-vkv-c63=""> 3-Lily</td>
                            <td _ngcontent-vkv-c63=""> 27-ONI SKY</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">The Demon Vanguard</td>
                            <td _ngcontent-vkv-c63="">29</td>
                            <td _ngcontent-vkv-c63=""> 6-Fighter</td>
                            <td _ngcontent-vkv-c63=""> 12-СССР-2</td>
                            <td _ngcontent-vkv-c63=""> 18-Bansh</td>
                            <td _ngcontent-vkv-c63=""> 24-КоролеваСемьи</td>
                            <td _ngcontent-vkv-c63=""> 30-Dachschaden</td>
                            </tr>
                        <tr _ngcontent-vkv-c63="">
                            <td _ngcontent-vkv-c63="">Dachschaden</td>
                            <td _ngcontent-vkv-c63="">30</td>
                            <td _ngcontent-vkv-c63=""> 23-MUKAKIN-MUGON</td>
                            <td _ngcontent-vkv-c63=""> 17-Retweet</td>
                            <td _ngcontent-vkv-c63=""> 11-Clan Destino</td>
                            <td _ngcontent-vkv-c63=""> 5-Mattari</td>
                            <td _ngcontent-vkv-c63=""> 29-The Demon Vanguard</td>
                            </tr>
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}

export default War
