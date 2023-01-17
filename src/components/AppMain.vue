<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store,
            lang: store,
        }
    },
    computed:{
        country(){  
            let newLang = this.lang.moviesArray
            newLang.filter((elem) => {
                return store.ciao = elem
            })
        },
        ciao(){

        }
    },
    methods:{
    }
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
                        <div class="flag">
                            Lingua:  <img :src="`https://flagsapi.com/${country}/flat/16.png`">
                        </div>
                        <p>Voto: {{ movie.vote_average }}</p>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(serie, index) in store.seriesArray" :key="index">
                        <h4>Titolo: {{ serie.name }}</h4> 
                        <h5>Titolo Originale: {{ serie.original_title}}</h5> 
                        <div class="flag" v-if="serie.origin_country[0] != undefined">
                            Lingua:  <img :src="`https://flagsapi.com/${serie.origin_country[0]}/flat/16.png`">
                        </div> 
                        <div class="flag" v-else>
                            Lingua:  <img src="https://flagsapi.com/US/shiny/16.png">
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