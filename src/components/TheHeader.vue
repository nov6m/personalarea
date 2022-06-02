<template>
  <div class="header">
    <div class="header__menu menu">
      <router-link class="menu__item" v-for="({name: name, path: path}, index) in menuLinks" :key="index" :to=path>
        {{name}}
      </router-link>
    </div>
  </div>
</template>

<script>
import menuLinks from '@/constants/menuLinks'

export default {
  setup () {
    return {
      menuLinks
    }
  }
}
</script>
