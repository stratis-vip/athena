import logo from "../athena.png";
import React, {useState} from "react";
import {useSelector} from "react-redux";
import styles from './title.module.css'
import json from '../../package.json'

const Title = () => {
    const users = useSelector(state => state.users.users)
    const [versionShow, setVersion] = useState(true)

    return (
        <div className={styles.container}>
            <img src={logo}/>
            <div>

                <h1 onMouseOver={() => setVersion(false)} onMouseLeave={()=>setVersion(true)}> Athena </h1>
                <h4>{users.length} members</h4>
                <h5 hidden={versionShow}>version: {json.version}</h5>

            </div>
        </div>
    )
}

export default Title
