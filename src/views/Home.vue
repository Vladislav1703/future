<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Тестовое задание"></HelloWorld>
    <select v-model="list" @change="selectList($event)">
      <option disabled value="Выберите один из вариантов">Выберите один из вариантов</option>
      <option :value="SmallList">Малый список</option>
      <option :value="BigList">Большой список</option>
    </select>
    <div class="preloader" v-show="LOADING">
      <p>Идёт загрузка списка</p>
      <div class="cssload-thecube">
        <div class="cssload-cube cssload-c1"></div>
        <div class="cssload-cube cssload-c2"></div>
        <div class="cssload-cube cssload-c4"></div>
        <div class="cssload-cube cssload-c3"></div>
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
      <InputRow @pushRow="pushRow"></InputRow>
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
import InputRow from '@/components/InputRow.vue'
import { mapActions, mapGetters } from 'vuex'

export default {
  name: 'Home',
  components: {
    HelloWorld,
    ListItem,
    FilteredList,
    FullCard,
    InputRow
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
      this.$store.dispatch('SET_FILTER', filterkey)
    },
    pushRow (id, firstName, lastName, email, phone) {
      this.$store.dispatch('PUSH_ROW_IN_LIST', { id, firstName, lastName, email, phone })
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
  margin-top: 20px;
}
tr {
  border: 1px solid black;
}
th {
  padding: 3px;
  background: #41b883;
  border: 1px solid black;
}
.cssload-thecube {
  width: 73px;
  height: 73px;
  margin: 0 auto;
  margin-top: 49px;
  position: relative;
  transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
}
.cssload-thecube .cssload-cube {
  position: relative;
  transform: rotateZ(45deg);
    -o-transform: rotateZ(45deg);
    -ms-transform: rotateZ(45deg);
    -webkit-transform: rotateZ(45deg);
    -moz-transform: rotateZ(45deg);
}
.cssload-thecube .cssload-cube {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  transform: scale(1.1);
    -o-transform: scale(1.1);
    -ms-transform: scale(1.1);
    -webkit-transform: scale(1.1);
    -moz-transform: scale(1.1);
}
.cssload-thecube .cssload-cube:before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #41b883;
  animation: cssload-fold-thecube 2.76s infinite linear both;
    -o-animation: cssload-fold-thecube 2.76s infinite linear both;
    -ms-animation: cssload-fold-thecube 2.76s infinite linear both;
    -webkit-animation: cssload-fold-thecube 2.76s infinite linear both;
    -moz-animation: cssload-fold-thecube 2.76s infinite linear both;
  transform-origin: 100% 100%;
    -o-transform-origin: 100% 100%;
    -ms-transform-origin: 100% 100%;
    -webkit-transform-origin: 100% 100%;
    -moz-transform-origin: 100% 100%;
}
.cssload-thecube .cssload-c2 {
  transform: scale(1.1) rotateZ(90deg);
    -o-transform: scale(1.1) rotateZ(90deg);
    -ms-transform: scale(1.1) rotateZ(90deg);
    -webkit-transform: scale(1.1) rotateZ(90deg);
    -moz-transform: scale(1.1) rotateZ(90deg);
}
.cssload-thecube .cssload-c3 {
  transform: scale(1.1) rotateZ(180deg);
    -o-transform: scale(1.1) rotateZ(180deg);
    -ms-transform: scale(1.1) rotateZ(180deg);
    -webkit-transform: scale(1.1) rotateZ(180deg);
    -moz-transform: scale(1.1) rotateZ(180deg);
}
.cssload-thecube .cssload-c4 {
  transform: scale(1.1) rotateZ(270deg);
    -o-transform: scale(1.1) rotateZ(270deg);
    -ms-transform: scale(1.1) rotateZ(270deg);
    -webkit-transform: scale(1.1) rotateZ(270deg);
    -moz-transform: scale(1.1) rotateZ(270deg);
}
.cssload-thecube .cssload-c2:before {
  animation-delay: 0.35s;
    -o-animation-delay: 0.35s;
    -ms-animation-delay: 0.35s;
    -webkit-animation-delay: 0.35s;
    -moz-animation-delay: 0.35s;
}
.cssload-thecube .cssload-c3:before {
  animation-delay: 0.69s;
    -o-animation-delay: 0.69s;
    -ms-animation-delay: 0.69s;
    -webkit-animation-delay: 0.69s;
    -moz-animation-delay: 0.69s;
}
.cssload-thecube .cssload-c4:before {
  animation-delay: 1.04s;
    -o-animation-delay: 1.04s;
    -ms-animation-delay: 1.04s;
    -webkit-animation-delay: 1.04s;
    -moz-animation-delay: 1.04s;
}

@keyframes cssload-fold-thecube {
  0%, 10% {
    transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-o-keyframes cssload-fold-thecube {
  0%, 10% {
    -o-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -o-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -o-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-ms-keyframes cssload-fold-thecube {
  0%, 10% {
    -ms-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -ms-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -ms-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-webkit-keyframes cssload-fold-thecube {
  0%, 10% {
    -webkit-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -webkit-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -webkit-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}

@-moz-keyframes cssload-fold-thecube {
  0%, 10% {
    -moz-transform: perspective(136px) rotateX(-180deg);
    opacity: 0;
  }
  25%,
        75% {
    -moz-transform: perspective(136px) rotateX(0deg);
    opacity: 1;
  }
  90%,
        100% {
    -moz-transform: perspective(136px) rotateY(180deg);
    opacity: 0;
  }
}
</style>
