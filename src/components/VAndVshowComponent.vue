<script>

export default{
    data() {
        return {
            selectVal:"",
            radiofor:""
        }
    },
}
</script>

<template>
    <select name="" id="" v-model="this.selectVal">
        <option value="">請選擇</option>
        <option value="A">A</option>
        <option value="B">B</option>
    </select>

    <h1 v-if="this.selectVal == `A`">這是A</h1>
    <h1 v-else-if="this.selectVal == `B`">這是B</h1>
    <h1 v-else>這是空</h1>

    <label for="">肉彈戰車</label>
    <input type="radio" v-model="this.radiofor" value="肉彈戰車" name="meat">
    <label for="">螺旋丸</label>
    <input type="radio" v-model="this.radiofor" value="螺旋丸" name="meat">

    <h1 v-show="this.radiofor == `肉彈戰車`">丁次</h1>
    <h1 v-show="this.radiofor == `螺旋丸`">木葉丸</h1>
</template>

<style scoped lang ="scss">

</style>