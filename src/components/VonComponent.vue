<script>
export default{
    data() {
        return {
            vonTextOne:"vontestOne",
        }
    },
    methods:{
        vonTestFun(){
            console.log(this.vonTextOne);
        }
    }
}
</script>

<template>
    <button type="button" v-on:click="this.vonTestFun()">Btn</button>
    <button type="button" @click="this.vonTestFun()">Btn</button>
    <input type="text" @input="this.vonTestFun()">
</template>

<style scoped lang ="scss">

</style>