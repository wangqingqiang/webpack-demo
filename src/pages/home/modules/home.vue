<template>
    <div>
        大家好，这里是首页！<button @click="go">go mine</button>
    </div>
</template>
<script>
export default {
    methods: {
        go(){
            this.$router.push({
                name: 'mine'
            })
        }
    }
}
</script>
<style scoped>
div{
    display: flex;
}
</style>
