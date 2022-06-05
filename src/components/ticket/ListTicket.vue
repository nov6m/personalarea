<template>
  <div>
    <table>
      <tr>
        <th>Заголовок</th>
        <th>Описание</th>
        <th>Id</th>
      </tr>
      <tr v-for="(item, index) of listTicket" :key="index">
        <td v-for="(info, index) of item" :key="index">{{info}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: ['listTicket']
}
</script>

<style lang="scss">
  td,
  th {
    width: 30%;
    background-color: rgb(209, 209, 209);
    border-radius: 6px;
    border-collapse: collapse;
    padding: 6px;
    font-size: 20px;
  }
</style>
