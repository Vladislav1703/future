<template>
  <tr @click="showAllInfo" class='v-future-listitem'>
    <td class="id">{{row.id}}</td>
    <td class="firstName">{{row.firstName}}</td>
    <td class="lastName">{{row.lastName}}</td>
    <td class="email">{{row.email}}</td>
    <td class="phone">{{row.phone}}</td>
  </tr>
</template>

<script>
export default {
  name: 'ListItem',
  props: {
    row: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  methods: {
    showAllInfo() {
      this.$emit('showAllInfo', this.row);
    },
  },
};
</script>

<style scoped lang="scss">
  .v-future-listitem{
    cursor: pointer;
  }
</style>
