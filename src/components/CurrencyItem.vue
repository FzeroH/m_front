<template>
  <button @click="showModal">{{currency}}</button>
  <teleport to="body">
    <curreny-rate-modal-page :currency="currency" :show="show" @close="showModal"/>
  </teleport>
</template>

<script>

import CurrenyRateModalPage from "../views/CurrenyRateModalPage";
import {ref} from "vue";
export default  {
  name: "CurrencyItem",
  components: {CurrenyRateModalPage},
  props:
      {
        currency: String,
      },
  setup(){
    const show = ref(false)
    const showModal = () => show.value = !show.value;
    return{ showModal, show }
  }
}
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