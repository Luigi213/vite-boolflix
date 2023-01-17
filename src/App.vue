<script>
import AppHeader from './components/AppHeader.vue';
import AppMain from './components/AppMain.vue';
import { store } from './store.js'
import axios from 'axios'
export default {
  components:{
    AppHeader,
    AppMain
  },
  data(){
    return{
      store
    }
  },
  mounted(){
    this.getMovies()
  },
  methods: {
    getMovies(){
      axios.get('https://api.themoviedb.org/3/search/movie?api_key=128fe074fca8ea8bdaf25144294f8033&query=ritorno+al+futuro').then((response) => {
        store.moviesArray = response.data.results
      })
    }
  },
}
</script>
<template lang="">
  <AppHeader/>
  <AppMain/>
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>