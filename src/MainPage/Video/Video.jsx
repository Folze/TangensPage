import React from "react";
import bgVideo from "../../assets/PirateGravity.mp4"
import styles from "./Video.module.scss"

const StartVideo = () => {
    return (
        <div className={styles.fullScreen}>
            <div className={styles.emptyMessage}>
                <div className={styles.emptyMessage2}>DanyaTangens</div>
            </div>
            <video autoPlay loop muted className={styles.fullScreenVideo}>
                <source src={bgVideo} type="video/webm" />
                <source src={bgVideo} type="video/mp4" />
            </video>

            {/* <audio></audio>  */} Если надо будет

        </div >
    )
}

export default StartVideo