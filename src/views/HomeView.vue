<script>
import location from '../stores/location'
import {mapActions} from 'pinia'
import Modal from '../components/Modal.vue'
export default{
    data() {
        return {
            arr:[1,2,3],
            controlModal:false,
        }
    },
    methods: {
        ...mapActions(location ,["setpages"]),
        showModal(){
            this.controlModal = !this.controlModal
        }
    },
    components:{
        Modal,
    },
    mounted() {
        this.setpages(1)
    },
}
</script>

<template>
    <h1>HomeView</h1>
    <button type="button" v-for="item in this.arr" @click="this.$router.push(`/Dynamic/${item}`)">
        BTN---{{ item }}
    </button>
<button type="button" @click="this.showModal()">test</button>
<Modal v-show="this.controlModal" @alertModal="this.showModal">

</Modal>
</template>

<style scoped></style>