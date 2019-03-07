<template>
    <div class="login container text-center mt-2"> 
        <img :src='imgUrl' class="logo">  
        <h3>登录</h3>
        <div class="form-group">
            <input v-model="name" type="text" class="form-control" placeholder="请输入你的用户名">
        </div>
        <div class="form-group">
            <input v-model="psd" type="password" class="form-control" placeholder="请输入你的密码">
        </div>
        <button @click="login" type="submit" class="btn btn-primary btn-block">登录</button>
    </div>
</template>

<script>
import axios from 'axios';
export default {
    name:'login',
    data() {
        return {
            imgUrl:require("../assets/logo.png"),
            name:'',
            psd:''
        }
    },
    methods:{
        login(){
            axios.get('./user-wn.json')
            .then(res=>{
                for (const key in res.data) {
                    var s = res.data[key];
                    if(s.userName == this.name && s.userPsd == this.psd){
                        alert('登陆成功，为您跳转到管理页面');
                        this.$router.replace('/admin');
                        return;
                    }
                }
                alert('账号或密码错误!')
            })
        }
    }
}
</script>
<style lang="css" scoped>
    .login{
        width: 400px;
        margin-top: 50px;
    }
    .logo{
        width: 100px;
        height: 100px;
    }
</style>