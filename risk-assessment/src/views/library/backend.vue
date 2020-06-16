<template>
    <div>
        <navCom :navIndex="6" :navArrs="navArrs" />
        <div class="main-container">
            <p class="main-nav">认证 ＞ 项目主体认证</p>
            <progressCom />
            <tabsCom :tabsIndex="0" @tabRes="tabRes" />
            <div class="main-content">
                <lawCom v-if="tabsVal === 'law'" />
                <caseCom v-if="tabsVal === 'case'" />
                <professorCom v-if="tabsVal === 'professor'" />
                <riskCom v-if="tabsVal === 'risk'" />
                <measuresCom v-if="tabsVal === 'measures'" />
                <infoCom v-if="tabsVal === 'info'" />
            </div>
        </div>
        <footerCom />
    </div>
</template>

<script>
import navCom from '@/components/nav.vue'
import footerCom from '@/components/footer.vue'
import progressCom from './common/progress'
import tabsCom from './common/tabs'
import lawCom from './law.vue'
import caseCom from './case.vue'
import professorCom from './professor.vue'
import riskCom from './risk.vue'
import measuresCom from './measures.vue'
import infoCom from './info.vue'
import { navArrs } from '@/data/nav.js';
export default {
    components: {
        navCom, footerCom, progressCom, tabsCom, lawCom, caseCom, professorCom,
        riskCom, measuresCom, infoCom
    },
    methods: {
        tabRes(data) {
            this.tabsVal = data.val;
        }
    },
    data() {
        return {
            tabsVal: 'law',
            navArrs
        }
    }
}
</script>

<style scoped lang="scss">
    .main-container {
        width: 14.4rem;
        height: auto;
        margin: 0 auto;
        .main-content {
            padding: 0.5rem;
            margin-bottom: 1rem;
            background-color: #fff;
        }
    }
</style>