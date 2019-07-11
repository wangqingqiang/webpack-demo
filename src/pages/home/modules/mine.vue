<template>
    <div>这里是我的个人中心页面 <button @click="go">go home</button></div>
</template>
<script>
export default {
    methods: {
        go(){
            this.$router.back();
        }
    }
}
</script>
