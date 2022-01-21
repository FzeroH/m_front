<template>
  <div class="currency_page-container" >
    <CurrencyItem v-for="currency in currencyList" :key="currency" :currency="currency"/>
  </div>
</template>

<script>
import CurrencyItem from "../components/CurrencyItem";
import CurrencyService from "../api/CurrencyService";
import {onMounted, ref} from "vue";
export default {
  name: "CurrencyPage",
  components: {CurrencyItem},
  setup(){
    let currencyList = ref([]);
    const getCurrencyList = async () => {
      await CurrencyService.getCurrencyList()
          .then((data) => currencyList.value = data.data)
          .catch((error) => console.error(error.message));
      console.log(currencyList)
    };
    onMounted(() => {
      getCurrencyList()
    });
    return {
      currencyList
    }
  }
}
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