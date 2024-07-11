<script>
import von from '../components/VAndVshowComponent.vue'
import vshow from '../components/VonComponent.vue'
import vmodal from '../components/sletModal.vue'

export default{
    components:{
        von,
        vshow,
        vmodal
    }
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