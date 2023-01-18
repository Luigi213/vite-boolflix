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
                <appFlagsMovies v-for="(movie, index) in store.moviesArray" :key="index" :moviesId="movie"/>
            </div>
            <div>
                <appFlagsSeries v-for="(serie, index) in store.seriesArray" :key="index" :seriesId="serie"/>
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