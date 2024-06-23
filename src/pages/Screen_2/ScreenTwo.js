import React, {useState, useEffect} from "react";
import styles from './ScreenTwo.module.css'
import {useNavigate, useLocation} from 'react-router-dom'
import TrialSelector from '../../components/TrialSelector'
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';

const ScreenTwo = () => {
    const [buttons, setButtons] = useState ([]);
    const navigate = useNavigate ();
    const location = useLocation ();
    const {selectedButtons} = location.state;

    useEffect (() => {
        const getSelectedTrial = (selections) => {
            const {1: loc, 2: bike, 3: skills} = selections;
            const trail = TrialSelector[ loc ]?.[ bike ]?.[ skills ];
            if (trail) {
                return {
                    id: 1,
                    trailName: trail.trailName,
                    distance: trail.distance,
                    chanceOfMud: 'N/A',
                    gpxFile: trail.path,
                };
            } else {
                return {
                    id: 1,
                    trailName: "No trail found",
                    distance: 0,
                    chanceOfMud: "Unknown"
                }
            }
        }

        const buttonsData = [getSelectedTrial (selectedButtons)];
        setButtons (buttonsData);
    }, [selectedButtons]);


    const goToScreenThree = () => {
        if (buttons.length > 0) {
            const {gpxFile, trailName} = buttons[ 0 ];
            navigate ('/screen-three', {state: {gpxFile, trailName}});
        }
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
                {buttons.map ((button, index) => (
                    <div key={index} className={styles.buttonItem}>
                        <p>{button.trailName}</p>
                        <p>{button.distance}km</p>
                        <p>{button.chanceOfMud}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ScreenTwo;