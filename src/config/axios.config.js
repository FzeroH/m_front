import axios from 'axios'

class Instance {
  static instanceCurrency = () => axios.create({
    baseURL: 'http://localhost:8080/'
  })

  static instanceWeather = () => axios.create({
    baseURL: 'https://api.openweathermap.org'
  })

  static instanceAuth = () => axios.create({
    baseURL: 'https://auth-base-learn.herokuapp.com/'
  })
}
export default Instance
