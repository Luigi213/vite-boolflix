<script>
export default {
    props:{
        seriesId: Object
    }
}
</script>
<template lang="">
    <ul>
        <li>
            <h4>Titolo: {{ seriesId.name }}</h4> 
            <h5>Titolo Originale: {{ seriesId.original_name}}</h5> 
            <div class="flag" v-if="seriesId.origin_country[0] != undefined">
                Lingua:  <img :src="`https://flagsapi.com/${seriesId.origin_country[0]}/flat/16.png`">
            </div> 
            <div class="flag" v-else>
                Lingua:  <img src="https://flagsapi.com/GB/flat/16.png">
            </div>
            <p>Voto: {{ seriesId.vote_average }}</p>
        </li>
    </ul>
</template>
<style lang="scss" scoped>
    ul{
        li{
            margin: 10px 0;
        }
    }
</style>