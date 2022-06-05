<template>
  <div class="home">
    main
  </div>
</template>

<script>
import { useStore } from 'vuex'
import router from '@/router'
import { computed, onBeforeMount } from '@vue/runtime-core'

export default {
  name: 'HomeView',
  setup () {
    const store = useStore()
    const hasLogin = computed(() => store.getters.getHasLogin)

    onBeforeMount(() => {
      if (!hasLogin.value) {
        router.push({ path: '/login' })
      }
    })
  }
}
</script>
