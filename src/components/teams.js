import styles from "./users.module.css";
import commonStyles from "../components/common.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Program from "./program";
import War from "./war";

export const getOpponents = (teams, teamPosition) => {
  const team = teams[teamPosition - 1];
  console.log(teams[teamPosition - 1]);
  //is even
  const opponents = [];
  const position = team.position;
  if (team.league === "Bronze") {
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
    debugger;
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
const Teams = () => {
  const teams = useSelector((state) => state.teams.teams);
  // const [teams, setTeams] = useState(null)
  const [cTeam, setCTeam] = useState(0);
  const [warOpponents, setWarOpponents] = useState([]);

  useEffect(() => {
    if (cTeam > 0) {
      setWarOpponents(getOpponents(teams, cTeam));
    } else {
      setWarOpponents([]);
    }
  }, [cTeam, teams]);
  // useEffect(()=>{
  //     if (!teams){
  //         if (warObj.answer){
  //             setTeams(warObj.data.filter(team => team.league === "Bronze"))
  //             console.log('WAROBJ =>' ,warObj.data.filter(team => team.league === "Bronze"))
  //         }
  // }
  //
  // },[teams])

  if (teams == null) {
    return null;
  } else {
    return (
      <div className={commonStyles.container}>
        <div>
          <div className={styles.container}>
            <div className={styles.programContainer}>
              <label className={styles.select}>
                Guild's:{" "}
                <select
                  className='rounded-md border border-b-2 border-black'
                  onChange={(e) => setCTeam(e.target.value)}
                >
                  <option value={0} key={0}>
                    Select team
                  </option>
                  {teams.map((team) => (
                    <option value={team.position} key={team.position}>
                      {" "}
                      {team.position} - {team.name}{" "}
                    </option>
                  ))}
                </select>{" "}
                war program
              </label>

              {cTeam > 0 && <Program opponents={warOpponents} />}
            </div>
          </div>
          <War />
        </div>
        <div style={{ marginTop: "5rem" }}>
          <div className={styles.programContainer}>
            <div style={{ marginBottom: "2rem" }}>
              <div className="text-3xl text-center">Silver league</div>
        <table _ngcontent-isi-c63="" class="table table-striped table-sm">
        <thead _ngcontent-isi-c63="" class="thead-dark"><tr _ngcontent-isi-c63=""><th _ngcontent-isi-c63="" scope="col">Guild</th><th _ngcontent-isi-c63="" scope="col">Pos.</th><th _ngcontent-isi-c63="" scope="col"> Monday </th><th _ngcontent-isi-c63="" scope="col"> Tuesday </th><th _ngcontent-isi-c63="" scope="col"> Wednesday </th><th _ngcontent-isi-c63="" scope="col"> Thursday </th><th _ngcontent-isi-c63="" scope="col"> Friday </th></tr></thead><tbody _ngcontent-isi-c63=""><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">54 HERO</td><td _ngcontent-isi-c63="">1</td><td _ngcontent-isi-c63=""> 4-Knight of Knights </td><td _ngcontent-isi-c63=""> 6-tigerclaws </td><td _ngcontent-isi-c63=""> 8-Велес </td><td _ngcontent-isi-c63=""> 10-Clan  Destino </td><td _ngcontent-isi-c63=""> 2-Фениксы </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Фениксы</td><td _ngcontent-isi-c63="">2</td><td _ngcontent-isi-c63=""> 9-Mattari </td><td _ngcontent-isi-c63=""> 7-silelderman </td><td _ngcontent-isi-c63=""> 5-Toms </td><td _ngcontent-isi-c63=""> 3-Vikings </td><td _ngcontent-isi-c63=""> 1-54 HERO </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Vikings</td><td _ngcontent-isi-c63="">3</td><td _ngcontent-isi-c63=""> 6-tigerclaws </td><td _ngcontent-isi-c63=""> 8-Велес </td><td _ngcontent-isi-c63=""> 10-Clan  Destino </td><td _ngcontent-isi-c63=""> 2-Фениксы </td><td _ngcontent-isi-c63=""> 4-Knight of Knights </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Knight of Knights</td><td _ngcontent-isi-c63="">4</td><td _ngcontent-isi-c63=""> 1-54 HERO </td><td _ngcontent-isi-c63=""> 9-Mattari </td><td _ngcontent-isi-c63=""> 7-silelderman </td><td _ngcontent-isi-c63=""> 5-Toms </td><td _ngcontent-isi-c63=""> 3-Vikings </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Toms</td><td _ngcontent-isi-c63="">5</td><td _ngcontent-isi-c63=""> 8-Велес </td><td _ngcontent-isi-c63=""> 10-Clan  Destino </td><td _ngcontent-isi-c63=""> 2-Фениксы </td><td _ngcontent-isi-c63=""> 4-Knight of Knights </td><td _ngcontent-isi-c63=""> 6-tigerclaws </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">tigerclaws</td><td _ngcontent-isi-c63="">6</td><td _ngcontent-isi-c63=""> 3-Vikings </td><td _ngcontent-isi-c63=""> 1-54 HERO </td><td _ngcontent-isi-c63=""> 9-Mattari </td><td _ngcontent-isi-c63=""> 7-silelderman </td><td _ngcontent-isi-c63=""> 5-Toms </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">silelderman</td><td _ngcontent-isi-c63="">7</td><td _ngcontent-isi-c63=""> 10-Clan  Destino </td><td _ngcontent-isi-c63=""> 2-Фениксы </td><td _ngcontent-isi-c63=""> 4-Knight of Knights </td><td _ngcontent-isi-c63=""> 6-tigerclaws </td><td _ngcontent-isi-c63=""> 8-Велес </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Велес</td><td _ngcontent-isi-c63="">8</td><td _ngcontent-isi-c63=""> 5-Toms </td><td _ngcontent-isi-c63=""> 3-Vikings </td><td _ngcontent-isi-c63=""> 1-54 HERO </td><td _ngcontent-isi-c63=""> 9-Mattari </td><td _ngcontent-isi-c63=""> 7-silelderman </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Mattari</td><td _ngcontent-isi-c63="">9</td><td _ngcontent-isi-c63=""> 2-Фениксы </td><td _ngcontent-isi-c63=""> 4-Knight of Knights </td><td _ngcontent-isi-c63=""> 6-tigerclaws </td><td _ngcontent-isi-c63=""> 8-Велес </td><td _ngcontent-isi-c63=""> 10-Clan  Destino </td></tr><tr _ngcontent-isi-c63=""><td _ngcontent-isi-c63="">Clan  Destino</td><td _ngcontent-isi-c63="">10</td><td _ngcontent-isi-c63=""> 7-silelderman </td><td _ngcontent-isi-c63=""> 5-Toms </td><td _ngcontent-isi-c63=""> 3-Vikings </td><td _ngcontent-isi-c63=""> 1-54 HERO </td><td _ngcontent-isi-c63=""> 9-Mattari </td></tr></tbody>
        </table> 
            </div>
          </div>
        </div>
      </div>
    );
  }
};

export default Teams;
