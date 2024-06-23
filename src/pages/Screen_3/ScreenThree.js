import React from "react";
import { useLocation } from 'react-router-dom';
import styles from "../Screen_3/ScreenThree.module.css";
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';



const ScreenThree = () => {
    const location = useLocation();
    const {gpxFile, trailName} = location.state;


    return(
        <div>
            <div className={styles.container3}>
            <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo3}/>
                <div className={styles.trailTitle}>
                    <h1>{trailName}</h1>
                    <p>GPX File: {gpxFile}</p>
                </div>
            </div>
        </div>
    );
}

export default ScreenThree;