import { reactive } from "vue";

export const store = reactive({
    urlMovies: 'https://api.themoviedb.org/3/search/movie?api_key=128fe074fca8ea8bdaf25144294f8033&query=',
    urlSeries: 'https://api.themoviedb.org/3/search/tv?api_key=128fe074fca8ea8bdaf25144294f8033&query=',
    moviesArray: [],
    seriesArray: [],
})  