<template>
  <tr class='v-future-listitem'>
    <td>
      <input type="number" v-model="id">
    </td>
    <td>
      <input type="text" v-model="firstName">
    </td>
    <td>
      <input type="text" v-model="lastName">
    </td>
    <td>
      <input type="email" v-model="email">
    </td>
    <td>
      <input type="number" v-model="phone">
    </td>
    <input class="button button-submit"
    type="sumbit"
    value="Добавить в таблицу"
    :disabled="validationInput"
    @click="pushRow"
    >
  </tr>
</template>

<script>
export default {
  name: 'InputRow',
  data () {
    return {
      id: null,
      firstName: null,
      lastName: null,
      email: null,
      phone: null
    }
  },
  computed: {
    validationInput () {
      if (!this.id) {
        return true
      }
      if (!this.firstName) {
        return true
      }
      if (!this.lastName) {
        return true
      }
      if (!this.email) {
        return true
      }
      if (this.email.indexOf('@') < 1) {
        return true
      }
      if (this.email.indexOf('.') < 3) {
        return true
      }
      if (this.email.indexOf('.') === (this.email.length - 1) || this.email.indexOf('.') === (this.email.length - 2)) {
        return true
      }
      if (!this.phone) {
        return true
      }
      if (this.phone.toString().length !== 10) {
        return true
      }
      return false
    }
  },
  methods: {
    pushRow () {
      console.log('pushRow', this.id, this.firstName, this.lastName, this.email, this.phone)
      this.$emit('pushRow', this.id, this.firstName, this.lastName, this.email, this.phone)
      this.id = null
      this.firstName = null
      this.lastName = null
      this.email = null
      this.phone = null
    }
  }
}
</script>

<style lang="scss" scoped>
  .v-future-listitem{
    position: relative;
  }
  .button{
    position: absolute;
    padding: 5 10px;
  }
  .button-showRow{
    top:-30px;
  }
  .button-submit{

  }
td{
  border: 1px solid black;
}
  td input{
    height: 100%;
    border: none;
    text-align: center;
  }
</style>
