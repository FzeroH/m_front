<template>
  <button @click="showModal">{{currency}}</button>
  <teleport v-if="show" to="body">
    <currency-rate-modal-page :currency="currency" :show="show" @close="showModal"/>
  </teleport>
</template>

<script>

import CurrencyRateModalPage from '../views/CurrencyRateModalPage'
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'CurrencyItem',
  components: { CurrencyRateModalPage },
  props: {
    currency: String
  },
  setup () {
    const show = ref(false)
    const showModal = () => { show.value = !show.value }
    return { showModal, show }
  }
})
</script>

<style scoped>

button {
  width: 100px;
  text-decoration: none;
  margin: 20px 10px;
  align-items: normal;
  color: black;
  border: transparent;
  font-size: 14px;
  border-radius: 10px;
  box-sizing: border-box;
  padding: 10px 20px;
  font-weight: normal;
}
</style>
