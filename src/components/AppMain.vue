<script>
import appFlagsMovies from './appFlagsMovies.vue'
import appFlagsSeries from './appFlagsSeries.vue'
import appGenreMovies from './appGenreMovies.vue'
import appGenreSeries from './appGenreSeries.vue'
import { store } from '../store.js'
export default {
    components:{
        appFlagsMovies,
        appFlagsSeries,
        appGenreMovies,
        appGenreSeries
    },
    props:{
        actors: Array
    },
    data(){
        return{
            store,
        }
    },
    computed:{
        starsMovies(){
            let votesArray = []
            store.moviesArray.filter((elem) =>{
                let starsArray = Math.floor(elem.vote_average / 2)
                return votesArray.push(starsArray)
            })
            return votesArray
        },
        starsSeries(){
            let votesArray = []
            store.seriesArray.filter((elem) =>{
                let starsArray = Math.floor(elem.vote_average / 2)
                return votesArray.push(starsArray)
            })
            return votesArray
        },
        genreMoviesId(){
            let genreMovies = []
            store.moviesArray.filter((elem) =>{
                return genreMovies.push(elem.genre_ids)
            })
            return genreMovies
        },
        genreSeriesId(){
            let genreSeries = []
            store.seriesArray.filter((elem) =>{
                return genreSeries.push(elem.genre_ids)
            })
            return genreSeries
        },
        getActorsMovies(){
            let actorMovies = []
            store.actorsArrayMovies.filter((elem) =>{
                return actorMovies.push(elem)
            })
            return actorMovies
        },
        getActorsSeries(){
            let actorSeries = []
            store.actorsArraySeries.filter((elem) =>{
                return actorSeries.push(elem)
            })
            return actorSeries
        }
    }
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <div>
                <h1>MOVIES</h1>
                <ul>
                    <li v-for="(movie, index) in store.moviesArray" :key="index">
                        <div class="image"> 
                            <img :src="store.imagesArrayMovies[index]" :alt="store.imagesArrayMovies.name">
                        </div>
                        <div class="position">
                            <appFlagsMovies :moviesId="movie"/>
                            <div class="genre">
                                <span><b> Genere:</b> </span>
                                <appGenreMovies v-for="(genId, index) in genreMoviesId[index]" :key="index" :genMoviesArray="genId"/>
                            </div>
                            <div class="actor">
                                <span><b>Actor:</b>  </span> 
                                <div class="name-actor" v-for="(actor,index) in getActorsMovies[index]" :key="index">
                                    <div v-if="index < 5">
                                        {{actor.name}},
                                    </div>
                                </div>
                            </div>
                            <div class="vote" v-if="starsMovies[index] !== 0">
                                <span><b>VOTO:</b></span><i v-for="(star, index) in starsMovies[index]" :key="index" class="fa-solid fa-star"></i>
                            </div>
                            <div class="no_star" v-else>NO STAR</div>
                        </div>
                    </li>
                </ul>
            </div>
            <div>
                <h1>SERIES</h1>
                <ul>
                    <li v-for="(serie, index) in store.seriesArray" :key="index">
                        <div class="image" v-if="serie.poster_path !== null"> 
                            <img :src="store.imagesArraySeries[index]" :alt="store.imagesArraySeries.name">
                        </div>
                        <div class="not_available" v-else>
                            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAPkAAADLCAMAAACbI8UEAAAAOVBMVEXV1dX///+1tbXW1tbS0tL7+/uysrLw8PDMzMzg4OC/v7/o6Ojj4+Pb29vn5+f09PTIyMi5ubnCwsLTzX6rAAAEuklEQVR4nO2bjbLqKgyF2wIiFlr1/R/2ZiVQq1vPnzrOteub2WMLNGQlAXrcZ3cdIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEL+HPeYT7v2Zs6HR+y/Wro77x4x7PynvXsn7rA77O8z7Paf9u6diPL9g1WOnk+790bu6HP+fDi6ez1fxR19fhiG3WGDOXfnAdL9BpUfVPl+Q8rrm4s77iB9Q+vcHQ/eWdOwG/bbWedI9alK9/tuO3u726PET9rk3LrnW2n6cJSZdFT9uudbafpOpnw4+POupn4Tyu0ku3DayjqXf7BdKx8OG1F+vBW+lbdXf6sbnLeg/J7wYXf8euV3dQ/13f3T7r2RXykfqPwr2XC17x9+97o7fdq59/KLtH5zxgkhhBBCCCGEEEL+Fu/XH8unXPjVmGXUctn5H0/WFt/ork2tjNzMdHV748T1Q4v1f1S7osSYxNwYo35dNMVYrCPG2KbPcwjzKP0pKllb64BiT/gSZxvUxUb7AspGuvpAnUtuR18NZDWdVj5N2pXVzHTlTrX9vPLc9+KA7/seenywT23vLQalN2bfjXalHuORKBep7zV0dZS43DeqchmhQ4JZdGrKR2lt3aOazi3SrWsxWvRhK41gTa9RLh+mTFWarrkK06Z5HGdMP8mlYDnvTZAqVx/jFLVJRvQ60F2EwPhktrNphILprnINXa7Ko8wsjlwphw+vUl4sjCYAM0higgYWIRixsJAu8T0vC6+GXpU7JEYSKTcBKxF+LmtRTTmz6dWglUrA7R3lGV0IFdxJ3iNua+XhNevclCdLoJZSqHNO6kupDZgMOZ9KKU05wu8LvJtqwCCrFvYyA+zoJEh+QSCi6g+jVf+tcumao4bKlKP/qtqDuPCC77DNKZSxOFT6YBnpEHSt0ayOpjnGuUDgsn6lG4WYVXmsfuNiulYOjYhS05hVr+Q/lmWjuFIuzZO1QXkQU7H7sc7j80lX5eJwEFUyU5xVWEJZz6hgU65bzaK8a8pR5OmHcn+lvEBEbKUQNBAa6lJH3SiHXIeRlx1u/rnDvUi5R4GJhyX0SStSPS3YX7xVexrnqjy3/93oawIDlI8Pq91M2WrAsGLZxD5fLF63Oddyntu+mbuiK3td7a/50xA71YI4Jj/ir3nQzqVgPsoin5ry1Q6nIUPaNT5oc7YW1jlfn3EFi6peLEflRbkaTqsu2+GiFcE7djgcwWM9fPTeqhp1ldGAbS1W5XGaprQot8MpaWZDKilY40p5XpRP9axsh7lNUPyifEw5F4ulhUr32ZL7qly6s16IC9PzWVelDqszqVDddpAYIel50l4nLus81jeZuj+hvrvm8Kx9i/Jmqh4RuZ7UKBEpWV0ki3I1LV0zuiJa29R2npsP7eJp5Un2Nj2ZJH0huM7Ji6r82A4iG6uTQ3rGbHh/mYIyqqZeP/0YVLmfbJCVpLzumnmYsw0gqLMh2CYf9H3J4TbZ6VJN5z6ojYIHrRFGYRGUevEC5X+Cx6+Af7uyMOotf5/0//yjJ/7WnBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQgghhBBCCCGEEEIIIYQQQshz/Ae0sy6cRcRStQAAAABJRU5ErkJggg==" alt="">
                        </div>
                        <div class="position">
                            <appFlagsSeries :seriesId="serie"/>
                            <div class="genre">
                                <span><b>Genere:</b></span>
                                <appGenreSeries v-for="(genId, index) in genreSeriesId[index]" :key="index" :genSeriesArray="genId"/>
                            </div>
                            <div class="actor">
                                <span><b>Actor:</b>  </span> 
                                <div class="name-actor" v-for="(actor,index) in getActorsSeries[index]" :key="index">
                                    <div v-if="index < 5">
                                        {{actor.name}},
                                    </div>
                                </div>
                            </div>
                            <div class="vote" v-if="starsSeries[index] !== 0">
                                <span><b>VOTO:</b></span> <i v-for="(star, index) in starsSeries[index]" :key="index" class="fa-solid fa-star"></i>
                            </div>
                            <div class="no_star" v-else>NO STAR</div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    @use '../styles/partials/mixins' as *;
    .container{
        .row{
            h1{
                color: $primary;
                margin: 20px 0;
                text-align: center;
            }
            ul{
                margin-bottom: 2rem;
                display: flex;
                justify-content: center;
                flex-wrap: wrap;
                li{
                    position: relative;
                    .image{
                        img{
                            @include size_card;
                            margin: 1px;
                        }
                    }
                    .not_available{
                        img{
                            width: 342px;
                            height: 513px;
                            object-fit: cover;
                        }
                    }
                    i{
                        color: $secondary;
                    }
                    span{
                        color: $primary;
                    }
                    &:hover .not_available{
                        filter: brightness(0.2);
                    } 
                    &:hover{
                        outline: 1px solid white;
                    }
                    &:hover .image{
                        filter: brightness(0.2);
                    }
                    &:hover .position{
                        display: block;
                    }
                    .position{
                        font-size: 12px;
                        overflow: hidden;
                        height: 513px;
                        position: absolute;
                        display: none;
                        top:0;          
                        line-height: 30px;    
                        b{
                            color: $tertiary;
                        }  
                        .actors{
                            color: $primary;
                        }        
                        .vote, .genre, .no_star, .actor{
                            padding: $padding_flag;
                        }
                        .genre{
                            display: flex;
                            color: $primary;
                        }
                        .actor{
                            display: flex;
                            flex-wrap: wrap;
                            color: $primary;
                        }
                        .no_star{
                            color: $primary;
                        }
                    }
                }
            }
        }
    }
</style>