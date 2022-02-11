<template>
  <AuthPage v-if="!store.state.token"/>
  <ProfilePage v-else :user-i-d="store.state.user.id" :token="store.state.token"/>
</template>

<script>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import AuthPage from './AuthPage'
import ProfilePage from './ProfilePage'

export default defineComponent({
  name: 'MainPage',
  components: { ProfilePage, AuthPage },
  setup () {
    const store = useStore()
    return {
      store
    }
  }
})
</script>

<style scoped>

</style>
