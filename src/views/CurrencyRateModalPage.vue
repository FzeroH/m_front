<template>
  <div v-if="show" class="modal-overlay" @click.self="closeModal">
    <div class="modal">
      <h2 class="modal-title">{{ currency }}</h2>
      <div class="modal-content">
        <h3>{{ currencyRate || 'LOADING...' }}</h3>
      </div>
      <div class="modal-footer">
        <button class="modal-footer__button" @click="closeModal">
          Отмена
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue'
import CurrencyService from '../api/CurrencyService'

export default {
  name: 'CurrencyRateModalPage',
  props: {
    show: {
      type: Boolean,
      default: false
    },
    currency: {
      type: String
    }
  },
  setup (props, { emit }) {
    const currencyRate = ref(null)
    const closeModal = () => emit('close')
    const getCurrencyRate = async (currency) =>
      await CurrencyService.getCurrencyRate(currency)
        .then((res) => { currencyRate.value = res.data[currency] })
        .catch((error) => console.error(error.message))

    onMounted(() => {
      getCurrencyRate(props.currency)
    })

    return {
      closeModal,
      currencyRate
    }
  }
}

</script>

<style scoped>
.modal-overlay {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 9999;
  min-height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.39);
}

.modal {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: #1C2029;
  border-radius: 10px;
  padding: 15px;
  min-width: 220px;
  max-width: 280px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.modal-title {
  color: #ECEFF4;
  margin: 0 0 20px 0;
}

.modal-content {
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
  width: 80%;
  color: black;
  box-sizing: content-box;
}

.modal-footer {
  width: 100%;
  display: flex;
  justify-content: center;
}

.modal-footer__button {
  width: 70%;
  height: 50px;
  margin-top: 30px;
  border: transparent;
  border-radius: 20px;
  color: #ECEFF4;
  text-transform: uppercase;
  font-weight: 600;
  background: linear-gradient(90deg, #2F343F 0%, #262a33 100%);
}

h3 {
  color: white;
  text-align: center;
}
</style>
