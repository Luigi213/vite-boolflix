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
        <div class="flag-content" v-if="seriesId.origin_country[0] != undefined">
            Lingua:  <img :src="`https://flagsapi.com/${seriesId.origin_country[0]}/flat/16.png`">
        </div> 
        <div class="flag-content" v-else>
            Lingua:  <img src="https://flagsapi.com/GB/flat/16.png">
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .flag-content{
        display: flex;
    }
</style>