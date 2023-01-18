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
        axios.get(store.urlMovies + 'ritorno+al+futuro').then((response,index) => {
          let ciao = response.data.results
          store.moviesArray = response.data.results
          for(let i=0; i < ciao.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${ciao[i].id}?api_key=128fe074fca8ea8bdaf25144294f8033`).then((response) => {
              store.countryArray = response.data
            })
          }
        })
      }
      else if(word === ''){
        store.moviesArray = ''
      }
      else{
        axios.get(store.urlMovies + word).then((response) => {
          let ciao = response.data.results
          store.moviesArray = response.data.results
          for(let i=0; i < ciao.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${ciao[i].id}?api_key=128fe074fca8ea8bdaf25144294f8033`).then((response) => {
              store.countryArray = response.data
            })
          }
        })
      }
      if(word === undefined){
        axios.get(store.urlSeries + 'scrubs').then((response) => {
          store.seriesArray = response.data.results
        })
      }
      else if(word === ''){
        store.seriesArray = ''
      }
      else{
        axios.get(store.urlSeries + word).then((response) => {
          store.seriesArray = response.data.results
        })
      }
    },
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