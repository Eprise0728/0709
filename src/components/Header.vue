<script>
import { RouterLink } from 'vue-router'
export default{
    components:{
        RouterLink
    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink to="/" class="routeItem">HomeView</RouterLink>
        <RouterLink to="/VtestAndVmodel" class="routeItem">VtestAndVmodel</RouterLink>
        <RouterLink to="/VforAndVbind" class="routeItem">VforAndVbind</RouterLink>
        <RouterLink to="/VonAndVshow" class="routeItem">VonAndVshow</RouterLink>
    </div>
</template>

<style scoped lang ="scss">
.headerArea{
    width: 100%;
    height: 100%;
    background-color: rgb(66,105,135);

    .routeItem{
        margin-left: 10%;
        font-size: 24px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }
}
</style>
