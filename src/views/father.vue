<template>
    <div class="imFather">
        <h1>我就是爸爸</h1>
        <div class="inner">
            <Brother @getCount="getCount"></Brother>
            <YoungerBrother class="addWidth" :count="showThis"></YoungerBrother>
        </div>
    </div>
</template>
<script>
    import Brother from './brother'
    import YoungerBrother from './youngerBrother'
    export default {
        data(){
            return {
                showThis:0
            }
        },
        components:{
            Brother,
            YoungerBrother
        },
        methods:{
            getCount(val){
                this.showThis = val;
                console.log(val,'22222222222')
            }
        }
    }
</script>
<style scoped lang="scss">
    .imFather{
        width:100vw;
        height:100vh;
        background: #f4f4f4;
        h1{
            text-align: center;
            font-size:30px;
            height:80px;
            line-height: 80px;
            background: skyblue;
        }
        .inner{
            display: flex;
            .addWidth{
                flex:1;
            }
        }
    }
</style>