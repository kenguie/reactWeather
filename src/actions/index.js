import axios from 'axios';

const API_KEY = '45685f2436ca576e1272a4dd6796a257';
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;  // ES6 to inject variables into strings = backticks and ${}

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {

	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);

	// console.log('Request:', request);

	return {
		type: FETCH_WEATHER,
		payload: request
	}
}

// http://api.openweathermap.org/data/2.5/forecast?q=London,us&mode=&appid=45685f2436ca576e1272a4dd6796a257