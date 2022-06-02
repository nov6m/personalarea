<template>
 <div class="modalWrapper">
   <div class="modal">
      <form action="" class="modal__form">
        <custom-fieldset v-for="({name: name, type: type}, index) in modalFields"
        :key="index"
        :name="name"
        :type="type">
        </custom-fieldset>
        <div class="fieldset-city">
          <fieldset>
            <legend>Город</legend>
            <select>
              <option v-for="({id: id, cityName: cityName}) in cityList" :key="id" :value="id">{{cityName}}</option>
            </select>
          </fieldset>
        </div>
        <button class="modal__accept" @click="acceptHandler">Принять изменения</button>
        <button class="modal__cancel" @click="cancelHandler">Отменить изменения</button>
      </form>
   </div>
 </div>
</template>

<script>
import customFieldset from '@/components/ui-kits/customFieldset.vue'
import cityList from '@/constants/cityList'

export default {
  components: {
    customFieldset
  },
  emits: ['close'],
  setup (_, { emit }) {
    const modalFields = [
      {
        name: 'Имя',
        type: 'text'
      },
      {
        name: 'Фамилия',
        type: 'text'
      },
      {
        name: 'Дата рождения',
        type: 'date'
      }
    ]
    // const store = useStore()
    const editUser = {
      name: '',
      surname: '',
      dateOfBirth: '',
      city: ''
    }

    const acceptHandler = function () {

    }
    const cancelHandler = function () {
      emit('close')
    }

    return {
      modalFields,
      cityList,
      editUser,
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
