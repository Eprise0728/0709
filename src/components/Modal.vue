<script>

</script>

<template>
    <div class="slotArea">
        <div class="show">
            <slot></slot>
        </div>
        <div class="bg" @click="$emit('alertModal')"></div>
    </div>
</template>

<style scoped lang="scss">
.slotArea{
    width: 100%;
    height: 110dvh;
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 1;
    .show{
        width: 50%;
        height: 50%;
        background: white;
        z-index: 2;
    }

    .bg{
        width: 100%;
        height: 100%;
        position: absolute;
        background: rgb(0, 0, 0, 0.3);
        backdrop-filter: blur(5px);
        top: 0;
        left: 0;
    }
}
</style>