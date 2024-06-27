import React from "react";
import {useNavigate} from "react-router-dom";
import styles from '../styles/navigation-buttons.module.css'
import nextIcon from '../elements/images/next-icon.png'
import backIcon from '../elements/images/back-icon.png'

const NavigationButtons = ({backPath, nextPath}) => {
    const navigate = useNavigate();

    const handleBack = () => {
        console.log('back')
        navigate(backPath);
    }
    const handleNext = () => {
        console.log('next')
        if (typeof nextPath === "function") {
            nextPath();
        } else {
            navigate (nextPath);
        }
    }


    return (
        <div className={styles.buttonContainer}>
            {backPath && (
                <button onClick ={handleBack} className={styles.button}>
                    <img src={backIcon} alt="Back" className={styles.icon}/>
                </button>
            )}
            {nextPath && (
                <button onClick={handleNext} className={styles.button}>
                    <img src={nextIcon} alt="Next" className={styles.icon}/>
                </button>
            )}

            {}
        </div>
    );
};

export default NavigationButtons;