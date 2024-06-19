import React, {useState} from 'react';
import {Link } from 'react-router-dom'
import styles from './Screen.module.css';
import bikeWeatherLogo from '../../elements/images/bike-weather-logo.png';

const buttonsData = [
    {id: 1, label: 'LOCATION', options: ['michalowice', 'swieradow', 'szklarska poreba']},
    {id: 2, label: 'TYPE OF BIKE', options: ['gravel', 'trail', 'enduro']},
    {id: 3, label: 'SKILLS', options: ['begginer', 'intermediate', 'advanced']},
];

export const Screen = () => {
    const [selectedButtons, setSelectedButtons] = useState ({}); //stan początkowy przycisku//
    const [expandedButton, setExpandedButton] = useState (null); //stan rozwiniętego przycisku//

    const handleSelected = (buttonId, item) => {
        setSelectedButtons(prevState => ({
            ...prevState,
            [buttonId]: item
        }));
        setExpandedButton(null); // aktualizuje  stam selectedButtons rozwijanej listy menu. ExpendedButton jest na null//
        console.log(`Selected item ${item} from buttom: ${buttonId}`);

    };

    const toggleDropdown = (buttonId) => {
        setExpandedButton (expandedButton === buttonId ? null : buttonId ); //rozwnięty null, otwarty buttonId - otwiera
        // i zamyka listy menu rozwijanego. Otwiera na buttonId, a zamyka na null//
    };
    return (
        <div className={styles.container}>
            <img src={bikeWeatherLogo} alt="Bike Weather Logo" className={styles.logo}/>
            {buttonsData.map(button => ( //literuje przez tablicę buttonData i renderuje przycisk dla każdego elem//
                <div
                    key={button.id} //uniklany klucz przycisków...//
                className={`${styles.button} ${selectedButtons[button.id] ? styles.selected : ''}`} //? jeśli jest wybrany dodaje klase css 'selected'//
                onClick={ () => toggleDropdown(button.id)}>
                    {button.label}
                    {expandedButton === button.id && ( //jeśli jest kliknięty rozwija tutaj listę opcji//
                        <div className={styles.dropdown}>
                            {button.options.map((item, index) => ( //literuje przez opcje buttonów i renderuje każdą opcję//
                                <div
                                key={index}
                                className={styles.dropdownItem} //jeśli jest wybrany będzie miał styl po button.id - selected//
                                onClick={() => handleSelected(button.id,item)} >
                                    {item}
                                </div> //item to tekst wyświetlany dla opcji//
                            ))}
                        </div>
                    )}
                </div>
            ))}
            <div className={styles.button} onClick={() => window.location.href = '../Screen_Two.jsx'}>
                LET'S START!
            </div>
        </div>
    )
};