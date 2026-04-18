import axios from 'axios'
const allUrl = 'https://studies.cs.helsinki.fi/restcountries/api/all'
const baseUrl = "https://studies.cs.helsinki.fi/restcountries/api"
const weatherUrl= "https://api.openweathermap.org/data/2.5/weather?q="
//https://api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
const getAll = () => {
  const request = axios.get(allUrl)
  return request.then(response => {
    return response.data
  })
}


const COOLDOWN_MS = 3000
let lastWeatherRequestAt = 0
let weatherRequestsBlocked = false

const getCityWeather = (city) => {
  if (city == null || city === '') {
    return Promise.resolve(null)
  }

  if (weatherRequestsBlocked) {
    return Promise.reject(new Error('Weather requests blocked, reload page'))
  }

  const now = Date.now()
  if (now - lastWeatherRequestAt < COOLDOWN_MS) {
    weatherRequestsBlocked = true
    return Promise.reject(new Error('Weather requests blocked, reload page'))
  }

  lastWeatherRequestAt = now

  const requestUrl = `${weatherUrl}${encodeURIComponent(city)}&appid=${import.meta.env.VITE_WEATHER_KEY}`
  console.log('request url:', requestUrl)

  const request = axios.get(requestUrl)
  return request.then(response => response.data)
}
    


// const create = newObject => {
//   const request = axios.post(baseUrl, newObject)
//   return request.then(response => { 
//     return response.data
//   })
// }

// const update = (id, newObject) => {
//   const request = axios.put(`${baseUrl}/${id}`, newObject)
//   return request.then(response => response.data)
// }

export default { 
  getAll,
  getCityWeather
}