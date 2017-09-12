import axios from 'axios';

const API_KEY = '8b88c81afe517a49f9eb1ad5cf428b69';
const ROOT_URL = `http://samples.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city){
	const url = `${ROOT_URL}&q=${city},us`;
	const request = axios.get(url);
	axios.defaults.withCredentials = true;
	return({
		type: FETCH_WEATHER,
		payload : request
	});
}