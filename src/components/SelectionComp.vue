<template>
    <select class="form-select my-5" aria-label="Default select example" v-model="search" @change="$event =>$emit('searchArchetype',search)">
        <option selected value=" ">Open this select menu</option>
        <option v-for="(item,index) in store.searchList" :value="item.name">{{ item.name }}</option>
    </select>
</template>

<script>
import { store } from '../data/store.js';
export default {
    name:'SelectionComp',
    data() {
        return {
            store,
            search:' '
        }
    },

}
</script>

<style lang="scss" scoped></style>