<template>
  <div class="wrapper">
    <user-info></user-info>
  </div>
</template>

<script>
import UserInfo from '@/components/profile/UserInfo.vue'
import { useStore } from 'vuex'
import router from '@/router'
import { computed, onBeforeMount } from '@vue/runtime-core'

export default {
  name: 'HomeView',
  components: {
    UserInfo
  },
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
