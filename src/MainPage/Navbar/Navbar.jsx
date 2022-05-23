import React from "react";
import { NavLink } from "react-router-dom";
import styles from './Navbar.module.scss'


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.header}>
                {/* <div className={styles.logo}> */}
                {/* <img src='/' /> */}
                {/* </div> */}

                {/* 1 кнопка */}
                <div className={styles.button}>
                    <button className={styles.buttonOne}>
                        <span></span><span></span><span></span><span></span>
                        Главная
                    </button>
                    {/* 2 кнока */}

                    <div>
                        <NavLink to="/Blog">
                            <button className={styles.buttonTwo}>
                                <span></span><span></span><span></span><span></span>
                                Blog
                            </button>
                        </NavLink>
                    </div>

                    {/* 3 Кнопка */}

                    <NavLink to="/Games">
                        <button className={styles.buttonThree}>
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
            </div>
        </div>
    )
}

export default Navbar