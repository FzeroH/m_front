<template>
  <h1>Регистрация</h1>
  <form @submit.prevent="signup(email, password, userName)">
    <label>Имя пользователя</label>
    <input type="text" v-model="userName"/>
    <label>Email</label>
    <input type="text" v-model="email"/>
    <label>Пароль</label>
    <input type="password" v-model="password"/>
    <button type="submit">Зарегистрироваться</button>
  </form>
</template>

<script>
import { ref, defineComponent } from 'vue'
import AuthService from '../api/AuthService'

export default defineComponent({
  name: 'RegistrationPage',
  setup () {
    const userName = ref('')
    const email = ref('')
    const password = ref('')

    const signup = async (email, password, userName) => {
      await AuthService.signUp(email, password, userName)
        .then((res) => { console.log(res.data) })
        .catch((e) => console.error(e.message))
    }

    return {
      userName, email, password, signup
    }
  }
})
</script>

<style scoped>
h1 {
  display: flex;
  justify-content: center;
  color: white;
  margin-top:60px;
}

form {
  display: flex;
  flex-direction: column;
  width:fit-content;
  margin:60px auto 0 auto;
}

form > label {
  font-size: 18px;
  color: white;
  margin: 0;
  font-weight: normal;
}

form > input {
  width: 200px;
  border-radius: 5px;
  padding: 5px 10px;
  border: none;
  outline: none;
  color: black;
  font-size: 16px;
  font-weight:normal;
  margin-bottom:20px;
}

form > button {
  width: 150px;
  height: 30px;
  border: transparent;
  border-radius: 20px;
  color: black;
  font-weight: 600;
  margin: 10px auto 0 auto;
}
</style>
