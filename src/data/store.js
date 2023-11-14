// store.js
import { reactive } from "vue";

export const store = reactive({
    apiUrl:'https://db.ygoprodeck.com/api/',
    endPoint: 'v7/cardinfo.php?num=20&offset=0',
    archetypes:'https://db.ygoprodeck.com/api/v7/archetypes.php',
    cardList: [],
    searchList: []
});