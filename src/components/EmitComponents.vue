<script>
export default{
    data() {
        return {
            childrenMsg:"childrenVal"
        }
    },
    props:[
        'fromChild'
    ],
    emits:[
        'fromChild'
    ]
}
</script>

<template>
    <button type="button" @click="$emit('childMsg',this.childrenMsg)">Btn</button>
    <input type="text" :value="this.fromChild"@input ="$emit('update:fromChild',$event.target.value)">
    </template>

<style scoped lang="scss">

</style>