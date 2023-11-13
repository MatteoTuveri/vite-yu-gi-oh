<template>
    <div class="card" style="width: 18rem;">
        <img :src="cardImage" class="card-img-top" :alt="cardTitle">
        <div class="card-body text-center">
            <h5 class="card-title">{{ cardTitle }}</h5>
            <p class="card-text">{{ cardText }}</p>
        </div>
    </div>
</template>
<script>

export default {
    name:'CardComponent',
    data() {
        return {

        }
    },
    props:{
        cardImage: String,
        cardTitle: String,
        cardText: String
    }
}

</script>
<style lang="scss" scoped></style>