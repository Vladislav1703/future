<template>
    <div class="v-future-filter">
      <form @sumbit="setFilter(filterkey)">
        <p>
          <input v-model="filterKey">
          <input type="sumbit">
        </p>
      </form>
    </div>
</template>

<script>
export default {
  name: 'FilterList',
  data() {
    return {
      filterKey: '',
    };
  },
  methods: {
    setFilter(filterkey) {
      this.$emit('filterList', filterkey);
    },
  },
};
</script>
