<template>
        <nav class="site-header sticky-top py-1">
        <div class="container d-flex flex-column flex-md-row justify-content-between">
        <router-link class="py-2 col-md-1" to="/">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="d-block mx-auto"><circle cx="12" cy="12" r="10"></circle><line x1="14.31" y1="8" x2="20.05" y2="17.94"></line><line x1="9.69" y1="8" x2="21.17" y2="8"></line><line x1="7.38" y1="12" x2="13.12" y2="2.06"></line><line x1="9.69" y1="16" x2="3.95" y2="6.06"></line><line x1="14.31" y1="16" x2="2.83" y2="16"></line><line x1="16.62" y1="12" x2="10.88" y2="21.94"></line></svg>
          <span class="cs">php萨</span>
        </router-link>
        <router-link class="py-2 d-none d-md-inline-block col-md-1" to="/">主页</router-link>
        <router-link class="py-2 d-none d-md-inline-block col-md-1"  to="/menu">菜单</router-link>
        <router-link class="py-2 d-none d-md-inline-block col-md-1" to="/admin">管理</router-link>
        <router-link class="py-2 d-none d-md-inline-block col-md-1" to="/about">关于</router-link>
        <router-link class="py-2 d-none d-md-inline-block col-md-1" to="/login">登录</router-link>
        <router-link class="py-2 d-none d-md-inline-block col-md-1" to="/registe">注册</router-link>
      </div>
    </nav>
</template>
<script>
export default {
    name:'Header',
    data(){
        return{

        }
    }
}
</script>

<style scoped>
    .container{
        margin-top: 10px;
        font-size: 20px;
        line-height: 20px;
    }
    .py-2{
        /* margin: 0 25px; */
        width:155px;
        height: 27px;
        line-height: 27px;
    }
    .cs{
        padding-bottom: 2px;
    }
</style>