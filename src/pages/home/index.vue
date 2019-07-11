<template>
    <div class="home">
        <Header></Header>
        <div class="main">
            <router-view></router-view>
        </div>
        <Footer></Footer>
    </div>
</template>
<script>
    import Header from '@/components/header';
    import Footer from '@/components/footer';

    export default {
        components: {
            Header,
            Footer,
        }
    };
</script>
<style lang="less">
.home{
    .main {
        min-height: 200px;
    }
}
</style>
