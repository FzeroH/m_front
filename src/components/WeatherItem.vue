<template>
  <div class="currency_item-container">
    <span>
      <h3>{{ name }}</h3>
      <h3>{{ temp }}°</h3>
    </span>
    <img :src="`http://openweathermap.org/img/wn/${ image }@2x.png`" alt=""/>
  </div>
</template>

<script>
export default {
  name: 'WeatherItem',
  props: {
    name: {
      type: String,
    },
    temp: {
      type: String,
    },
    image: {
      type: String,
    },
  },
}
</script>

<style scoped>
.currency_item-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 40%;
  height: 40%;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 20px;
  margin: 5em auto 0 auto;
}

.currency_item-container > span {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
}

.currency_item-container > span > h3 {
  color: white;
  font-size: 48px;
  margin: 30px 0 auto 10px;
  box-sizing: content-box;
  font-weight: normal;
  text-align: center;
}

.currency_item-container > img {
  width: 100px;
  height: 100px;
}
</style>
