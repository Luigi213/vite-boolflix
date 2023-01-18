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
        <div class="title">
            <div><b>Titolo:</b>{{ moviesId.title }}</div> 
            <div><b>Titolo Originale:</b>{{ moviesId.original_title}}</div> 
            <div><b>Overview:</b>{{ moviesId.overview}}</div> 
        </div>
        <div class="flag-content">
            <span>Lingua:</span>
            <div v-if="moviesId.original_language === 'en'">
                <img src="https://flagsapi.com/GB/flat/16.png" alt="EN">
            </div>
            <div v-else-if="moviesId.original_language === 'it'">
                <img src="https://flagsapi.com/IT/flat/16.png" alt="IT">
            </div>
            <div v-else v-for="(flagMovie, index) in store.countryArray.production_countries" :key="index">
                <img :src="`https://flagsapi.com/${flagMovie.iso_3166_1}/flat/16.png`" :alt="flagMovie.iso_3166_1">
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    .flag-content{
        display: flex;
        padding: $padding_flag;
        span{
            color: $primary;
        }
    }
    .title{
        width: 335px;
        padding: $padding;
        line-height: 25px;
        color: $primary;
        div{
            width: 100%;
        }
    }
</style>