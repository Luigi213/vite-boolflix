<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <ul>
            <li v-for="(movie, index) in store.moviesArray" :key="index">
                <h4>Titolo: {{ movie.title }}</h4> 
                <h5>Titolo Originale: {{ movie.original_title}}</h5> 
                <p>Lingua: {{ movie.original_language }}</p> 
                <p>Voto: {{ movie.vote_average }}</p>
            </li>
        </ul>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        ul{
            li{
                margin: 10px 0;
            }
        }
    }
</style>