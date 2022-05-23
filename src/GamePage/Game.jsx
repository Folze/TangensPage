import React from "react";
import { NavLink } from "react-router-dom";
import kisa from "../assets/kisa.jpg"
import styles from "./Game.module.scss";

const Games = () => {
    return (
        <div>
            <NavLink to="/" >
                <div className={styles.header}>
                    Back to home
                </div>
            </NavLink>
            <img src={kisa} alt="game1" />
        </div>

    )
}

export default Games