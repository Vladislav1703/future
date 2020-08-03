<template>
    <div class='v-future-listitem'>
        <p>Выбран ползователь: <b>{{fullName}}</b></p>
        <div>Описание: <p>{{row.description}}</p></div>
        <p>Адрес проживания: <b>{{row.address.streetAddress}}</b></p>
        <p>Город: <b>{{row.address.city}}</b></p>
        <p>Провинция/штат: <b>{{row.address.state}}</b></p>
        <p>Индекс: <b>{{row.address.zip}}</b></p>
    </div>
</template>

<script>
export default {
  name: 'FullCard',
  props: {
    row: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    fullName() {
      return this.row.firstName + this.row.lastName;
    },
  },

};
</script>

<style scoped lang="scss">
</style>
