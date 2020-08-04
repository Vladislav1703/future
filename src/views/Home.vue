<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to my Vue.js App"></HelloWorld>
    <select v-model="list" @change="selectList($event)">
      <option disabled value="Выберите один из вариантов">Выберите один из вариантов</option>
      <option :value="SmallList">Малый список</option>
      <option :value="BigList">Большой список</option>
    </select>
    <div class="preloader" v-show="LOADING">
      <p>Идёт загрузка страницы</p>
      <div id="fountainG">
        <div id="fountainG_1" class="fountainG"></div>
        <div id="fountainG_2" class="fountainG"></div>
        <div id="fountainG_3" class="fountainG"></div>
        <div id="fountainG_4" class="fountainG"></div>
        <div id="fountainG_5" class="fountainG"></div>
        <div id="fountainG_6" class="fountainG"></div>
        <div id="fountainG_7" class="fountainG"></div>
        <div id="fountainG_8" class="fountainG"></div>
      </div>
    </div>
    <FilteredList @filterList="filterList"></FilteredList>
    <table>
      <tr>
        <th @click="sortList('id')">id</th>
        <th @click="sortList('firstName')">first name</th>
        <th @click="sortList('lastName')">last name</th>
        <th @click="sortList('email')">email</th>
        <th @click="sortList('phone')">phone</th>
      </tr>
      <ListItem
        v-for="(row, index) in REGULARLIST"
        :key="index"
        :row="row"
        @showAllInfo="showAllInfo"
      ></ListItem>
    </table>

    <FullCard v-for="(row, index) in actualRow" :key="index" :row="row"></FullCard>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import ListItem from '@/components/ListItem.vue'
import FilteredList from '@/components/Filter.vue'
import FullCard from '@/components/FullCard.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListItem,
    FilteredList,
    FullCard
  },
  data () {
    return {
      actualRow: [],
      list: '',
      BigList:
        'http://www.filltext.com/?rows=1000&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&delay=3&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      SmallList:
        'http://www.filltext.com/?rows=32&id=%7Bnumber%7C1000%7D&firstName=%7BfirstName%7D&lastName=%7BlastName%7D&email=%7Bemail%7D&phone=%7Bphone%7C(xxx)xxx-xx-xx%7D&address=%7BaddressObject%7D&description=%7Blorem%7C32%7D',
      sortBy: '',
      sortArgument: 1
    }
  },
  computed: {
    ...mapGetters(['REGULARLIST', 'LOADING'])
  },
  methods: {
    ...mapActions(['GET_LIST_FROM_API', 'SORT_LIST']),
    filterList (filterkey) {
      console.log(filterkey)
      this.$store.dispatch('SET_FILTER', filterkey)
    },
    selectList (event) {
      this.sortBy = ''
      this.sortArgument = 1
      this.actualRow = []
      this.$store.dispatch('GET_LIST_FROM_API', { link: event.target.value })
    },
    sortList (sortBy) {
      if (sortBy === this.sortBy) {
        this.sortArgument *= -1
        return this.$store.dispatch('SORT_LIST', {
          key: sortBy,
          sortArg: this.sortArgument
        })
      }
      this.sortBy = sortBy
      this.sortArgument = 1
      return this.$store.dispatch('SORT_LIST', { key: sortBy, sortArg: 1 })
    },
    showAllInfo (row) {
      this.actualRow = []
      this.actualRow[0] = row
    }
  }
}
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}
.preloader {
  padding-bottom: 30px;
}
table {
  border-collapse: collapse;
}
td,
th {
  padding: 3px;
  border: 1px solid black;
}
th {
  background: #41b883;
}
#fountainG {
  position: relative;
  width: 234px;
  height: 28px;
  margin: auto;
}

.fountainG {
  position: absolute;
  top: 0;
  background-color: rgb(0, 0, 0);
  width: 28px;
  height: 28px;
  animation-name: bounce_fountainG;
  -o-animation-name: bounce_fountainG;
  -ms-animation-name: bounce_fountainG;
  -webkit-animation-name: bounce_fountainG;
  -moz-animation-name: bounce_fountainG;
  animation-duration: 1.5s;
  -o-animation-duration: 1.5s;
  -ms-animation-duration: 1.5s;
  -webkit-animation-duration: 1.5s;
  -moz-animation-duration: 1.5s;
  animation-iteration-count: infinite;
  -o-animation-iteration-count: infinite;
  -ms-animation-iteration-count: infinite;
  -webkit-animation-iteration-count: infinite;
  -moz-animation-iteration-count: infinite;
  animation-direction: normal;
  -o-animation-direction: normal;
  -ms-animation-direction: normal;
  -webkit-animation-direction: normal;
  -moz-animation-direction: normal;
  transform: scale(0.3);
  -o-transform: scale(0.3);
  -ms-transform: scale(0.3);
  -webkit-transform: scale(0.3);
  -moz-transform: scale(0.3);
  border-radius: 19px;
  -o-border-radius: 19px;
  -ms-border-radius: 19px;
  -webkit-border-radius: 19px;
  -moz-border-radius: 19px;
}

#fountainG_1 {
  left: 0;
  animation-delay: 0.6s;
  -o-animation-delay: 0.6s;
  -ms-animation-delay: 0.6s;
  -webkit-animation-delay: 0.6s;
  -moz-animation-delay: 0.6s;
}

#fountainG_2 {
  left: 29px;
  animation-delay: 0.75s;
  -o-animation-delay: 0.75s;
  -ms-animation-delay: 0.75s;
  -webkit-animation-delay: 0.75s;
  -moz-animation-delay: 0.75s;
}

#fountainG_3 {
  left: 58px;
  animation-delay: 0.9s;
  -o-animation-delay: 0.9s;
  -ms-animation-delay: 0.9s;
  -webkit-animation-delay: 0.9s;
  -moz-animation-delay: 0.9s;
}

#fountainG_4 {
  left: 88px;
  animation-delay: 1.05s;
  -o-animation-delay: 1.05s;
  -ms-animation-delay: 1.05s;
  -webkit-animation-delay: 1.05s;
  -moz-animation-delay: 1.05s;
}

#fountainG_5 {
  left: 117px;
  animation-delay: 1.2s;
  -o-animation-delay: 1.2s;
  -ms-animation-delay: 1.2s;
  -webkit-animation-delay: 1.2s;
  -moz-animation-delay: 1.2s;
}

#fountainG_6 {
  left: 146px;
  animation-delay: 1.35s;
  -o-animation-delay: 1.35s;
  -ms-animation-delay: 1.35s;
  -webkit-animation-delay: 1.35s;
  -moz-animation-delay: 1.35s;
}

#fountainG_7 {
  left: 175px;
  animation-delay: 1.5s;
  -o-animation-delay: 1.5s;
  -ms-animation-delay: 1.5s;
  -webkit-animation-delay: 1.5s;
  -moz-animation-delay: 1.5s;
}

#fountainG_8 {
  left: 205px;
  animation-delay: 1.64s;
  -o-animation-delay: 1.64s;
  -ms-animation-delay: 1.64s;
  -webkit-animation-delay: 1.64s;
  -moz-animation-delay: 1.64s;
}

@keyframes bounce_fountainG {
  0% {
    transform: scale(1);
    background-color: rgb(0, 0, 0);
  }

  100% {
    transform: scale(0.3);
    background-color: rgb(255, 255, 255);
  }
}

@-o-keyframes bounce_fountainG {
  0% {
    -o-transform: scale(1);
    background-color: rgb(0, 0, 0);
  }

  100% {
    -o-transform: scale(0.3);
    background-color: rgb(255, 255, 255);
  }
}

@-ms-keyframes bounce_fountainG {
  0% {
    -ms-transform: scale(1);
    background-color: rgb(0, 0, 0);
  }

  100% {
    -ms-transform: scale(0.3);
    background-color: rgb(255, 255, 255);
  }
}

@-webkit-keyframes bounce_fountainG {
  0% {
    -webkit-transform: scale(1);
    background-color: rgb(0, 0, 0);
  }

  100% {
    -webkit-transform: scale(0.3);
    background-color: rgb(255, 255, 255);
  }
}

@-moz-keyframes bounce_fountainG {
  0% {
    -moz-transform: scale(1);
    background-color: rgb(0, 0, 0);
  }

  100% {
    -moz-transform: scale(0.3);
    background-color: rgb(255, 255, 255);
  }
}
</style>
