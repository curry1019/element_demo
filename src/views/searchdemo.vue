<template>
    <div class="leftbrother">
       <div class="inner">
           <h3>模糊搜索</h3>
           <input type="text" v-model="searchItem" placeholder="请输入姓名">
           <table :border="1">
                <th>编号</th>
                <th>姓名</th>
                <th>性别</th>
                <tr v-for="val in thisSearch()" :key="val.id">
                    <td>{{val.id}}</td>
                    <td>{{val.name}}</td>
                    <td>{{val.gender}}</td>
                </tr>
           </table>
       </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                searchItem:"",
                arr:[
                    {
                        id:1,
                        name:"明辉",
                        gender:"男"
                    },
                    {
                        id:2,
                        name:"陈昊",
                        gender:"男"
                    },
                    {
                        id:3,
                        name:"李帅",
                        gender:"男"
                    },
                    {
                        id:4,
                        name:"张珂",
                        gender:"女"
                    },
                    {
                        id:5,
                        name:"红玉",
                        gender:"女"
                    },
                ]
            }
        },
        methods:{
            thisSearch(){
                if(!this.searchItem){
                    return this.arr
                }else{
                    return this.Search
                }
            }
        },
        computed:{
            Search(){
                return this.arr.filter((value)=>{
                    return value.name.includes(this.searchItem)
                })
            }
        }
    }
</script>
<style scoped lang="scss">
    .leftbrother{
       
    }
    .inner{
        width:500px;
        height:1000px;
        margin:auto;
        display: flex;
        flex-direction: column;
        align-items: center;
        h3{
            font-size:30px;
            margin:50px 0 50px;
        }
        input{
            border:1px solid #000;
            text-indent: 2em;;
            width:200px;
            height:40px;
            margin:10px 0;
        }
        table{
            th,tr{
                width:100px;
                height:30px;
                line-height:30px;
                text-align: center;
            }
        }
    }
</style>