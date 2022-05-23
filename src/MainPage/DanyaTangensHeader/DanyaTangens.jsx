import React from "react";
import gradient from "../../assets/gradient.png"
import styles from "./DanyaTangens.module.scss"


const DanyaTangens = () => {
    return (
        <div className={styles.gradient}>
            <img src={gradient} alt="" />
        </div>
    )

}


export default DanyaTangens