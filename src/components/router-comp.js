import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import Template from "./template";
import Teams from "../features/teams";
import Users from "../features/users";
import React from "react";
import {useDispatch} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import Admin from "./admin";

const homePage = "http://localhost:3000/"
const RouterComponent = () => {
    const {isAuthenticated, logout} = useAuth0()

    return (
        <Router>
            <div className={"navBar"}>
                <div className={"menu"}>
                    <div className={"item"}>
                        <Link to="/">Home</Link>
                    </div>
                    <div className={"item"}>
                        <Link to="/program">War Schedule</Link>
                    </div>
                    <div className={"item"}>
                        <Link to="/users">Time Table</Link>
                    </div>
                    <div className={"item"}>
                        <Link to="/admin">{isAuthenticated === false
                            ? "Admin"
                            : <>Admin: <button onClick={() => logout({returnTo: homePage + "admin"})}>Log
                                out</button></>}</Link>
                    </div>
                </div>
            </div>

            <Switch>
                <Route path="/program">
                    <Template><Teams/></Template>
                </Route>
                <Route path="/users">
                    <Template><Users/></Template>
                </Route>
                <Route path="/admin">
                    <Admin/>
                </Route>

                <Route path="/">
                    <Template><Home/></Template>
                </Route>
            </Switch>
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
            {/*    <Teams/>*/
            }
            {/*</div>*/
            }
        </Router>
    )
}


function Home() {
    return (
        <div className="App">
            <h2>We are currently at bronze (2th place)</h2>
        </div>
    )
}



export default RouterComponent
