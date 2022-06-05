<template>
  <div class="header">
    <div class="header__menu menu">
      <router-link class="menu__item" v-for="({name: name, path: path}, index) in menuLinks" :key="index" :to=path>
        {{name}}
      </router-link>
    </div>
    <button class="header__button-loguot" v-if="hasLogin" @click="logOut">Выйти из профиля</button>
  </div>
</template>

<script>
import menuLinks from '@/constants/menuLinks'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'
import router from '@/router'

export default {
  setup () {
    const store = useStore()
    const hasLogin = computed(() => store.getters.getHasLogin)

    const logOut = function () {
      store.commit('SIGHINOUT')
      router.push({ path: '/login' })
    }

    return {
      menuLinks,
      hasLogin,
      logOut
    }
  }
}
</script>
