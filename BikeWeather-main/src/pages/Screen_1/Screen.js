import React from 'react';
import {useNavigate } from 'react-router-dom'
import Selections from "../../components/Selections";
import styles from './Screen.module.css';
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';

const buttonsData = [
    {id: 'location', label: 'LOCATION', options: ['swieradow', 'N/A', 'N/A']},
    {id: 'bike', label: 'TYPE OF BIKE', options: ['gravel', 'trail', 'enduro']},
    {id: 'skills', label: 'SKILLS', options: ['beginner', 'intermediate', 'advanced']},
];


export const Screen = ({setLocation, setBike, setSkills}) => {
    const {toggleDropdown, handleSelected, expandedButton, selectedOptions} = Selections ({ setLocation, setBike, setSkills});
    const navigate = useNavigate();

    const goToScreenTwo = () => {
        navigate('/screen-two', {state: {selectedOptions}});
    }
    
    return (
        <div className={styles.container}>
            <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo}/>
            {buttonsData.map(button => ( //literuje przez tablicę buttonData i renderuje przycisk dla każdego elem//
                <div
                    key={button.id} //uniklany klucz przycisków...//
                    className={`${styles.button} ${selectedOptions[button.id] ? styles.selected : ''}`} //? jeśli jest wybrany dodaje klase css 'selected'//
                    onClick={ () => toggleDropdown(button.id)}>
                    {button.label}
                    {expandedButton === button.id && ( //jeśli jest kliknięty rozwija tutaj listę opcji//
                        <div className={styles.dropdown}>
                            {button.options.map((item, index) => ( //literuje przez opcje buttonów i renderuje każdą opcję//
                                <div
                                key={index}
                                className={styles.dropdownItem} //jeśli jest wybrany będzie miał styl po button.id - selected//
                                onClick={() => handleSelected(button.id,item)}>
                                    {item}
                                </div> //item to tekst wyświetlany dla opcji//
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className={styles.button} onClick={goToScreenTwo}>
                LET'S START!
            </div>
        </div>
    )
};
export default Screen;