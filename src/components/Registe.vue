<template>
    <div class="registe container">
        <img :src='imgUrl' class="logo">
        <h3>注册</h3>  
        <div class="form-group">
            <input v-model="name" type="text" class="form-control" placeholder="请输入你的用户名">
        </div>
        <div class="form-group">
            <input v-model="psd" type="password" class="form-control" placeholder="请输入你的密码">
        </div>
         <div class="form-group">
            <input v-model="psd2" type="password" class="form-control" placeholder="再次确认密码">
        </div>
        <button @click="registe" type="submit" class="btn btn-primary btn-block">登录</button>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Registe',
    data() {
        return {
            imgUrl:require("../assets/logo.png"),
            name:'',
            psd:'',
            psd2:''
        }
    },
    methods: {
        registe(){
            if(this.psd2 != this.psd){     
                alert('两次密码不相同');
                return;
            }
            if(this.name == '' || this.psd == '' || this.psd.length<6){
                    alert('请填入完整信息,注意密码长度最小六位');
                    return;
            }
            var userdata = {
                userName:this.name,
                userPsd:this.psd
            }
            axios.post('./user-wn.json',userdata)
            .then(res=>{
                alert('注册成功,正在跳往登录页面');
                this.$router.replace('./login');
            })

           
        }
    },
}
</script>
<style scoped>
    .registe{
        width: 400px;
        margin-top: 50px;
    }
    .logo{
        widows: 100px;
        height: 100px;
    }
</style>