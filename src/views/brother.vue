<template>
    <div class="leftbrother">
        <ol>
            <li :class="index == count?'addback':''" v-for="(item,index) in arr" :key="index" @click="imclick(index)">{{item}}</li>
        </ol>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arr:["北京","上海","山西","张家口","安徽"],
                count:0
            }
        },
        methods:{
            imclick(n){
                this.count = n;
                this.$emit("getCount",n)
            }
        }
    }
</script>
<style scoped lang="scss">
    .leftbrother{
        width:100px;
        border:1px solid #ccc;
        ol{ 
            li{
                text-align: center;
                line-height: 40px;
                &.addback{
                    background: #ccc;
                    font-size:20px;
                    color:#fff;
                }
            }
        }
    }
</style>