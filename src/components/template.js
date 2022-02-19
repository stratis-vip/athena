import Title from "./title";
import styles from "./template.module.css"
import Spinner from "./spiner";
import React from "react";

const Template = ({children}) => {
    return (<div className={styles.mainContainer}>



        {children}
    </div>)
}

export  default Template
