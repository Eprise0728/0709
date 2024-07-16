<script>
export default{
    data() {
        return {
            bean:0,
        }
    },
    computed:{
        bottles(){
            return `${this.bean * 50} ml`;
        }
    },
    methods: {
        arrTest(){
            let arr =[1,2,3,4,5,6]
            arr.forEach((item) =>{
                console.log(item);
                if(item == 4){
                    return
                }
            })
            try{
            let arr =[1,2,3,4,5,6]
            arr.forEach((item) =>{
                console.log(item);
                if(item == 4){
                    throw new Error("到四了")
                }
            })
            }catch(e){
                alert(e.message)
            }
        }
    },
}
</script>

<template>
<h1>變數 bean :{{ this.bean }}</h1>
<button type="button" @click="this.bean++">btn</button>
<h2>假的數 bean : {{this.bottles}}</h2>
</template>

<style scoped lang="scss">
    
</style>