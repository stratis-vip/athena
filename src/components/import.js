
const data = `Guild\tPos.\tMonday\tTuesday\tWednesday\tThursday\tFriday
First Wave\t1\t8-Lily\t14-Soul Reapers\t20-Kamigrain\t26-The LIONS\t2-Mattari
Mattari\t2\t25-Pif Paf Pouf\t19-MUKAKIN-MUGON\t13-himatsubushi\t7-Knight of Knights\t1-First Wave
Heros\t3\t10-Clan Destino\t16-CRYSTAL\t22-Schriese\t28-ppmmOmmqq\t4-Велес
Велес\t4\t27-ONI SKY\t21-Retweet\t15-СССР-2\t9-CCCP\t3-Heros
Belgique\t5\t12-NBC\t18-StormCat\t24-КоролеваСемьи\t30-тризуб\t6-athena
athena\t6\t29-REX\t23-pink pirates\t17-Bansh\t11-The Eyrie\t5-Belgique
Knight of Knights\t7\t14-Soul Reapers\t20-Kamigrain\t26-The LIONS\t2-Mattari\t8-Lily
Lily\t8\t1-First Wave\t25-Pif Paf Pouf\t19-MUKAKIN-MUGON\t13-himatsubushi\t7-Knight of Knights
CCCP\t9\t16-CRYSTAL\t22-Schriese\t28-ppmmOmmqq\t4-Велес\t10-Clan Destino
Clan Destino\t10\t3-Heros\t27-ONI SKY\t21-Retweet\t15-СССР-2\t9-CCCP
The Eyrie\t11\t18-StormCat\t24-КоролеваСемьи\t30-тризуб\t6-athena\t12-NBC
NBC\t12\t5-Belgique\t29-REX\t23-pink pirates\t17-Bansh\t11-The Eyrie
himatsubushi\t13\t20-Kamigrain\t26-The LIONS\t2-Mattari\t8-Lily\t14-Soul Reapers
Soul Reapers\t14\t7-Knight of Knights\t1-First Wave\t25-Pif Paf Pouf\t19-MUKAKIN-MUGON\t13-himatsubushi
СССР-2\t15\t22-Schriese\t28-ppmmOmmqq\t4-Велес\t10-Clan Destino\t16-CRYSTAL
CRYSTAL\t16\t9-CCCP\t3-Heros\t27-ONI SKY\t21-Retweet\t15-СССР-2
Bansh\t17\t24-КоролеваСемьи\t30-тризуб\t6-athena\t12-NBC\t18-StormCat
StormCat\t18\t11-The Eyrie\t5-Belgique\t29-REX\t23-pink pirates\t17-Bansh
MUKAKIN-MUGON\t19\t26-The LIONS\t2-Mattari\t8-Lily\t14-Soul Reapers\t20-Kamigrain
Kamigrain\t20\t13-himatsubushi\t7-Knight of Knights\t1-First Wave\t25-Pif Paf Pouf\t19-MUKAKIN-MUGON
Retweet\t21\t28-ppmmOmmqq\t4-Велес\t10-Clan Destino\t16-CRYSTAL\t22-Schriese
Schriese\t22\t15-СССР-2\t9-CCCP\t3-Heros\t27-ONI SKY\t21-Retweet
pink pirates\t23\t30-тризуб\t6-athena\t12-NBC\t18-StormCat\t24-КоролеваСемьи
КоролеваСемьи\t24\t17-Bansh\t11-The Eyrie\t5-Belgique\t29-REX\t23-pink pirates
Pif Paf Pouf\t25\t2-Mattari\t8-Lily\t14-Soul Reapers\t20-Kamigrain\t26-The LIONS
The LIONS\t26\t19-MUKAKIN-MUGON\t13-himatsubushi\t7-Knight of Knights\t1-First Wave\t25-Pif Paf Pouf
ONI SKY\t27\t4-Велес\t10-Clan Destino\t16-CRYSTAL\t22-Schriese\t28-ppmmOmmqq
ppmmOmmqq\t28\t21-Retweet\t15-СССР-2\t9-CCCP\t3-Heros\t27-ONI SKY
REX\t29\t6-athena\t12-NBC\t18-StormCat\t24-КоролеваСемьи\t30-тризуб
тризуб\t30\t23-pink pirates\t17-Bansh\t11-The Eyrie\t5-Belgique\t29-REX
`

const analyzeString = (str) => {
    const arrayOfTeams = data.split("\n")
    if (arrayOfTeams.length > 30) {
        const titles = arrayOfTeams[0].split('\t').map(title => title.toLowerCase())
        console.log(titles)
        if (titles[0] === "guild") {
            const obj = []
            for (let i = 1; i < arrayOfTeams.length - 1; ++i) {
                const team = arrayOfTeams[i].split('\t')
                obj.push({guild: team[0], position: Number(team[1]), league: "Bronze"})

            }
            console.log(obj)
            return {answer: true, data: obj}
        }
    }
    console.log(arrayOfTeams)
    return {answer: false}
}

const ImportComponent = () => {
    return (<>
        <h3> Import componenet</h3>
        <div>{analyzeString(data).answer ? JSON.stringify(analyzeString(data).data) : "error in data"}</div>
    </>)
}


export default ImportComponent
