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
    <header class="bg-header">
        <div class="container">
            <div class="row">
                <div>
                    <img src="https://image.tmdb.org/t/p/w92/wwemzKWzjKYJFfCeiB57q3r4Bcm.png" alt="">
                </div>
                <div>
                    <input v-model="find" @keyup.enter="send" type="text">
                    <button @click="send"><i class="fa-solid fa-magnifying-glass"></i></button>
                </div>
            </div>
        </div>
    </header>
</template>
<style lang="scss" scoped>
    .bg-header{
        background-color: rgb(10, 10, 10);
        .row{
            padding: 20px 0;
            display: flex;
            justify-content: space-between;
        }
    }
</style>