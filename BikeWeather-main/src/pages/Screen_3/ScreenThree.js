import React, {useContext, useEffect, useState} from "react";
import { useNavigate} from 'react-router-dom';
import styles from "../Screen_3/ScreenThree.module.css";
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';
import MapComponent from '../../components/MapComponent'
import NavigationButtons from "../../components/NavigationButtons";
import {TrailContext} from "../../components/TrailContext";
import MudChance from "../../components/MudChance";

const ScreenThree = () => {
    const navigate = useNavigate();
    const {trail} = useContext(TrailContext);
    const [elevationData, setElevationData] = useState({elevationGain: null});
    const [temperature, setTemperature] = useState(null);
    const [coordinates, setCoordinates] = useState({lat: null, lng: null});
    const [mudChance, setMudChance] = useState (null);


    if (!trail.gpxFile) {
        return <div className={styles.container3}>No data 3</div>
    }

    const {gpxFile, trailName, distance} = trail;

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
                    <MapComponent center={[50.910827, 15.349617]} zoom={10} gpxFile={gpxFile} setElevationData={setElevationData} setCoordinates={setCoordinates}/>
                </div>
                <div className={styles.infoContainer}>
                    <div className={styles.infoItem}>
                        <span>Distance </span>
                        <span>Elevation Gain </span>
                    </div>
                    <div className={styles.infoItem}>
                        <span>{distance}km</span>
                        <span>{elevationData.elevationGain !== null ? `${elevationData.elevationGain.toFixed(2)} m` : '-'}</span>

                    </div>
                    <div className={styles.infoItem2}>
                        <span>Temperature</span>
                        <span>Chance of mud</span>
                    </div>
                    <div className={styles.infoItem2}>
                        <span>{temperature !==null ? `${temperature}°C` : "-"}</span>
                        <span>{mudChance !==null ? `${mudChance}%`: "-"} </span>
                    </div>
                    <MudChance coordinates={coordinates} elevationGain={elevationData.elevationGain} setTemperature={setTemperature} setMudChance={setMudChance} />
                </div>
            </div>
            <NavigationButtons backPath='/screen-two' nextPath={goToScreenFour}/>
        </div>
    );
}

export default ScreenThree;