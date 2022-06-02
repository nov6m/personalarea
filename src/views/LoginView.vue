<template>
  <div class="form">
    <form action="" class="form__sigh-in" @submit="sighIn">
      <custom-fieldset class="field-input" v-for="({name: name, type: type}, index) in formContent"
      :key=index
      :name="name"
      :type="type">
      </custom-fieldset>
      <button class="form__button">Войти</button>
    </form>
  </div>
</template>

<script>
import customFieldset from '@/components/ui-kits/customFieldset.vue'
import { useStore } from 'vuex'
import router from '@/router'

export default {
  components: {
    customFieldset
  },
  setup () {
    const formContent = [
      {
        name: 'Email',
        type: 'email'
      },
      {
        name: 'Password',
        type: 'password'
      }
    ]
    const store = useStore()

    const sighIn = function () {
      store.commit('SIGHIN')
      router.push({ path: '/profile' })
    }
    return {
      formContent,
      sighIn
    }
  }
}
</script>
