<template>
  <input placeholder="Введите название города" type="text" v-model="cityName" @change.prevent="getWeather(cityName)"/>
  <WeatherItem :name="name" :image="image" :temp="temp" v-if=" name !== '' "/>
  <h3 v-else>Пусто</h3>
</template>

<script>
import WeatherItem from '../components/WeatherItem'
import { ref } from 'vue'
import WeatherService from '../api/WeatherService'

export default {
  name: 'WeatherPage',
  components: { WeatherItem },

  setup () {
    const name = ref('')
    const temp = ref()
    const image = ref('')
    const cityName = ref('')

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
  }
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

/* Large desktops and laptops */
@media (min-width: 1200px) {
  input {
    font-size: 18px;
    font-weight: 200;
  }

  h3 {
    font-size: 48px;
    font-weight: 200;
  }
}

/* Portrait tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {
  input {
    font-size: 16px;
    font-weight: 200;
  }

  h3 {
    font-size: 34px;
    font-weight: 200;
  }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  input {
    font-size: 14px;
    font-weight: 200;
  }

  h3 {
    font-size: 24px;
    font-weight: 200;
  }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  input {
    font-size: 12px;
    font-weight: 200;
  }

  h3 {
    font-size: 20px;
    font-weight: 200;
  }
}

/* Landscape phones and smaller */
@media (max-width: 480px) {
  input {
    font-size: 10px;
    font-weight: 200;
  }

  h3 {
    font-size: 18px;
    font-weight: 200;
  }
}
</style>
