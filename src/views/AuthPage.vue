<template>
  <h1>Авторизация</h1>
  <form @submit.prevent="signin(email, password)">
    <label> Email</label>
    <input type="text" v-model="email">
    <label>Password</label>
    <input type="password" v-model="password">
    <button type="submit">Войти</button>
  </form>
  <router-link to="/registration">Зарегистрироваться</router-link>
</template>

<script>
import { ref, defineComponent } from 'vue'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'AuthPage',
  setup () {
    const store = useStore()
    const email = ref('')
    const password = ref('')
    const signin = async (email, password) => {
      await store.dispatch('login', { email, password })
    }
    return {
      signin,
      email,
      password
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

a {
  display:flex;
  justify-content: center;
  font-size: 16px;
  margin:15px auto 0 auto;
  text-decoration: none;
  color: white;

}
</style>