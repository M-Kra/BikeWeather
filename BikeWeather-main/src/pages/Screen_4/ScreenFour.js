import React, { useContext} from "react";
import styles from "./ScreenFour.module.css";
import bikeWeatherLogo from "../../elements/images/bike-weather-logo.png";
import MapComponent from "../../components/MapComponent";
import NavigationButtons from "../../components/NavigationButtons";
import {TrailContext} from "../../components/TrailContext";

const ScreenFour = () => {
    const {trail} = useContext(TrailContext);

        if (!trail.gpxFile) {
            return <div className={styles.container4}>No data tu 4</div>
        }

    const {gpxFile, trailName} =trail;

    return(
        <div>
            <div className={styles.container4}>
                <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo4}/>
                <div className={styles.trailTitle4}>
                    <h1>{trailName}</h1>
                </div>
                <div className={styles.mapContainer4}>
                    <MapComponent center={[50.910827, 15.349617]} zoom={10} gpxFile={gpxFile}/>
                </div>
            </div>
            <NavigationButtons backPath='/screen-three'/>
        </div>
    );
};

export default ScreenFour;