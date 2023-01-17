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
    getMovies(word){
      if(word === undefined){
        axios.get(store.url + 'ritorno+al+futuro').then((response) => {
          store.moviesArray = response.data.results
        })
      }
      else if(word === ''){
        store.moviesArray = ''
      }
      else{
        axios.get(store.url + word).then((response) => {
          store.moviesArray = response.data.results
        })
      }
    }
  }
}
</script>
<template lang="">
  <AppHeader @search="getMovies"/>
  <AppMain/>
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>