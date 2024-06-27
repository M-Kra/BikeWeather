import {useEffect} from "react";
import  {getWeather} from "./WeatherService";


const MudChance = ({coordinates, elevationGain, setTemperature, setMudChance}) => {
const calculateMudChance = (weatherData,elevationData ) => {
    let mudChance = 0;

    if (weatherData.rain) {
        mudChance += weatherData.rain['1h'] ? weatherData.rain['1h'] * 10 : 0;
        mudChance += weatherData.rain['3h'] ? weatherData.rain['3h'] * 5 : 0;
    }

    if (weatherData.main && weatherData.main.humidity) {
        mudChance += weatherData.main.humidity * 0.1;
    }

    if (elevationData) {
        mudChance += elevationData * 0.05;
    }

    if (mudChance > 100) mudChance = 100;

    return mudChance.toFixed(2);
}


    useEffect (() => {
        if (coordinates.lat !== null && coordinates.lng !== null) {
            const fetchWeather = async () => {
                const weatherData = await getWeather (coordinates.lat, coordinates.lng);
                if (weatherData) {
                    setTemperature (weatherData.main.temp)
                    const mudChance = calculateMudChance(weatherData, elevationGain);
                    setMudChance(mudChance);
                }
            };
            fetchWeather ();
        }
    }, [coordinates, elevationGain, setTemperature, setMudChance]);

    return null;
}

export default MudChance;