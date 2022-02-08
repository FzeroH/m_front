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
import { defineComponent } from 'vue'

export default defineComponent ({
  name: 'WeatherItem',
  props: {
    name: {
      type: String
    },
    temp: {
      type: String
    },
    image: {
      type: String
    }
  }
})
</script>

<style scoped>
.currency_item-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: fit-content;
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
  margin: 30px 0 auto 10px;
  box-sizing: content-box;
  font-weight: normal;
  text-align: center;
}

.currency_item-container > img {
  width: 100px;
  height: 100px;
}

/* Large desktops and laptops */
@media (min-width: 1200px) {
  .currency_item-container > span > h3 {
    font-size: 48px;
  }

  .currency_item-container > img {
    width: 100px;
    height: 100px;
  }
}

/* Portrait tablets and medium desktops */
@media (min-width: 992px) and (max-width: 1199px) {

  .currency_item-container > span > h3 {
    font-size: 48px;
    margin: 30px 0 auto 10px;
  }

  .currency_item-container > img {
    width: 100px;
    height: 100px;
  }
}

/* Portrait tablets and small desktops */
@media (min-width: 768px) and (max-width: 991px) {
  .currency_item-container > span > h3 {
    font-size: 24px;
    margin: 30px 0 auto 10px;
  }

  .currency_item-container > img {
    width: 50px;
    height: 50px;
  }
}

/* Landscape phones and portrait tablets */
@media (max-width: 767px) {
  .currency_item-container > span > h3 {
    font-size: 16px;
    margin: 10px 0 auto 10px;
  }

  .currency_item-container > img {
    width: 50px;
    height: 50px;
  }
}

/* Landscape phones and smaller */
@media (max-width: 480px) {
  .currency_item-container > span > h3 {
    font-size: 12px;
    margin: 10px 0 auto 10px;
  }

  .currency_item-container > img {
    width: 30px;
    height: 30px;
  }
}
</style>
