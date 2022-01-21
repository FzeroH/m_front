import Instance from "../config/axios.config";


class WeatherService {

  static getWeather = () => new Promise((resolve, reject) => {
    Instance.instanceWeather().get('/v2/informers?lat=52.6018624&lon=39.5906148&lang=ru_RU')
      .then(res => resolve(res.data))
      .catch(e => reject(e))
  })
}
export default WeatherService
