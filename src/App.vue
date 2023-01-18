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
    this.getMoviesSeries()
  },
  methods: {
    getMoviesSeries(word){
      if(word === undefined){
        axios.get(store.urlMovies + 'ritorno+al+futuro').then((response,index) => {
          let moviD = response.data.results
          store.moviesArray = response.data.results
          for(let i=0; i < moviD.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${moviD[i].id}?api_key=128fe074fca8ea8bdaf25144294f8033`).then((response) => {
              store.countryArray = response.data
            })
            store.imagesArrayMovies.push(`https://image.tmdb.org/t/phttps://image.tmdb.org/t/p/w342${moviD[i].backdrop_path}`)
          }
        })
      }
      else if(word === ''){
        store.moviesArray = ''
      }
      else{
        axios.get(store.urlMovies + word).then((response) => {
          let moviD = response.data.results
          store.moviesArray = response.data.results
          store.imagesArrayMovies = []
          for(let i=0; i < moviD.length; i++){
            axios.get(`https://api.themoviedb.org/3/movie/${moviD[i].id}?api_key=128fe074fca8ea8bdaf25144294f8033`).then((response) => {
              store.countryArray = response.data
            })
            store.imagesArrayMovies.push(`https://image.tmdb.org/t/phttps://image.tmdb.org/t/p/w300${moviD[i].backdrop_path}`)
          }
        })
      }
      if(word === undefined){
        axios.get(store.urlSeries + 'scrubs').then((response) => {
          let moviD = response.data.results
          store.seriesArray = response.data.results
          for(let i=0; i < moviD.length; i++){
            store.imagesArraySeries.push(`https://image.tmdb.org/t/phttps://image.tmdb.org/t/p/w342${moviD[i].backdrop_path}`)
          }
        })
      }
      else if(word === ''){
        store.seriesArray = ''
      }
      else{
        axios.get(store.urlSeries + word).then((response) => {
          let moviD = response.data.results
          store.seriesArray = response.data.results
          store.imagesArraySeries = []
          for(let i=0; i < moviD.length; i++){
            store.imagesArraySeries.push(`https://image.tmdb.org/t/phttps://image.tmdb.org/t/p/w342${moviD[i].backdrop_path}`)
          }
        })
      }
    },
  }
}
</script>
<template lang="">
  <AppHeader @search="getMoviesSeries"/>
  <AppMain/>
</template>
<style lang="scss">
  @use './styles/generals.scss';
</style>