// store.js
import { reactive } from "vue";

export const store = reactive({
    apiUrl:'https://db.ygoprodeck.com/api/',
    endPoint: 'v7/cardinfo.php?num=20&offset=0',
    cardList: [],
});