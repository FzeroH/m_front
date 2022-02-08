<template>
  <div class="currency_page-container" >
    <CurrencyItem v-for="(currency, index) in currencyList" :key="index" :currency="currency"/>
  </div>
</template>

<script>
import CurrencyItem from '../components/CurrencyItem'
import CurrencyService from '../api/CurrencyService'
import { onMounted, ref, defineComponent } from 'vue'
export default defineComponent( {
  name: 'CurrencyPage',
  components: { CurrencyItem },
  setup () {
    const currencyList = ref([])
    const getCurrencyList = async () => {
      await CurrencyService.getCurrencyList()
        .then((res) => { currencyList.value = res.data })
        .catch((error) => console.error(error.message))
      console.log(currencyList)
    }
    onMounted(() => {
      getCurrencyList()
    })
    return {
      currencyList
    }
  }
})
</script>

<style scoped>
.currency_page-container{
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  max-width: 90%;
  margin: auto;
}
</style>
