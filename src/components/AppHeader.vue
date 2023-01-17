<script>
export default {
    data(){    
        return{
            movieSearch: ''
        }
    },
    methods: {
        send(){
            this.$emit('search', this.movieSearch)
        }
    },
}
</script>
<template lang="">
    <div class="container">
        <input v-model="movieSearch" @keyup.enter="send" type="text">
        <button @click="send">search</button>
    </div>
</template>
<style lang="scss" scoped>
    
</style>