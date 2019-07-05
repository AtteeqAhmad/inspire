import Weather from "../../models/weather.js";

// @ts-ignore
const _weatherApi = axios.create({
	baseURL: "//bcw-sandbox.herokuapp.com/api/weather",
	timeout: 3000
});

let _state = {
	weather: {},
	wind: {},
	description: {},
}

let _subscribers = {
	weather: [],
	wind: [],
	description: [],
}

function _setState(prop, data) {
	_state[prop] = data
	_subscribers[prop].forEach(fn => fn());
}


export default class WeatherService {
	get Weather() {
		return _state.weather
	}

	addSubscriber(prop, fn) {
		_subscribers[prop].push(fn)
	}

	getWeather() {
		console.log('Calling the Weatherman')
		_weatherApi.get().then(res => {
			_setState('weather', new Weather(res.data))
		})
	}
}
