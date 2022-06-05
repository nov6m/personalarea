<template>
 <div class="modalWrapper">
   <div class="modal">
      <form action="" class="modal__form" @submit="acceptHandler">
        <fieldset>
          <legend>Заголовок</legend>
          <input type="text" required v-model="data.header">
        </fieldset>
        <fieldset>
          <legend>Описание</legend>
          <textarea required v-model="data.description"></textarea>
        </fieldset>
        <button>Отправить</button>
        <button @click="cancelHandler">Закрыть</button>
      </form>
   </div>
 </div>
</template>

<script>
import cityList from '@/constants/cityList'
import { reactive } from '@vue/reactivity'
import { useStore } from 'vuex'
import { computed } from '@vue/runtime-core'

export default {
  emits: ['close'],
  setup (_, { emit }) {
    const data = reactive({
      header: '',
      description: '',
      id: 0
    })
    const store = useStore()
    const listTicket = computed(() => store.getters.getTickets)

    const acceptHandler = function () {
      const countTicket = listTicket.value.length
      data.id = countTicket + 1
      store.commit('ADDTICKET', data)
      emit('close')
    }
    const cancelHandler = function () {
      emit('close')
    }

    return {
      data,
      cityList,
      acceptHandler,
      cancelHandler
    }
  }
}
</script>

<style lang="scss" scoped>
  .modalWrapper {
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: rgba(179, 179, 179, 0.5);
    position: absolute;
    top: 0;
    left: 0;
  }
  .modal {
    background-color: #fff;
    padding: 20px;
    border-radius: 6px;

    &__accept {
      width: 100%;
      margin-bottom: 7px;
    }
    &__cancel {
      width: 100%;
    }
  }
  fieldset {
    border-radius: 6px;
    padding: 5px;
    margin-bottom: 10px;
  }
  button {
    display: block;
    margin: 0 auto;
    margin-bottom: 10px;
  }
</style>
