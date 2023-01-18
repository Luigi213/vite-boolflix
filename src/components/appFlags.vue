<script>
import { store } from '../store.js'
import axios from 'axios'
export default {
    props:{
        moviesId: Object
    },
    data(){
        return{
            store
        }
    },
}

</script>
<template lang="">
    <ul>
        <li>
            <h4>Titolo: {{ moviesId.title }}</h4> 
            <h5>Titolo Originale: {{ moviesId.original_title}}</h5> 
            <div class="flag">
                <span>Lingua:</span>
                <div v-if="moviesId.original_language === 'en'">
                    <img src="https://flagsapi.com/GB/flat/16.png">
                </div>
                <div v-else-if="moviesId.original_language === 'it'">
                    <img src="https://flagsapi.com/IT/flat/16.png">
                </div>
                <div v-else v-for="(flagMovie, index) in store.countryArray.production_countries" :key="index">
                    <img :src="`https://flagsapi.com/${flagMovie.iso_3166_1}/flat/16.png`">
                </div>
            </div>
            <p>Voto: {{ moviesId.vote_average }}</p>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
    .flag{
        display: flex;
    }
</style>