import React, {useContext} from "react";
import { useNavigate} from 'react-router-dom';
import styles from "../Screen_3/ScreenThree.module.css";
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';
import MapComponent from '../../components/MapComponent'
import NavigationButtons from "../../components/NavigationButtons";
import {TrailContext} from "../../components/TrailContext";


const ScreenThree = () => {
    const navigate = useNavigate();
    const {trail} = useContext(TrailContext);

        if (!trail.gpxFile) {
        return <div className={styles.container3}>No data 3</div>
    }

    const {gpxFile, trailName} = trail;

    const goToScreenFour = () => {
        navigate('/screen-four');
    }

    return(
        <div>
            <div className={styles.container3}>
            <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo3}/>
                <div className={styles.trailTitle3}>
                    <h1>{trailName}</h1>
                </div>
                <div className={styles.mapContainer}>
                    <MapComponent center={[50.910827, 15.349617]} zoom={10} gpxFile={gpxFile}/>
                </div>
            </div>
            <NavigationButtons backPath='/screen-two' nextPath={goToScreenFour}/>
        </div>
    );
}

export default ScreenThree;