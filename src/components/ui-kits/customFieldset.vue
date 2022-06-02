<template>
  <div>
    <fieldset class="inputForm">
      <legend class="inputForm__name">{{name}}</legend>
      <input class="inputForm__input" :type=type required>
    </fieldset>
  </div>
</template>

<script>
export default {
  props: ['name', 'type']
}
</script>

<style scoped>
  .inputForm {
    display: inline-block;
    padding: 6px;
    border-radius: 6px;
  }
</style>
