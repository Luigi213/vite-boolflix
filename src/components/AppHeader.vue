<script>
export default {
    data(){    
        return{
            find: '',
        }
    },
    methods: {
        send(){
            this.$emit('search', this.find)
        },
    },
}
</script>
<template lang="">
    <div class="container">
        <div class="row">
            <input v-model="find" @keyup.enter="send" type="text">
            <button @click="send">search</button>
        </div>
    </div>
</template>
<style lang="scss" scoped>
    .container{
        .row{
            display: flex;
            justify-content: center;
        }
    }
</style>