<template>
  <header class="text-center my-4">
    <h1>Yu-Gi-Oh API</h1>
  </header>
  <main class="bg-or">
    <div class="container py-5 d-flex flex-column align-items-center">
      <SelectionComp @search-archetype="setParameters" />
      <div class="row">
        <CardList />
      </div>
    </div>
  </main>
</template>
<script>
import { store } from './data/store.js';
import axios from 'axios';
import CardList from './components/CardList.vue';
import SelectionComp from './components/SelectionComp.vue';

export default {
  name: 'App',
  data() {
    return {
      store,
      find: null
    }
  },
  components: { CardList, SelectionComp },
  methods: {
    setParameters(search) {
      if (search) {
        this.find = search
        this.getCards();
      }
      else {
        this.find = null
      }
    },
    getCards() {
      const url = store.apiUrl + store.endPoint;
      axios.get(url, { params: { archetype: this.find } }).then((response) => {
        const cards = response.data.data
        store.cardList = cards;
      })
    },
  },
  created() {
    function getCards() {
      return axios.get(store.apiUrl + store.endPoint);
    }

    function getArchetypes() {
      return axios.get(store.archetypes);
    }

    Promise.all([getCards(), getArchetypes()])
      .then(function (results) {
        const cards = results[0].data.data;
        store.cardList = cards;
        const archetypes = results[1].data;
        for (let i = 0; i < archetypes.length; i++) {
          store.searchList.push({
            name: archetypes[i].archetype_name
          })
        }
      });
  }
}

</script>
<style lang="scss" scoped>
.bg-or {
  background-color: rgb(212, 143, 56);
}
</style>