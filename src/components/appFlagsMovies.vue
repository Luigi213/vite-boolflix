<script>
import { store } from '../store.js'
export default {
    props:{
        moviesId: Object
    },
    data(){
        return{
            store,
        }
    },
}

</script>
<template lang="">
    <div>
        <div>
            <h4>Titolo: {{ moviesId.title }}</h4> 
            <h5>Titolo Originale: {{ moviesId.original_title}}</h5> 
        </div>
        <div class="flag-content">
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
    </div>
</template>
<style lang="scss" scoped>
    .flag-content{
        display: flex;
    }
</style>