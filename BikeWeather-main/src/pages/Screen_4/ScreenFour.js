import React, { useContext} from "react";
import styles from "./ScreenFour.module.css";
import {useNavigate} from 'react-router-dom'
import bikeWeatherLogo from "../../elements/images/bike-weather-logo.png";
import MapComponent from "../../components/MapComponent";
import NavigationButtons from "../../components/NavigationButtons";
import {TrailContext} from "../../components/TrailContext";
import closeIcon from '../../elements/images/close.png'


const ScreenFour = () => {
    const {trail} = useContext(TrailContext);
    const navigate = useNavigate ();


    if (!trail.gpxFile) {
            return <div className={styles.container4}>No data tu 4</div>
        }

    const {gpxFile, trailName} =trail;

    const handleClose = () => {
        navigate('/');
    };



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
                <div className={styles.buttonContainer}>
                    <button className={styles.button} onClick={handleClose}>
                        <img src={closeIcon} alt="Exit" className={styles.icon}/>
                    </button>
                </div>

            </div>
            <NavigationButtons backPath='/screen-three'/>
        </div>
    );
};

export default ScreenFour;