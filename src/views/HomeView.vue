<script>
import location from '../stores/location'
import {mapActions} from 'pinia'
export default{
    methods: {
        ...mapActions(location ,["setpages"])
    },
    mounted() {
        this.setpages(1)
    },
}
</script>

<template>
    <h1>HomeView</h1>
</template>

<style scoped></style>