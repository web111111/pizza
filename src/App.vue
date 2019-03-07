<template>
  <div id="app" class="container text-center">
    <!-- 导航栏 -->
    <Header></Header>
    <!-- 路由展示 -->
    <router-view/>
  </div>
</template>

<script>
import Header from '@/components/Header';
export default {
  name: 'App',
  data(){
    return{
      img:'../static/logo.png'
    }
  },
  components:{
    'Header':Header
  }
}
</script>
<style scoped>
  body{
    width: 100px;
    background: red;
  }
</style>


