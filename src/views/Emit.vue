<script>
import emitChild from '../components/EmitComponents.vue'
import location from '../stores/location'
import {mapActions} from 'pinia'
export default{
    data() {
        return {
            getChildVal:"",
            childChange:"parent"
        }
    },
    components:{
        emitChild,
    },
    methods: {
        childFun(params){
            console.log(params);
            this.getChildVal = params;
        },
        ...mapActions(location ,["setpages"])
    },
    mounted() {
        this.setpages(6)
    },
    
}
</script>

<template>
    <emitChild @childMsg="this.childFun"v-model:fromChild="this.childChange"/>
    <h2>{{ this.getChildVal }}</h2>
    <h2>{{ this.childChange }}</h2>

</template>

<style scoped lang="scss"></style>