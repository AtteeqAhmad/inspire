import WeatherService from "./weather-service.js";

var _weatherService = new WeatherService()

function drawWeather() {
	let weatherElem = document.querySelector('#weather')
	let weather = _weatherService.Weather
	let template = ''
	weatherElem.innerHTML = weather.Template
	// weather.forEach(weather => template +=
	// 	weatherElem.innerHTML = template
	// )
	console.log("THE WEATHER MAN SAYS:", _weatherService.Weather)
}

export default class WeatherController {

	constructor() {
		_weatherService.addSubscriber('weather', drawWeather)
		_weatherService.getWeather()
	}

}
