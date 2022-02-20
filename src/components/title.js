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
            <img src={logo} width={48} alt={"athena flag"}/>
            <div className={styles.text}>

                <h3 onMouseOver={() => setVersion(false)} onMouseLeave={()=>setVersion(true)}> Athena <span style={{fontSize: "10px"}} hidden={versionShow}>{json.version}</span></h3>
                <h5>{users.length} members</h5>


            </div>
        </div>
    )
}

export default Title
