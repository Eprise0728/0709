<script>
import von from '../components/VAndVshowComponent.vue'
import vshow from '../components/VonComponent.vue'
import vmodal from '../components/sletModal.vue'
import location from '../stores/location'
import {mapActions} from 'pinia'
export default{
    components:{
        von,
        vshow,
        vmodal,
    },
    methods: {
        ...mapActions(location ,["setpages"])
    },
    mounted() {
        this.setpages(4)
    },
}
</script>

<template>
    <von />
    <vshow />
    <vmodal>
        Funny
        <template v-slot:title>
            這是標題
        </template>
    </vmodal>
</template>

<style scoped lang="scss"></style>