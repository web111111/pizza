<template>
  <div class="menu">

    <button type="button" class="btn btn-default">联系我们</button>

    <button type="button" class="btn btn-default">快递信息</button>

    <button type="button" class="btn btn-default">历史订单</button>

    <button type="button" class="btn btn-default">热门活动</button>
  </div>
</template>

<script>
export default {
  name: "Menu",
  data() {
    return {};
  }
};
</script>
<style scoped>
    .btn{
        width: 300px;
        height: 40px;
        margin: 6px;
    }
    .menu{
        width: 300px;
        margin-top: 30px;
        margin-left: 50px;
    }
</style>