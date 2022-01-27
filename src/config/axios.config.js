import axios from 'axios'

class Instance {

  static instance = () => axios.create({
    baseURL: 'http://localhost:8080/'
  })
  static instanceWeather = () => axios.create({
    baseURL: 'https://api.openweathermap.org'
  })
}
export default Instance
