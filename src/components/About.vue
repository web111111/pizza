<template>
    <div class="about">
        <div class="aboutLeft">
            <button @click="jump('c')" type="button" class="b btn btn-default">联系我们</button>

            <button @click="jump('d')" type="button" class="b btn btn-default">快递信息</button>

            <button @click="jump('h')" type="button" class="b btn btn-default">历史订单</button>

            <button @click="jump('a')" type="button" class="b btn btn-default">热门活动</button>
        </div>
        
        <!-- 路由页面 -->
        <div class="aboutRight">
            <router-view />
        </div>
        
    </div>
        

    
</template>

<script>
export default {
    name:'about',
    data(){
        return{

        }
    },
    methods: {
        jump(v){
            if(v == 'a'){
                this.$router.replace('/active')
            }else if(v == 'h'){
                this.$router.replace('/history')
            }else if(v == 'c'){
                this.$router.replace('/contact')
            }else{
                this.$router.replace('/express')
            }
        }
    },
}
</script>
<style scoped>
    .b{
        width: 300px;
        height: 40px;
        margin: 6px;
    }
    
    .aboutLeft{
        width: 300px;
        margin-top: 30px;
        margin-left: 50px;
        float: left;
    }
    .aboutRight{
        width: 700px;
        color: red;
        float: right;
        margin-top: 36px;
        height: 300px;
        border: 1px solid #ccc;
        margin-right: 20px;
        border-top: 50px solid #ccc;
        border-bottom: 50px solid #ccc;
    }
</style>