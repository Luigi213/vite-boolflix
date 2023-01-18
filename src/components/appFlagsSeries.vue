<script>
export default {
    props:{
        seriesId: Object
    }
}
</script>
<template lang="">
    <div>
        <div>
            <h4>Titolo: {{ seriesId.name }}</h4> 
            <h5>Titolo Originale: {{ seriesId.original_name}}</h5> 
        </div>
        <div class="flag" v-if="seriesId.origin_country[0] != undefined">
            Lingua:  <img :src="`https://flagsapi.com/${seriesId.origin_country[0]}/flat/16.png`">
        </div> 
        <div class="flag" v-else>
            Lingua:  <img src="https://flagsapi.com/GB/flat/16.png">
        </div>
        <p>Voto: {{ seriesId.vote_average }}</p>
    </div>
</template>
<style lang="scss" scoped>
</style>