<script>
import appFlagsMovies from './appFlagsMovies.vue'
import appFlagsSeries from './appFlagsSeries.vue'
import { store } from '../store.js'
export default {
    components:{
        appFlagsMovies,
        appFlagsSeries
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
                    <li v-for="(movie, index) in store.moviesArray" :key="index">
                        <div v-if="movie.backdrop_path != null"> 
                            <img :src="store.imagesArrayMovies[index]">
                        </div>
                        <div class="not-available" v-else>
                            <h2>NOT AVAILABLE</h2>
                        </div>
                        <appFlagsMovies :moviesId="movie"/>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(serie, index) in store.seriesArray" :key="index">
                        <div v-if="serie.backdrop_path != null"> 
                            <img :src="store.imagesArraySeries[index]">
                        </div>
                        <div class="not-available" v-else>
                            <h2>NOT AVAILABLE</h2>
                        </div>
                        <appFlagsSeries :seriesId="serie"/>
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
            .not-available{
                text-align: center;
                background-color: red;
            }
        }
    }
</style>