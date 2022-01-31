import Instance from "../config/axios.config"


class WeatherService {

  static getWeather = (city) => new Promise((resolve, reject) => {
    Instance.instanceWeather().get(`/data/2.5/weather?q=${city}&appid=5e4a05e8cecaef61330a6228b7e30f6a&lang=ru`)
      .then(res => resolve(res.data))
      .catch(e => reject(e))
  })
}
export default WeatherService
