<script>
import appFlags from './appFlags.vue'
import { store } from '../store.js'
export default {
    components:{
        appFlags
    },
    data(){
        return{
            store,
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div>
                <ul>
                    <appFlags v-for="(movie, index) in store.moviesArray" :key="index" :moviesId="movie"/>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(serie, index) in store.seriesArray" :key="index">
                        <h4>Titolo: {{ serie.name }}</h4> 
                        <h5>Titolo Originale: {{ serie.original_name}}</h5> 
                        <div class="flag" v-if="serie.origin_country[0] != undefined">
                            Lingua:  <img :src="`https://flagsapi.com/${serie.origin_country[0]}/flat/16.png`">
                        </div> 
                        <div class="flag" v-else>
                            Lingua:  <img src="https://flagsapi.com/GB/flat/16.png">
                        </div>
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
                    .flag{
                        display: flex;
                    }
                }
            }
        }
    }
</style>