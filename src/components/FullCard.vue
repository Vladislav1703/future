<template>
    <div class='v-future-fullcard'>
        <p>Выбран ползователь:
          <b>{{fullName}}</b>
        </p>
        <div>Описание: {{row.description ? row.description : ''}}</div>
        <p>Адрес проживания:
          <b>{{row.address.streetAddress ? row.address.streetAddress : ''}}</b>
        </p>
        <p>Город:
          <b>{{row.address.city ? row.address.city : ''}}</b>
        </p>
        <p>Провинция/штат:
          <b>{{row.address.state ? row.address.state : ''}}</b>
        </p>
        <p>Индекс:
          <b>{{row.address.zip ? row.address.zip : ''}}</b>
        </p>
    </div>
</template>

<script>
export default {
  name: 'FullCard',
  props: {
    row: {
      type: Object,
      default () {
        return {}
      }
    }
  },
  computed: {
    fullName () {
      return this.row.firstName + this.row.lastName
    }
  }

}
</script>

<style scoped lang="scss">
  .v-future-fullcard {
    text-align:left;
    width:535px;
  }
</style>
