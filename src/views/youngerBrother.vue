<template>
    <div class="youngerBrother">
        <ul>
            <li v-for="(item,index) in arr" :key="index" v-if="count==index">{{item}}</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arr:["北京","上海","山西","张家口","安徽"],
            }
        },
        props:{
            count: {
                type:Number,
                default:0
            }
        },
        methods:{

        }
    }
</script>
<style scoped lang="scss">
    .youngerBrother{
        display: flex;
        justify-content: center;
        align-items: center;
        border:1px solid #ccc;
        border-left:none;
        li{
            font-size:60px;
            color:red;
        }
    }
</style>