<script>
import vprops from '../components/PropsComponents.vue'

export default{
    data() {
        return {
            parentMsg:"parentVal",
            parentObj:{
                name:"米諾",
                type:"臘腸"
            }
        }
    },
    components:{
        vprops,
    }
}
</script>

<template>
    <h1>這邊是父層:{{ this.parentMsg }}</h1>
    <h1>父層物件:{{this.parentObj}}</h1>
    <vprops v-bind:giveChildMsg = "this.parentMsg" :giveChildObj="this.parentObj.name" v-bind="this.parentObj"/>

</template>

<style scoped lang="scss"></style>