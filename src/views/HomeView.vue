<template>
  <div class="wrapper">
    <div class="description">
        Тут я просто сделал заглушку с каким то контентом
    </div>
    <div class="main">
      <div class="main__item" v-for="(character, index) of characterResult.value"
      :key="index">
        <blog-main
        :name="character.name"
        :status="character.status"
        :species="character.species"
        :known_location="character.location.name"
        :image="character.image"></blog-main>
      </div>
    </div>
  </div>
</template>

<script>
import { useStore } from 'vuex'
import router from '@/router'
import { computed, onBeforeMount, onMounted, reactive } from '@vue/runtime-core'
import BlogMain from '@/components/main/BlogMain.vue'
import RickAndMorty from '@/services/getApiData'

export default {
  name: 'HomeView',
  components: {
    BlogMain
  },
  setup () {
    const store = useStore()
    const characterResult = reactive([])

    const hasLogin = computed(() => store.getters.getHasLogin)

    onBeforeMount(() => {
      if (!hasLogin.value) {
        router.push({ path: '/login' })
      }
    })

    onMounted(async () => {
      const characterInfo = await RickAndMorty.getCharacter()
      characterResult.value = characterInfo.data.results.slice()
    })

    return {
      characterResult
    }
  }
}
</script>
