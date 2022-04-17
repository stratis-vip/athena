import {BrowserRouter as Router, Link, Outlet, Route, Routes} from "react-router-dom";
// import Template from "./template";
import Teams from "../features/teams";
import Users from "../features/users";
import React from "react";
// import {useDispatch} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import Admin from "./admin";
import Spinner from "./spiner";
import Title from "./title";
import styles from './router-comp.module.css'
import commonStyles from './common.module.css'

const homePage = "http://localhost:3000/"
const RouterComponent = () => {
    const {isAuthenticated, logout} = useAuth0()

    return (
        <Router>

            <div className={styles.navBar}>
                <div className={styles.left}>
                    <div className={styles.item}>
                        <Title/>
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.item}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/program">War Schedule</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/users">Time Table</Link>
                    </div>
                    <div className={styles.item}>
                        <Link to="/admin">{isAuthenticated === false
                            ? "Admin"
                            : <>Admin: <button onClick={() => logout({returnTo: homePage + "admin"})}>Log
                                out</button></>}</Link>
                    </div>
                </div>

            </div>


            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="program" element={<Teams/>}/>
                <Route path="users" element={
                    <Users/>}/>
                <Route path="admin" element={<Admin/>}/>


            </Routes>

            <Spinner/>

            <Outlet/>
            {/*<div className="App">*/
            }
            {/*    <Title/>*/
            }
            {/*    <ImportComponent/>*/
            }
            {/*    /!*<War />*!/*/
            }
            {/*    <Users/>*/
            }
              {/*<Teams/>*/}
            {/*</div>*/
            }
        </Router>
    )
}


function Home() {
    return (
        <div className={commonStyles.container}>
            <h3>We are at Bronze! (1st place)</h3>
        </div>
    )
}


export default RouterComponent
