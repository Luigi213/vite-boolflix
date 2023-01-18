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
                        <img :src="store.imagesArray[index]">
                        <appFlagsMovies :moviesId="movie"/>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li v-for="(serie, index) in store.seriesArray" :key="index">
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
        }
    }
</style>