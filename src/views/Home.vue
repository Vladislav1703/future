<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to my Vue.js App"/>
    <select @change="selectList($event)" v-model="list">
      <option disabled value="Выберите один из вариантов">Выберите один из вариантов</option>
      <option :value="SmallList">Малый список</option>
      <option :value="BigList">Большой список</option>
    </select>
    <FilteredList @filterList="filterList"/>
    <table>
      <tr>
        <td @click="sortList('id')">id</td>
        <td @click="sortList('firstName')">first name</td>
        <td @click="sortList('lastName')">last name</td>
        <td @click="sortList('email')">email</td>
        <td @click="sortList('phone')">phone</td>
      </tr>
      <ListItem
        v-for="(row, index) in REGULARLIST"
        :key="index"
        :row="row"
        @showAllInfo="showAllInfo"
      />
    </table>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue';
import ListItem from '@/components/ListItem.vue';
import FilteredList from '@/components/Filter.vue';
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListItem,
    FilteredList,
  },
  data() {
    return {
      actualRow: {},
      list: '',
      BigList:
        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      SmallList:
        'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      sortBy: '',
      sortArgument: 1,
    };
  },
  computed: {
    ...mapGetters([
      'REGULARLIST',
    ]),
  },
  methods: {
    ...mapActions([
      'GET_LIST_FROM_API',
      'SORT_LIST',
    ]),
    filterList(filterkey) {
      console.log(filterkey);
      this.$store.dispatch('SET_FILTER', filterkey);
    },
    selectList(event) {
      this.sortBy = '';
      this.sortArgument = 1;
      this.$store.dispatch('GET_LIST_FROM_API', { link: event.target.value });
    },
    sortList(sortBy) {
      if (sortBy === this.sortBy) {
        this.sortArgument *= -1;
        return this.$store.dispatch('SORT_LIST', { key: sortBy, sortArg: this.sortArgument });
      }
      this.sortBy = sortBy;
      this.sortArgument = 1;
      return this.$store.dispatch('SORT_LIST', { key: sortBy, sortArg: 1 });
    },
    showAllInfo(row) {
      this.actualRow = row;
    },
  },
};
</script>

<style>
  .home {
    display: flex;
    flex-direction: column;
    align-items:center;
  }
</style>
