<template>
  <div class="profile-info">
    <img class="profile-info__avatar" src="@/assets/images/blankdirectory.png" alt="avatar" width="300" height="300">
    <div class="profile-info__data">
      <div class="profile-data">
        <div class="profile-data__full-name">
          {{fullName}}
        </div>
        <div class="profile-data__date-of-birth">
          Дата рождения: {{userInfo.dateOfBirth}}
        </div>
        <div class="profile-data__city">
          Город: {{userInfo.city}}
        </div>
      </div>
      <button class="profile-info__edit" @click="editHandler">Редактировать <br> профиль</button>
    </div>
  </div>
  <EditModal v-if="showModal.edit" @close="editHandler"/>
</template>

<script>
import EditModal from '@/components/modal/EditModal.vue'
import { computed, reactive } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  components: {
    EditModal
  },
  setup () {
    const store = useStore()
    const showModal = reactive({ edit: false })

    const userInfo = computed(() => store.getters.getUser)
    const fullName = computed(() => store.getters.getFullNameUser)

    const editHandler = function () {
      showModal.edit = !showModal.edit
    }
    return {
      userInfo,
      fullName,
      showModal,
      editHandler
    }
  }
}
</script>
