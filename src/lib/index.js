export const readData = (data, league) => {
    const firstWave = data.split('\n').filter(pro => pro !== '')
    const secondWave = firstWave.map(f => f.split('\t'))
    const teams = secondWave.map((team) => {return {name: team[0], position: team[1], league}})
    return teams
}

export const getOpponents = ( teamPosition, league) => {
   
    //is even
    const opponents = [];
    const position = Number(teamPosition);
    if (league === "bronze") {
      if (teamPosition % 2 !== 0) {
        let next = position + 7;
        if (next > 30) {
          next -= 30;
        }
        for (let i = 0; i < 5; ++i) {
          opponents.push(next);
          next = next + 6;
          if (next > 30) {
            next -= 30;
          }
        }
      } else {
        let next = position - 7;
        if (next < 0) {
          next += 30;
        }
        for (let i = 0; i < 5; ++i) {
          opponents.push(next);
          next = next - 6;
          if (next < 0) {
            next += 30;
          }
        }
      }
    } else {
      //Silver
      
      if (teamPosition % 2 !== 0) {
        let next = position + 3;
        if (next > 10) {
          next -= 10;
        }
        for (let i = 0; i < 5; ++i) {
          opponents.push(next);
          next = next + 2;
          if (next > 10) {
            next -= 10;
          }
        }
      } else {
        let next = position - 3;
        if (next < 0) {
          next += 10;
        }
        for (let i = 0; i < 5; ++i) {
          opponents.push(next);
          next = next - 2;
          if (next < 0) {
            next += 10;
          }
        }
      }
    }
    return opponents;
  };