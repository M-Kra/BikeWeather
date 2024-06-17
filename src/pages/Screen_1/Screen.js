import React from "react";
import {BikeWeatherLogo} from "../../elements/images/BikeWeatherLogo"
// import {Location, TypeOfBike, Skills, LetStart} from '@/buttons';
import {TypeOfBike} from "../../elements/buttons/TypeOfBike";
import {Skills} from "../../elements/buttons/Skills";
import {LetStart} from "../../elements/buttons/LetStart";
import {Location} from "../../elements/buttons/Location"
import styles from "./Screen.module.css"
// import style from "../../App.css"


export const Screen = () => {
    return (
        <div className="screen">
            <div className="div-2">
                <div className="bike-weather-logo-wrapper">
                    <BikeWeatherLogo className="bike-weather-logo" />
                </div>
                <LetStart className="let-sstart-instance" />
                <div className="location-wrapper">
                    <Location className="location-instance" />
                </div>
                <div className="home-button" />
                <TypeOfBike className="type-of-bike-instance" />
                <Skills className="skills-instance" />
            </div>
        </div>
    );
};