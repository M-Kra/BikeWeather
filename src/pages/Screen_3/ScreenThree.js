import React from "react";
import styles from "../Screen_3/ScreenThree.module.css"
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';



const ScreenThree = () => {

    return(
        <div>
            <div className={styles.container3}>

            <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo3}/>
            </div>
        </div>
    );
}

export default ScreenThree;