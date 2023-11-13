<template>
  <header class="text-center my-4">
    <h1>Yu-Gi-Oh API</h1>
  </header>
  <main class="bg-or">
    <div class="container py-5">
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

export default {
  name: 'App',
  data() {
    return {
      store
    }
  },
  components: { CardList },
  methods: {
    getCards() {
      const url = store.apiUrl + store.endPoint;
      axios.get(url).then((response) => {
        const cards = response.data.data
        console.log(cards)
        for (let i = 0; i < cards.length; i++) {
          store.cardList.push({
            image: cards[i].card_images[0].image_url,
            name: cards[i].name,
            type: cards[i].type
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
.bg-or {
  background-color: rgb(212, 143, 56);
}
</style>