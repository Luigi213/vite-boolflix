<script>
export default {
    props:{
        seriesId: Object
    }
}
</script>
<template lang="">
    <div>
        <div class="title">
            <div><b>Titolo:</b>{{ seriesId.name }}</div> 
            <div><b>Titolo Originale:</b>{{ seriesId.original_name}}</div> 
            <div><b>Overview:</b>{{ seriesId.overview}}</div> 
        </div>
        <div class="flag-content" v-if="seriesId.origin_country[0] != undefined">
            <span> <b>Lingua:</b></span><img :src="`https://flagsapi.com/${seriesId.origin_country[0]}/flat/16.png`" :alt="seriesId.origin_country[0]">
        </div> 
        <div class="flag-content" v-else>
            <span> <b>Lingua:</b></span><img src="https://flagsapi.com/GB/flat/16.png" alt="GB">
        </div>
    </div>
</template>
<style lang="scss" scoped>
    @use '../styles/partials/variables' as *;
    .title{
        width: 335px;
        padding: $padding;
        color: $primary;
        line-height: 25px;
        div{
            width: 100%;
        }
    }
    .flag-content{
        color: $primary;
        padding: $padding_flag;
        img{
            vertical-align: middle;
        }
        b{
            color:$tertiary;
        }
    }
</style>