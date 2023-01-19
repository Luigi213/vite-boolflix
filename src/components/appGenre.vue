<script>
import { store } from '../store.js'
export default {
    data(){
        return{
            store,
        }
    },
    props:{
        genMoviesArray: Number,
    }
}
</script>
<template lang="">
    <div v-for="(gen, index) in store.genre" :key="index" class="genre">
        <div v-if="gen.id === genMoviesArray">
            {{gen.name}},
        </div>
    </div>
</template>
<style lang="scss" scoped> 
    @use '../styles/partials/variables' as *;
    .gen-id{
        color: $primary;
    }
</style>