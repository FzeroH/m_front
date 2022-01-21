<template>
  <div class="currency_item-container">
    <span>
      <h3>{{data.city}}</h3>
      <h3>{{data.temp}}°</h3>
    </span>
    <img src="" alt=""/>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import WeatherService from "../api/WeatherService";

export default defineComponent({
  name: 'WeatherItem',

  setup() {
    const data = ref({city: 'Lipetsk', temp: '10'})
    const getWeather = async () => {
      await WeatherService.getWeather()
          .then((data) => data.value = data.fact)
          .catch((error) => console.error(error.message));
    };
    return {
      data,
      getWeather
    };
  },
});
</script>

<style scoped>
.currency_item-container {
  display: flex;
  flex-direction: row;
  width: 50%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin-left: 25%;
  margin-top: 10em;
}
.currency_item-container > span > h3 {
  color: white;
  font-size: 48px;
  box-sizing: content-box;
  margin-left: 50%;
}
.currency_item-container > img {
  width: 100px;
  height: 100px;
  background: white;
  margin: 75px 50%;
}
</style>
