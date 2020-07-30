<template>
  <tr class='v-future-listitem'>
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
};
</script>

<style scoped lang="scss">
</style>
