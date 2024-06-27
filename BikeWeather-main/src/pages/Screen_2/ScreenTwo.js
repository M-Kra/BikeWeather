import React, {useContext} from "react";
import styles from './ScreenTwo.module.css'
import {useNavigate} from 'react-router-dom'
import {getSelectedTrial} from "../../components/TrialSelector";
import NavigationButtons from "../../components/NavigationButtons";
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';
import {TrailContext} from "../../components/TrailContext";

const ScreenTwo = ({location, bike, skills}) => {
    const navigate = useNavigate ();
    const {setTrail} = useContext(TrailContext);
    const trail = getSelectedTrial(location, bike, skills);

    const goToScreenThree = () => {
        setTrail ({gpxFile: trail.file, trailName: trail.trailName, distance: trail.distance});
        navigate('/screen-three')
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

        <div className={styles.hiddenContainer}>
            <NavigationButtons backPath='/'/>
        </div>
        </div>

    );
}

export default ScreenTwo;