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
    setParameters(search){
      this.find = search
      this.getCards();
    },
    getCards() {
      const url = store.apiUrl + store.endPoint;
      axios.get(url, { params:{ archetype: this.find}}).then((response) => {
        const cards = response.data.data
        store.cardList = cards;
      })
    },
    getArchetypes (){
      axios.get(store.archetypes).then((resp) =>{
        for (let i = 0; i < resp.data.length; i++) {
          store.searchList.push({
            name: resp.data[i].archetype_name
          })
        }
      })
    }
  },
  created() {
    this.setParameters();
    this.getCards();
    this.getArchetypes();
  }
}

</script>
<style lang="scss" scoped>
.bg-or {
  background-color: rgb(212, 143, 56);
}
</style>