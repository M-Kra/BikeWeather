const API_KEY = '1bce8dd788c25a052d109b3db8299cd8';

export const getWeather = async (lat, lon) => {
    try {
        const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${API_KEY}`
        );
        if (!response.ok) {
            throw new Error('-err');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error(error);
        return null;
    }
};

