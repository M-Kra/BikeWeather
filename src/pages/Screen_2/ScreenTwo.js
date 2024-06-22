import React, {useState, useEffect} from "react";
import styles from './ScreenTwo.module.css'
import {useNavigate } from 'react-router-dom'
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';

const ScreenTwo = () => {
    const [buttons, setButtons] = useState ([]);
    const navigate = useNavigate();

    useEffect (() => {
        const buttonsData = [
            {id: 1, trailName: 'Zajecznik', distance: 25.8, chanceOfMud:'possible'},

        ];

        setButtons (buttonsData);
    }, [<label for="123"></label>]);

    const goToScreenThree = () => {
        navigate('/screen-three');
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