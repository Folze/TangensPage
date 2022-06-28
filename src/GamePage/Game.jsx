import React from "react";
// import { NavLink } from "react-router-dom";
import gif from "../assets/gif.gif"
import Navbar from "../MainPage/Navbar/Navbar";
import s from "./Game.module.scss";

const Games = () => {
    return (
        <div className={s.hs}>
            <Navbar />
            <div className={s.games}>
                <div className={s.game1}>
                    <img src={gif} alt="gifka"></img>
                </div>
                <div className={s.game2}>
                    <img src={gif} alt="gifka"></img>
                </div>
                <div className={s.game3}>
                    <img src={gif} alt="gifka"></img>
                </div>
            </div>
        </div>
    )
}

export default Games