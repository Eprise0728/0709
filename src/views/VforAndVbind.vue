<script>
import vfor from '../components/VforComponent.vue'
import vbind from '../components/VbindComponent.vue'
import location from '../stores/location'
import {mapActions} from 'pinia'
export default{
    components:{
        vfor,
        vbind
    },
    methods: {
        ...mapActions(location ,["setpages"])
    },
    mounted() {
        this.setpages(3)
    },
}
</script>

<template>
    <vfor />
    <vbind />
</template>

<style scoped lang="scss"></style>