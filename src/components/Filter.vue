<template>
    <div class="v-future-filter">
      <p>Фильтр</p>
      <input type="text" v-model="filterKey">
      <button @click="setFilter">Найти</button>
    </div>
</template>

<script>
export default {
  name: 'FilteredList',
  data () {
    return {
      filterKey: ''
    }
  },
  methods: {
    setFilter () {
      this.$emit('filterList', this.filterKey)
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-future-filter{
    margin-top: 20px;
  }
</style>
