<template>
    <div class="contact">
        <h3>联系我们</h3>
        <h5>欢迎来到PHP萨店</h5>
        <router-link to="/contact/address" type="button" class="btn btn-primary">地址信息</router-link>
        <router-link to="/contact/Legal" type="button" class="btn btn-primary">法人代表</router-link>
        <router-link to="/contact/telephone" type="button" class="btn btn-primary">电话热线</router-link>
        <div>
           <router-view/>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            
        }
    },
}
</script>