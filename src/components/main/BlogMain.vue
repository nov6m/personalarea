<template>
  <div class="item">
    <img :src="image" class="item__image" width="200" height="200">
    <div class="item__info-container">
      <div class="item__name">
        {{name}}
      </div>
      <div class="item__status">
        {{status}} - {{species}}
      </div>
      <div class="item__known-location">
        Last known location: <br> {{known_location}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['name', 'image', 'status', 'species', 'known_location']
}
</script>

<style lang="scss">
  .item {
    width: 370px;
    height: 200px;
    border-radius: 8px;
    background-color: rgb(212, 235, 255);

    &__info-container {
      padding: 10px;
      font-size: 16px;
    }

    &__image {
      float: left;
      border-radius: 8px 0 0 8px;
      margin-right: 10px;
    }
  }
</style>
