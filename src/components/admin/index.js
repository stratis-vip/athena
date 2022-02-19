import {useDispatch} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import AdminUsers from "./ad-user";
import styles from './admin.module.css'
import AdminTeams from "./ad-teams";
import AdminAthena from "./ad-athena";
import AdminOptions from "./ad-options";
import {DateTime} from "luxon";

const Index = () => {
    const dispatch = useDispatch()


    const {user, isAuthenticated, loginWithRedirect, logout} = useAuth0();
    if (isAuthenticated) {
        return (<div>
                <h1 className={styles.title}>Admin page for week {DateTime.utc().startOf('week').toISODate()}</h1>
                <div className={styles.container}>
                    <AdminAthena />
                    <AdminOptions />
                    <AdminUsers/>
                    <AdminTeams/>
                </div>
            </div>
        )
    } else {
        return (<div>
            <h1>Administration page.</h1><h2>You must be logged in to proceed.</h2>
            <button onClick={() => loginWithRedirect({redirectUri: "http://localhost:3000/admin"})}>Log In
            </button>
        </div>)
    }
}

export default Index
