<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div>
                <ul>
                    <li v-for="(movie, index) in store.moviesArray" :key="index">
                        <h4>Titolo: {{ movie.title }}</h4> 
                        <h5>Titolo Originale: {{ movie.original_title}}</h5> 
                        <p>Lingua: {{ movie.original_language }}</p> 
                        <p>Voto: {{ movie.vote_average }}</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(serie, index) in store.seriesArray" :key="index">
                        <h4>Titolo: {{ serie.name }}</h4> 
                        <h5>Titolo Originale: {{ serie.original_title}}</h5> 
                        <p>Lingua: {{ serie.original_language }}</p> 
                        <p>Voto: {{ serie.vote_average }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        .row{
            display: flex;
            justify-content: space-around;
            ul{
                li{
                    margin: 10px 0;
                }
            }
        }
    }
</style>