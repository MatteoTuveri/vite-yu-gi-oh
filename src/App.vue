<template>
  <header>
    <h1>Yu-Gi-Oh API</h1>
  </header>
  <main class="container">
    <div class="row">

      <CardList/>

    </div>
  </main>
</template>
<script>
  import { store } from './data/store.js';
  import axios from 'axios';
  import CardList from './components/CardList.vue';

export default{
  name:'App',
  data() {
    return {
      store
    }
  },
  components:{CardList},
  methods: {
    getCards() {
      const url = store.apiUrl + store.endPoint;
      axios.get(url).then((response) => {
        const cards = response.data.data
        for(let i=0;i<cards.length;i++){
          store.cardList.push({
          image: cards[i].card_images[0].image_url,
          name: cards[i].name,
          type: cards[i].archetype
        })
      }
      })
    }
  },
  created() {
    this.getCards();
  }
}

</script>
<style lang="scss" scoped>

</style>