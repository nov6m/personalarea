<template>
 <div class="modalWrapper">
   <div class="modal">
      <form action="" class="modal__form" @submit="acceptHandler">
        <div v-for="({name: name, type: type}, index) in modalFields" :key="index">
          <fieldset>
            <legend>{{name}}</legend>
            <input required :type="type" v-model.trim="modalFields[index].value">
          </fieldset>
        </div>
        <div class="fieldset-city">
          <fieldset>
            <legend>Город</legend>
            <select v-model="userCityEdit.value">
              <option v-for="({id: id, cityName: cityName}) in cityList" :key="id" :value="cityName">{{cityName}}</option>
            </select>
          </fieldset>
        </div>
        <button class="modal__accept">Принять изменения</button>
        <button class="modal__cancel" @click="cancelHandler">Отменить изменения</button>
      </form>
   </div>
 </div>
</template>

<script>
import cityList from '@/constants/cityList'
import { useStore } from 'vuex'
import { reactive } from '@vue/reactivity'

export default {
  emits: ['close'],
  setup (_, { emit }) {
    const modalFields = reactive([
      {
        name: 'Имя',
        type: 'text',
        value: ''
      },
      {
        name: 'Фамилия',
        type: 'text',
        value: ''
      },
      {
        name: 'Дата рождения',
        type: 'date',
        value: ''
      }
    ])
    const userCityEdit = {
      value: ''
    }
    const store = useStore()

    const acceptHandler = function () {
      const editUser = {
        name: modalFields[0].value,
        surname: modalFields[1].value,
        dateOfBirth: modalFields[2].value,
        city: userCityEdit.value
      }
      store.commit('EDITUSER', editUser)
      emit('close')
    }
    const cancelHandler = function () {
      emit('close')
    }

    return {
      modalFields,
      cityList,
      userCityEdit,
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
    display: inline;
    padding: 5px;
    margin-bottom: 10px;
  }
</style>
