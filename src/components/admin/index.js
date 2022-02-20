// import {useDispatch} from "react-redux";
import {useAuth0} from "@auth0/auth0-react";
import React from "react";
import AdminUsers from "./ad-user";
import styles from './admin.module.css'
import AdminTeams from "./ad-teams";
import AdminAthena from "./ad-athena";
import AdminOptions from "./ad-options";
import {DateTime} from "luxon";
import commonStyles from '../common.module.css'

const Index = () => {
    // const dispatch = useDispatch()


    const { isAuthenticated, loginWithRedirect} = useAuth0();
    if (isAuthenticated) {
        return (<div className={commonStyles.containerVert}>
                <h2 className={styles.title}>Admin page for week {DateTime.utc().startOf('week').toISODate()}</h2>
                <div className={styles.container}>
                    <AdminAthena />
                    <AdminOptions />
                    <AdminUsers/>
                    <AdminTeams/>
                </div>
            </div>
        )
    } else {
        return (<div className={`${commonStyles.container} ${commonStyles.Vertical}`}>
            <h3>Administration page.</h3><h4>You must be logged in to proceed.</h4>
            <button onClick={() => loginWithRedirect({redirectUri: "http://localhost:3000/admin"})}>Log In
            </button>
        </div>)
    }
}

export default Index
