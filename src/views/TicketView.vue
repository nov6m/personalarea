<template>
  ticket
</template>

<script>
import { useStore } from 'vuex'
import router from '@/router'
import { computed } from '@vue/runtime-core'

export default {
  name: 'HomeView',
  setup () {
    const store = useStore()
    const hasLogin = computed(() => store.getters.getHasLogin)

    if (!hasLogin) {
      router.push({ path: '/login' })
    }
  }
}
</script>
