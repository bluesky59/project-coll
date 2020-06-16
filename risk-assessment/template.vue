<template>
    <div>
        <navCom :navIndex="1" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
export default {
    components: {
        navCom, footerCom
    },
}
</script>

<style scoped lang="scss">
    .main-container {
        width: 14.4rem;
        height: auto;
        margin: 0 auto;
    }
</style>