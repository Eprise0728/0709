<script>
import Watch from '../components/Watched.vue'
import Computeds from '../components/Computeds.vue'
import location from '../stores/location'
import {mapActions} from 'pinia'
export default{
    components:{
        Watch,
        Computeds,
    },
    methods: {
        ...mapActions(location ,["setpages"])
    },
    mounted() {
        this.setpages(7)
    },
}
</script>

<template>
    <Watch />
    <Computeds />
    
</template>

<style scoped lang="scss"></style>