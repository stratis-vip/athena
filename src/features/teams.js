import styles from "./users.module.css";
import commonStyles from "../components/common.module.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import Program from "../components/program";
import War from "../components/war";

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
                  className={styles.select}
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
              <h1>Bronze league</h1>
            </div>
            <table _ngcontent-pkw-c63="" class="table table-striped table-sm">
              <thead _ngcontent-pkw-c63="" class="thead-dark">
                <tr _ngcontent-pkw-c63="">
                  <th _ngcontent-pkw-c63="" scope="col">
                    Guild
                  </th>
                  <th _ngcontent-pkw-c63="" scope="col">
                    Pos.
                  </th>
                  <th _ngcontent-pkw-c63="" scope="col">
                    {" "}
                    Monday{" "}
                  </th>
                  <th _ngcontent-pkw-c63="" scope="col">
                    {" "}
                    Tuesday{" "}
                  </th>
                  <th _ngcontent-pkw-c63="" scope="col">
                    {" "}
                    Wednesday{" "}
                  </th>
                  <th _ngcontent-pkw-c63="" scope="col">
                    {" "}
                    Thursday{" "}
                  </th>
                  <th _ngcontent-pkw-c63="" scope="col">
                    {" "}
                    Friday{" "}
                  </th>
                </tr>
              </thead>
              <tbody _ngcontent-pkw-c63="">
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Mattari</td>
                  <td _ngcontent-pkw-c63="">1</td>
                  <td _ngcontent-pkw-c63=""> 8-himatsubushi </td>
                  <td _ngcontent-pkw-c63=""> 14-The LIONS </td>
                  <td _ngcontent-pkw-c63=""> 20-StormCat </td>
                  <td _ngcontent-pkw-c63=""> 26-Die Hanse </td>
                  <td _ngcontent-pkw-c63=""> 2-Clan Destino </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Clan Destino</td>
                  <td _ngcontent-pkw-c63="">2</td>
                  <td _ngcontent-pkw-c63=""> 25-ppmmOmmqq </td>
                  <td _ngcontent-pkw-c63=""> 19-SKY LORDS </td>
                  <td _ngcontent-pkw-c63=""> 13-Bansh </td>
                  <td _ngcontent-pkw-c63=""> 7-CRYSTAL </td>
                  <td _ngcontent-pkw-c63=""> 1-Mattari </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Велес</td>
                  <td _ngcontent-pkw-c63="">3</td>
                  <td _ngcontent-pkw-c63=""> 10-The Eyrie </td>
                  <td _ngcontent-pkw-c63=""> 16-MUKAKIN-MUGON </td>
                  <td _ngcontent-pkw-c63=""> 22-Pif Paf Pouf </td>
                  <td _ngcontent-pkw-c63=""> 28-I FURIANI </td>
                  <td _ngcontent-pkw-c63=""> 4-Sax Clan </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Sax Clan</td>
                  <td _ngcontent-pkw-c63="">4</td>
                  <td _ngcontent-pkw-c63=""> 27-Schriese </td>
                  <td _ngcontent-pkw-c63=""> 21-Einfach so </td>
                  <td _ngcontent-pkw-c63=""> 15-Death or Glory </td>
                  <td _ngcontent-pkw-c63=""> 9-Belgique </td>
                  <td _ngcontent-pkw-c63=""> 3-Велес </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Fighter</td>
                  <td _ngcontent-pkw-c63="">5</td>
                  <td _ngcontent-pkw-c63=""> 12-Soul Reapers </td>
                  <td _ngcontent-pkw-c63=""> 18-Перун </td>
                  <td _ngcontent-pkw-c63=""> 24-ЛЕВ </td>
                  <td _ngcontent-pkw-c63=""> 30-Team Heronic </td>
                  <td _ngcontent-pkw-c63=""> 6-Lily </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Lily</td>
                  <td _ngcontent-pkw-c63="">6</td>
                  <td _ngcontent-pkw-c63=""> 29-тризуб </td>
                  <td _ngcontent-pkw-c63=""> 23-1111 </td>
                  <td _ngcontent-pkw-c63=""> 17-Kamigrain </td>
                  <td _ngcontent-pkw-c63=""> 11-CCCP </td>
                  <td _ngcontent-pkw-c63=""> 5-Fighter </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">CRYSTAL</td>
                  <td _ngcontent-pkw-c63="">7</td>
                  <td _ngcontent-pkw-c63=""> 14-The LIONS </td>
                  <td _ngcontent-pkw-c63=""> 20-StormCat </td>
                  <td _ngcontent-pkw-c63=""> 26-Die Hanse </td>
                  <td _ngcontent-pkw-c63=""> 2-Clan Destino </td>
                  <td _ngcontent-pkw-c63=""> 8-himatsubushi </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">himatsubushi</td>
                  <td _ngcontent-pkw-c63="">8</td>
                  <td _ngcontent-pkw-c63=""> 1-Mattari </td>
                  <td _ngcontent-pkw-c63=""> 25-ppmmOmmqq </td>
                  <td _ngcontent-pkw-c63=""> 19-SKY LORDS </td>
                  <td _ngcontent-pkw-c63=""> 13-Bansh </td>
                  <td _ngcontent-pkw-c63=""> 7-CRYSTAL </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Belgique</td>
                  <td _ngcontent-pkw-c63="">9</td>
                  <td _ngcontent-pkw-c63=""> 16-MUKAKIN-MUGON </td>
                  <td _ngcontent-pkw-c63=""> 22-Pif Paf Pouf </td>
                  <td _ngcontent-pkw-c63=""> 28-I FURIANI </td>
                  <td _ngcontent-pkw-c63=""> 4-Sax Clan </td>
                  <td _ngcontent-pkw-c63=""> 10-The Eyrie </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">The Eyrie</td>
                  <td _ngcontent-pkw-c63="">10</td>
                  <td _ngcontent-pkw-c63=""> 3-Велес </td>
                  <td _ngcontent-pkw-c63=""> 27-Schriese </td>
                  <td _ngcontent-pkw-c63=""> 21-Einfach so </td>
                  <td _ngcontent-pkw-c63=""> 15-Death or Glory </td>
                  <td _ngcontent-pkw-c63=""> 9-Belgique </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">CCCP</td>
                  <td _ngcontent-pkw-c63="">11</td>
                  <td _ngcontent-pkw-c63=""> 18-Перун </td>
                  <td _ngcontent-pkw-c63=""> 24-ЛЕВ </td>
                  <td _ngcontent-pkw-c63=""> 30-Team Heronic </td>
                  <td _ngcontent-pkw-c63=""> 6-Lily </td>
                  <td _ngcontent-pkw-c63=""> 12-Soul Reapers </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Soul Reapers</td>
                  <td _ngcontent-pkw-c63="">12</td>
                  <td _ngcontent-pkw-c63=""> 5-Fighter </td>
                  <td _ngcontent-pkw-c63=""> 29-тризуб </td>
                  <td _ngcontent-pkw-c63=""> 23-1111 </td>
                  <td _ngcontent-pkw-c63=""> 17-Kamigrain </td>
                  <td _ngcontent-pkw-c63=""> 11-CCCP </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Bansh</td>
                  <td _ngcontent-pkw-c63="">13</td>
                  <td _ngcontent-pkw-c63=""> 20-StormCat </td>
                  <td _ngcontent-pkw-c63=""> 26-Die Hanse </td>
                  <td _ngcontent-pkw-c63=""> 2-Clan Destino </td>
                  <td _ngcontent-pkw-c63=""> 8-himatsubushi </td>
                  <td _ngcontent-pkw-c63=""> 14-The LIONS </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">The LIONS</td>
                  <td _ngcontent-pkw-c63="">14</td>
                  <td _ngcontent-pkw-c63=""> 7-CRYSTAL </td>
                  <td _ngcontent-pkw-c63=""> 1-Mattari </td>
                  <td _ngcontent-pkw-c63=""> 25-ppmmOmmqq </td>
                  <td _ngcontent-pkw-c63=""> 19-SKY LORDS </td>
                  <td _ngcontent-pkw-c63=""> 13-Bansh </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Death or Glory</td>
                  <td _ngcontent-pkw-c63="">15</td>
                  <td _ngcontent-pkw-c63=""> 22-Pif Paf Pouf </td>
                  <td _ngcontent-pkw-c63=""> 28-I FURIANI </td>
                  <td _ngcontent-pkw-c63=""> 4-Sax Clan </td>
                  <td _ngcontent-pkw-c63=""> 10-The Eyrie </td>
                  <td _ngcontent-pkw-c63=""> 16-MUKAKIN-MUGON </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">MUKAKIN-MUGON</td>
                  <td _ngcontent-pkw-c63="">16</td>
                  <td _ngcontent-pkw-c63=""> 9-Belgique </td>
                  <td _ngcontent-pkw-c63=""> 3-Велес </td>
                  <td _ngcontent-pkw-c63=""> 27-Schriese </td>
                  <td _ngcontent-pkw-c63=""> 21-Einfach so </td>
                  <td _ngcontent-pkw-c63=""> 15-Death or Glory </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Kamigrain</td>
                  <td _ngcontent-pkw-c63="">17</td>
                  <td _ngcontent-pkw-c63=""> 24-ЛЕВ </td>
                  <td _ngcontent-pkw-c63=""> 30-Team Heronic </td>
                  <td _ngcontent-pkw-c63=""> 6-Lily </td>
                  <td _ngcontent-pkw-c63=""> 12-Soul Reapers </td>
                  <td _ngcontent-pkw-c63=""> 18-Перун </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Перун</td>
                  <td _ngcontent-pkw-c63="">18</td>
                  <td _ngcontent-pkw-c63=""> 11-CCCP </td>
                  <td _ngcontent-pkw-c63=""> 5-Fighter </td>
                  <td _ngcontent-pkw-c63=""> 29-тризуб </td>
                  <td _ngcontent-pkw-c63=""> 23-1111 </td>
                  <td _ngcontent-pkw-c63=""> 17-Kamigrain </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">SKY LORDS</td>
                  <td _ngcontent-pkw-c63="">19</td>
                  <td _ngcontent-pkw-c63=""> 26-Die Hanse </td>
                  <td _ngcontent-pkw-c63=""> 2-Clan Destino </td>
                  <td _ngcontent-pkw-c63=""> 8-himatsubushi </td>
                  <td _ngcontent-pkw-c63=""> 14-The LIONS </td>
                  <td _ngcontent-pkw-c63=""> 20-StormCat </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">StormCat</td>
                  <td _ngcontent-pkw-c63="">20</td>
                  <td _ngcontent-pkw-c63=""> 13-Bansh </td>
                  <td _ngcontent-pkw-c63=""> 7-CRYSTAL </td>
                  <td _ngcontent-pkw-c63=""> 1-Mattari </td>
                  <td _ngcontent-pkw-c63=""> 25-ppmmOmmqq </td>
                  <td _ngcontent-pkw-c63=""> 19-SKY LORDS </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Einfach so</td>
                  <td _ngcontent-pkw-c63="">21</td>
                  <td _ngcontent-pkw-c63=""> 28-I FURIANI </td>
                  <td _ngcontent-pkw-c63=""> 4-Sax Clan </td>
                  <td _ngcontent-pkw-c63=""> 10-The Eyrie </td>
                  <td _ngcontent-pkw-c63=""> 16-MUKAKIN-MUGON </td>
                  <td _ngcontent-pkw-c63=""> 22-Pif Paf Pouf </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Pif Paf Pouf</td>
                  <td _ngcontent-pkw-c63="">22</td>
                  <td _ngcontent-pkw-c63=""> 15-Death or Glory </td>
                  <td _ngcontent-pkw-c63=""> 9-Belgique </td>
                  <td _ngcontent-pkw-c63=""> 3-Велес </td>
                  <td _ngcontent-pkw-c63=""> 27-Schriese </td>
                  <td _ngcontent-pkw-c63=""> 21-Einfach so </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">1111</td>
                  <td _ngcontent-pkw-c63="">23</td>
                  <td _ngcontent-pkw-c63=""> 30-Team Heronic </td>
                  <td _ngcontent-pkw-c63=""> 6-Lily </td>
                  <td _ngcontent-pkw-c63=""> 12-Soul Reapers </td>
                  <td _ngcontent-pkw-c63=""> 18-Перун </td>
                  <td _ngcontent-pkw-c63=""> 24-ЛЕВ </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">ЛЕВ</td>
                  <td _ngcontent-pkw-c63="">24</td>
                  <td _ngcontent-pkw-c63=""> 17-Kamigrain </td>
                  <td _ngcontent-pkw-c63=""> 11-CCCP </td>
                  <td _ngcontent-pkw-c63=""> 5-Fighter </td>
                  <td _ngcontent-pkw-c63=""> 29-тризуб </td>
                  <td _ngcontent-pkw-c63=""> 23-1111 </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">ppmmOmmqq</td>
                  <td _ngcontent-pkw-c63="">25</td>
                  <td _ngcontent-pkw-c63=""> 2-Clan Destino </td>
                  <td _ngcontent-pkw-c63=""> 8-himatsubushi </td>
                  <td _ngcontent-pkw-c63=""> 14-The LIONS </td>
                  <td _ngcontent-pkw-c63=""> 20-StormCat </td>
                  <td _ngcontent-pkw-c63=""> 26-Die Hanse </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Die Hanse</td>
                  <td _ngcontent-pkw-c63="">26</td>
                  <td _ngcontent-pkw-c63=""> 19-SKY LORDS </td>
                  <td _ngcontent-pkw-c63=""> 13-Bansh </td>
                  <td _ngcontent-pkw-c63=""> 7-CRYSTAL </td>
                  <td _ngcontent-pkw-c63=""> 1-Mattari </td>
                  <td _ngcontent-pkw-c63=""> 25-ppmmOmmqq </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Schriese</td>
                  <td _ngcontent-pkw-c63="">27</td>
                  <td _ngcontent-pkw-c63=""> 4-Sax Clan </td>
                  <td _ngcontent-pkw-c63=""> 10-The Eyrie </td>
                  <td _ngcontent-pkw-c63=""> 16-MUKAKIN-MUGON </td>
                  <td _ngcontent-pkw-c63=""> 22-Pif Paf Pouf </td>
                  <td _ngcontent-pkw-c63=""> 28-I FURIANI </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">I FURIANI</td>
                  <td _ngcontent-pkw-c63="">28</td>
                  <td _ngcontent-pkw-c63=""> 21-Einfach so </td>
                  <td _ngcontent-pkw-c63=""> 15-Death or Glory </td>
                  <td _ngcontent-pkw-c63=""> 9-Belgique </td>
                  <td _ngcontent-pkw-c63=""> 3-Велес </td>
                  <td _ngcontent-pkw-c63=""> 27-Schriese </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">тризуб</td>
                  <td _ngcontent-pkw-c63="">29</td>
                  <td _ngcontent-pkw-c63=""> 6-Lily </td>
                  <td _ngcontent-pkw-c63=""> 12-Soul Reapers </td>
                  <td _ngcontent-pkw-c63=""> 18-Перун </td>
                  <td _ngcontent-pkw-c63=""> 24-ЛЕВ </td>
                  <td _ngcontent-pkw-c63=""> 30-Team Heronic </td>
                </tr>
                <tr _ngcontent-pkw-c63="">
                  <td _ngcontent-pkw-c63="">Team Heronic</td>
                  <td _ngcontent-pkw-c63="">30</td>
                  <td _ngcontent-pkw-c63=""> 23-1111 </td>
                  <td _ngcontent-pkw-c63=""> 17-Kamigrain </td>
                  <td _ngcontent-pkw-c63=""> 11-CCCP </td>
                  <td _ngcontent-pkw-c63=""> 5-Fighter </td>
                  <td _ngcontent-pkw-c63=""> 29-тризуб </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
};

export default Teams;
