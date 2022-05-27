import React from "react";
import { NavLink } from "react-router-dom";
import Navbar from "../MainPage/Navbar/Navbar";
import s from "./Blog.module.scss"

const Blog = () => {
    return (
        <div className={s.background}>
            <Navbar />
        </div>

    )
}

export default Blog