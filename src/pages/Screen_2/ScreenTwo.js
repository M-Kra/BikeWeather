import React from "react";
import styles from '../Screen_2/ScreenTwo.modules.css'
import {Rotues, Route, useParams} from 'react-router-dom';

export const ScreenTwo = () => {
    const {buttonID, option} = useParams();
//     const buttonsDataTwo =[
//         {id: 1, label: 'TRIAL_NAME', options: [ 'distance', 'chance of mud']}
//     ];

    return (
        <div className={styles.containerTwo}>
            <h1>LOCATION </h1>
            <p>Choose location </p>
            {}
        </div>
    );
};