import logo from "../athena.png";
import React from "react";
import {useSelector} from "react-redux";
import styles from './title.module.css'

const Title = () => {
    const users = useSelector(state => state.users.users)

    return (
        <div className={styles.container}>
            <img src={logo}/>
            <div>
                <h1>Athena </h1>
                <h4>{users.length} members</h4>
            </div>
        </div>
    )
}

export default Title
