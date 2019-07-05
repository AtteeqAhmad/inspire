export default class Weather {
  constructor(data) {

    // HEY FUN FACT 
    // Have you ever wanted to know the temperature measured in kelvin? That is what this data returns!
    // data.main.temp is the temperature in Kelvin
    // You should probably convert the temperature data to either F or C
    this.city = data.name
    this.kelvin = data.main.temp
    this.wind = data.wind.speed
    this.description = data.weather[0].description
    console.log('[RAW WEATHER API DATA]', data);
  }
  get Template() {
    let Weather = this.data
    return `
    <h2>City - ${this.city}</h2> 
    <h3>Temp - ${this.kelvin} °C</h3>
    <h3>Temp - ${this.kelvin = [(((this.kelvin - 273.15) * 1.8) + 32).toFixed(2)]} ℉</h3>
    <h4>Wind - ${this.wind} Mph </h4>
    <h4>Desc - ${this.description}</h4>


    `
  }


}