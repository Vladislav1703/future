<template>
    <div class="v-future-filter">
      <input type="text" v-model="filterKey">
      <button @click="setFilter">Найти</button>
    </div>
</template>

<script>
export default {
  name: 'FilteredList',
  data() {
    return {
      filterKey: '',
    };
  },
  methods: {
    setFilter() {
      console.log('child', this.filterKey);
      this.$emit('filterList', this.filterKey);
    },
  },
};
</script>
