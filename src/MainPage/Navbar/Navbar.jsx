import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            {/* <div className={styles.logo}> */}
            {/* <img src='/' /> */}
            {/* </div> */}

            {/* 1 кнопка */}
            <div className={styles.button}>
                <NavLink to="/">
                    <div>
                        <button className={styles.buttonFour}>
                            <span></span><span></span><span></span><span></span>
                            Главная
                        </button>
                    </div>
                </NavLink>
                {/* 2 кнока */}

                <NavLink to="/Blog">
                    <button className={styles.buttonFour}>
                        <span></span><span></span><span></span><span></span>
                        Блог
                    </button>
                </NavLink>

                {/* 3 Кнопка */}

                <NavLink to="/Games">
                    <button className={styles.buttonFour}>
                        <span></span><span></span><span></span><span></span>
                        Игры
                    </button>
                </NavLink>

                {/* 4 кнопка */}

                <NavLink to="/Information">
                    <button className={styles.buttonFour}>
                        <span></span><span></span><span></span><span></span>
                        Информация
                    </button>
                </NavLink>

            </div>
        </div >
    )
}

export default Navbar