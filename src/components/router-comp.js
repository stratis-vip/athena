import {
  BrowserRouter as Router,
  Link,
  Outlet,
  Route,
  Routes,
} from "react-router-dom";
// import Template from "./template";
import Teams from "./teams";
import Users from "./users";
import Rules from "./rules";
import Adventures from "./adv/adventures";
import React from "react";
// import {useDispatch} from "react-redux";
import { useAuth0 } from "@auth0/auth0-react";
import Admin from "./admin";
import Spinner from "./spiner";
import Title from "./title";
import styles from "./router-comp.module.css";
import commonStyles from "./common.module.css";

const homePage = "http://localhost:3000/";
const RouterComponent = () => {
  const { isAuthenticated, logout } = useAuth0();

  return (
    <Router>
      <div className={styles.navBar}>
        <div className={styles.left}>
          <div className={styles.item}>
            <Title />
          </div>
        </div>
        <div className={styles.right}>
          <div className={styles.item}>
            <Link className="text-xl" to="/">
              Home
            </Link>
          </div>
          <div className={styles.item}>
            <Link className="text-xl" to="/rules">
              Rules
            </Link>
          </div>
          <div className={styles.item}>
            <Link className="text-xl" to="/adventures">
              Adventures
            </Link>
          </div>

          <div className={styles.item}>
            <Link className="text-xl" to="/program">
              War Schedule
            </Link>
          </div>
          <div className={styles.item}>
            <Link className="text-xl" to="/users">
              Time Table
            </Link>
          </div>
          {/* <div className={styles.item}>
                        <Link to="/admin">{isAuthenticated === false
                            ? "Admin"
                            : <>Admin: <button onClick={() => logout({returnTo: homePage + "admin"})}>Log
                                out</button></>}</Link>
                    </div> */}
        </div>
      </div>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="program" element={<Teams />} />
        <Route path="users" element={<Users />} />
        {/* <Route path="admin" element={<Admin/>}/> */}

        <Route path="rules" element={<Rules />} />
        <Route path="adventures" element={<Adventures />} />
      </Routes>

      <Spinner />

      <Outlet />
      {/*<div className="App">*/}
      {/*    <Title/>*/}
      {/*    <ImportComponent/>*/}
      {/*    /!*<War />*!/*/}
      {/*    <Users/>*/}
      {/*<Teams/>*/}
      {/*</div>*/}
    </Router>
  );
};
const news = [
  {
    date: "08 August 2022",
    text: `We are for 4th week at Silver!`,
    place: 9,
    points: 3789,
  },
  {
    date: "13 August 2022",
    text: `Transit team "new athena" created by stratis. 5 members left the team to staff new athena.`,
  },
  {
    date: "14 August 2022",
    text: `We are for 5th week at Silver!`,
    place: 7,
    points: 4164,
  },
  {
    date: "19 August 2022",
    text: `Rules for the team are added. Check the menu item "Rules"`,
  },
  {
    date: "21 August 2022",
    text: `Paths for adventures added. Check the menu item "Adventures"`,
  },
  {
    date: "21 August 2022",
    text: `Merge with athena completed`,
  },
  {
    date: "21 August 2022",
    text: `We start from 29th place at Bronze to promote to Silver!`,
  },
].reverse();

function Home() {
  return (
    <div className={commonStyles.container}>
      <div className="text-3xl text-center max-w-2xl">News</div>
      {news.map((neo, index) => (
        <div key={index} className="mt-3 text-lg text-left">
          <span className="font-bold">{neo.date}:</span> {neo.text}
          {neo.place && <span> ({neo.place}th place</span>}
          {neo.place && neo.points ? ` with ${neo.points} points)` : ""}
        </div>
      ))}
    </div>
  );
}

export default RouterComponent;
