import { defineStore } from "pinia";

export default defineStore('location',{
    state(){
        return{
            location:1,
        }
    },
    getters:{
        pagelocation(){
            return `現在位置:第${this.location}頁`
        }
    },
    actions:{
        setpages(param){
            this.location = param
        }
    }
})