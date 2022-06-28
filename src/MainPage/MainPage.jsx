import React from "react"
// import Header from './Header/Header';
// import DanyaTangens from './DanyaTangensHeader/DanyaTangens';
import Navbar from './Navbar/Navbar';
import StartVideo from './Video/Video';
import Content from './Content/Content';
import Links from "./Links/Links";


function MainPage() {
    return (
        <div>
            <Navbar />
            <StartVideo />
            {/* <Header /> */}
            {/* <DanyaTangens /> */}
            <Content />
            <Links />
        </div>
    )
}

export default MainPage;