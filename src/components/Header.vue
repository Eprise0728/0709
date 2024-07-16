<script>
import { RouterLink } from 'vue-router'
import location from '../stores/location'
import {mapState} from 'pinia';
export default{
    components:{
        RouterLink
    },
    computed:{
        ...mapState(location, ["location","pagelocation"])
    }
}
</script>

<template>
    <div class="headerArea">
        <RouterLink to="/" class="routeItem" :class="{'selected': this.location === 1}">HomeView</RouterLink>
        <RouterLink to="/VtestAndVmodel" class="routeItem" :class="{'selected': this.location === 2}">VtestAndVmodel</RouterLink>
        <RouterLink to="/VforAndVbind" class="routeItem" :class="{'selected': this.location === 3}">VforAndVbind</RouterLink>
        <RouterLink to="/VonAndVshow" class="routeItem" :class="{'selected': this.location === 4}">VonAndVshow</RouterLink>
        <RouterLink to="/Props" class="routeItem" :class="{'selected': this.location === 5}">Props</RouterLink>
        <RouterLink to="/Emit" class="routeItem" :class="{'selected': this.location === 6}">Emit</RouterLink>
        <RouterLink to="/WatchAndComputed" class="routeItem" :class="{'selected': this.location === 7}">WatchAndComputed</RouterLink>
    </div>
    <span>{{ this.pagelocation }}</span>
</template>

<style scoped lang ="scss">
.headerArea{
    width: 100%;
    height: 100%;
    background-color: rgb(66,105,135);
    display: flex;
    flex-wrap: wrap;
    .routeItem{
        margin-left: 10%;
        font-size: 24px;
        color: white;
        text-decoration: none;
        cursor: pointer;
    }

    .selected{
        color: blue;
    }
}
</style>
