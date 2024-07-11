<script>
export default{
    data() {
        return {
            arr:[1,2,3,4,5,6,7,8,9]
        }
    }
}
</script>

<template>
<div class="vforOne" v-for="(item, index) in this.arr">
    <p>Lorem ipsum dolor sit amet.{{ index }}</p>
</div>
<select name="" id="">
        <option value="">請選擇</option>
        <option value="" v-for="item in this.arr">{{item}}</option>
    </select>
</template>

<style scoped lang="scss">
.vforOne{
    width: 200px;
    height: 90px;
}
</style>