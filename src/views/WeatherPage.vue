<template>
  <input placeholder="Введите название города" type="text" v-model="cityName" @change.prevent="getWeather(cityName)"/>
  <WeatherItem :name="name" :image="image" :temp="temp" v-if=" name !== '' "/>
  <h3 v-else>Пусто</h3>
</template>

<script>
import WeatherItem from '../components/WeatherItem'
import { ref } from 'vue'
import WeatherService from "../api/WeatherService";

export default {
  name: 'WeatherPage',
  components: { WeatherItem },

  setup(){
    const name = ref('')
    const temp = ref()
    const image = ref('')
    let cityName = ref('')

    const getWeather = async (city) => {
      await WeatherService.getWeather(city)
          .then((res) => {
            temp.value = parseInt(`${res.main.temp - 273.15}`)
            name.value = res.name
            image.value = res.weather[0].icon
          })
          .catch((err) => console.error(err.message))
    }
    return { getWeather, name, temp, image, cityName }
  },
}
</script>

<style scoped>
input {
  margin: 30px 0 0 25%;
  width: 50%;
  padding: 20px 10px;
  border: 1px solid #1C2029;
  border-radius: 10px;
  color: #ECEFF4;
  background: #1C2029;
  font-size: 18px;
  font-weight: 200;
}
h3 {
  text-align: center;
  margin-top: 10%;
  color: #ECEFF4;
  font-size: 48px;
  font-weight: 200;
}
</style>
