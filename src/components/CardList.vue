<template>
    <div class="col-12 col-md-4 col-lg-3" v-for="(item, index) in store.cardList" :key="item.id">
        <CardComponent :card-image="item.card_images[0].image_url" :card-title="item.name" :card-text="item.archetype" />
    </div>
</template>

<script>
import CardComponent from './CardListComponents/CardComponent.vue';
import { store } from '../data/store';
export default {
    name: "CardList",
    data() {
        return {
            store
        };
    },
    components: { CardComponent }
}
</script>

<style lang="scss" scoped></style>