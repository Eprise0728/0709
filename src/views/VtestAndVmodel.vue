<script>
import { vModelText } from 'vue';

export default{
    data(){ //data:function()
        return{
            text:"This is Text Code!!",
            modelText:"",
            modelCheck:"",
            modelRadio:"",
            modelSelect:"",
        }
    }
}
</script>

<template>
    <!-- v-text -->
    <p v-text="this.text"></p>
    <p>{{ this.text }}</p>
    <P v-text="`使用單引號表示字串`"></P>

    <!--v-model-->
    <!--標籤的質與變數雙向綁定-->
    <input type="text" v-model="this.modelText">
    <h3>與v-model 綁定的變數:{{this.modelText}}</h3>

    <!--單選-->
    <label for="cool1">這是酷酷1</label>
    <input type="radio" id="cool1" v-model="this.modelRadio" value="這是酷酷1" name="coolGr">
    <label for="cool2">這是酷酷2</label>
    <input type="radio" id="cool1" v-model="this.modelRadio" value="這是酷酷2" name="coolGr">
    <label for="cool3">這是酷酷3</label>
    <input type="radio" id="cool3" v-model="this.modelRadio" value="這是酷酷3" name="coolGr">

    <!--複選-->
    <label for="meat1">魚肉</label>
    <input type="checkbox" id="meat1" v-model="this.modelCheck" value="魚肉" name="meat">
    <label for="meat2">豬肉</label>
    <input type="checkbox" id="meat2" v-model="this.modelCheck" value="豬肉" name="meat">
    <label for="meat3">雞肉</label>
    <input type="checkbox" id="meat3" v-model="this.modelCheck" value="雞肉" name="meat">
    <h3>{{ this.modelCheck }}</h3>

    <!--下拉式選單-->

    <select name="" id="" v-model="this.modelSelect">
    <option value="">請選擇</option>
    <option value="Tea">茶克拉</option>
    <option value="Coffee">咖啡</option>
    <option value="Milk">牛奶</option>
</select>
<h3>{{ this.modelSelect }}</h3>
</template>

<style>

</style>
