import React from "react";
import styles from './ScreenTwo.module.css'
import {useNavigate} from 'react-router-dom'
import {getSelectedTrial} from "../../components/TrialSelector";
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';

const ScreenTwo = ({location, bike, skills}) => {
    const navigate = useNavigate ();
    const trail = getSelectedTrial(location, bike, skills);

    const goToScreenThree = () => {
            navigate ('/screen-three', {state: {gpxFile: trail.file, trailName: trail.trailName}});
        };

    if (!trail) {
        return <div className={styles.container2}>Please select all options</div>;
    }

    return (
        <div className={styles.container2}>
            <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo}/>
            <div className={styles.buttonContainer} onClick={goToScreenThree}>
                <div className={styles.buttonItem}>
                    <span>Trial Name:</span>
                    <span>Distance:</span>
                    <span>Chance of Mud:</span>
                </div>
                    <div className={styles.buttonItem}>
                        <p>{trail.trailName}</p>
                        <p>{trail.distance}km</p>
                        <p>N/A</p>
                    </div>
            </div>
        </div>
    );
}

export default ScreenTwo;