import React from "react";
import "../../elements/images/bikeweather_logo.png"
import {Location, TypeOfBike, Skills, LetStart} from 'src/elements/buttons';
// import {TypeOfBike} from "../../elements/button/TypeOfBike";
// import {Skills} from "../../elements/button/Skills";
// import {LetStart} from "../../elements/button/LetStart";
import styles from "./Screen.module.css"
// import style from "../../App.css"

export const Screen = () => {
    return (
    return (
        <div className={styles.screen}>
            <div className={styles.div2}>
                <div className={styles.bikeWeatherLogoWrapper}>
                    <img src={bikeweatherLogo} alt="Bike Weather Logo" />
                </div>
                <LetStart className={styles.letStartInstance} />
                <div className={styles.locationWrapper}>
                    <Location className={styles.locationInstance} />
                </div>
                <div className={styles.homeButton} />
                <TypeOfBike className={styles.typeOfBikeInstance} />
                <Skills className={styles.skillsInstance} />
            </div>
        </div>
    );
};

