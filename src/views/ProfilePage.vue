<template>
  <div class="profile-container">
    <h3>{{userName}}</h3>
    <label>История поиска погоды</label>
    <div class="history-weather">
      <h4>Название города</h4>
    </div>
  </div>
</template>

<script>
import { onMounted, defineComponent, ref } from 'vue'
import AuthService from '../api/AuthService'

export default defineComponent ({
  name: "ProfilePage",
  props:{
    userID: {
      type: String
    },
    token: {
      type: String
    }
  },

  setup(props) {
    let userName = ref('')
    const weatherHistory = ref([])
    onMounted(() =>{
      AuthService.getUserData(props.userID, props.token)
          .then((res) => userName.value = res.username)
          .catch((e) => console.error(e.message))
    })
    return {
      userName,
      weatherHistory
    }
  }
})
</script>

<style scoped>
.profile-container {
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 100px auto 0 auto;
}

.profile-container > h3, label {
  color: white;
}

.profile-container > h3 {
  font-size: 24px;
  margin: 10px 0;
}

.history-weather {
  margin-top: 10px;
  width: 30%;
  height: 200px;
  border: 2px solid #2F343F;
  border-radius: 5px;
  overflow-y: scroll;
}
.history-weather::-webkit-scrollbar {
  width: 5px;
  background-color: #2F343F;
}

.history-weather::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #2C313D;
}

.history-weather::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0.2);
  border-radius: 10px;
  background-color: rgb(125, 128, 134);
}
.history-weather > h4 {
  color: white;
  margin: 5px 5px 0 5px;

}
</style>