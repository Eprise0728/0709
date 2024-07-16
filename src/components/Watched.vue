<script>
export default{
    data() {
        return {
            point:0,
            ntd:0,
        }
    },
    watch:{
        point(){
            this.ntd = this.point * 10;
        }
    },
}
</script>

<template>
    <h1>變數 point : {{ this.point }}</h1>
    <button type="button" @click="this.point++">btn</button>
    <h2>變數 ntd : {{ this.ntd }}</h2>
</template>

<style scoped lang="scss">
    
</style>