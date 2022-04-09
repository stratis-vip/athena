export const analyzeString = (str) => {
    const arrayOfTeams = str.split("\n")
    if (arrayOfTeams.length > 10) {
        const titles = arrayOfTeams[0].split('\t').map(title => title.toLowerCase())
        console.log("Titles = ", titles)
        if (titles[0] === "guild") {
            const obj = []
            const league = arrayOfTeams.length > 30 ? "Bronze" : "Silver"
            // if (arrayOfTeams.length > 30) {
            // debugger;
            for (let i = 1; i < arrayOfTeams.length - 1; ++i) {
                const team = arrayOfTeams[i].split('\t')
                obj.push({name: team[0], position: Number(team[1]), league})
            }
            console.log(obj)
            return {answer: true, data: obj, league}

        }
    }
    console.log(arrayOfTeams)
    return {answer: false}
}

