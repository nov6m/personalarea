<template>
  <div class="wrapper">
    <div class="ticket">
      <div class="ticket__description">
        Список обращений пользователей
      </div>
      <list-ticket class="ticket__table"
      :listTicket="listTicket"></list-ticket>
      <button class="ticket__add" @click="addTicket">Создать тикет</button>
    </div>
  </div>
  <TicketModal v-if="showModal.show" @close="addTicket"/>
</template>

<script>
import { useStore } from 'vuex'
import router from '@/router'
import { computed, onBeforeMount, reactive } from '@vue/runtime-core'
import ListTicket from '@/components/ticket/ListTicket.vue'
import TicketModal from '@/components/modal/TicketModal.vue'

export default {
  name: 'HomeView',
  components: {
    ListTicket,
    TicketModal
  },
  setup () {
    const store = useStore()
    const hasLogin = computed(() => store.getters.getHasLogin)
    const showModal = reactive({ show: false })
    const listTicket = computed(() => store.getters.getTickets)

    const addTicket = function () {
      showModal.show = !showModal.show
    }

    onBeforeMount(() => {
      if (!hasLogin.value) {
        router.push({ path: '/login' })
      }
    })
    return {
      listTicket,
      showModal,
      addTicket
    }
  }
}
</script>
