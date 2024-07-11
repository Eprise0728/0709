<script>
export default{
    data(){
        return{
            imgArr:[
                "https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em002_01_ID.png",
                "https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em102_ID.png",
                "https://cdn.kiranico.net/file/kiranico/mhworld-web/mhw/icon/em100_ID.png"
            ],
            clsArr:[" "]
        }
    }
}
</script>

<template>
<!--v-bind跟標籤的屬性雙向綁定-->
<div class="imgArr">
<img :src="item" alt="" v-for="item in this.imgArr">
</div>
<label for="">Blue</label>
<input type="checkbox" value="blue" v-model="this.clsArr">
<label for="">Large</label>
<input type="checkbox" value="Large" v-model="this.clsArr">
<label for="">UnderLine</label>
<input type="checkbox" value="UnderLine" v-model="this.clsArr">
<h1 :class="this.clsArr">test</h1>
</template>

<style lang="scss">
.imgArr{
    width: 500px;
    height: 500px;

}
.blue{
        color: blue;
    }
.Large{
    font-size: 60px;
}
.UnderLine{
    text-decoration:underline;
}
</style>