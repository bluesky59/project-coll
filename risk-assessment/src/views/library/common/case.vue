<template>
    <div class="article-container">
        <el-row class="article-header">
            <el-col style="color: #fff" :span="1">1</el-col>
            <el-col :span="11">案例库</el-col>
            <el-col :span="2" :offset="4">类型</el-col>
            <el-col :span="2">时间</el-col>
            <el-col :span="3">资料</el-col>
        </el-row>
        <el-row class="article-body" v-for="item in articleArrs" :key="item.id">
            <el-col :span="1">{{item.index}}</el-col>
            <el-col :span="11">{{item.title}}</el-col>
            <el-col :span="2" :offset="4">{{item.type}}</el-col>
            <el-col :span="2">{{item.date}}</el-col>
            <el-col :span="3" class="acticle-pics">
                <img v-for="i in item.lib" :key="i" class="acticle-headernick" :src="require(`../../../assets/imgs/lib/${i}.png`)" />
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
    data() {
        return {
            articleArrs: [
                {
                    index: 1,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: ['h1', 'h2', 'h3']
                },
                {
                    index: 2,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: ['h1', 'h2', 'h4']
                },
                {
                    index: 3,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: ['h5', 'h3']
                },
                {
                    index: 4,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: ['h1', 'h2', 'h3']
                },
                {
                    index: 5,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: ['h1', 'h2', 'h3']
                },
                {
                    index: 6,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: ['h1', 'h2', 'h3']
                },
                {
                    index: 7,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: []
                },
                {
                    index: 8,
                    title: '万科运雅典城商品房用地稳评项目',
                    level: '省级',
                    type: '稳评',
                    date: '2019-01-12',
                    lib: []
                }
            ]
        }
    }
}
</script>

<style scoped lang="scss">
    .article-container {
        margin-bottom: 0.4rem;
        .article-header {
            height: 0.4rem;
            line-height: 0.4rem;
            background-color: #F6F6F6;
            font-size: 0.16rem;
            color: #333;
            margin: 0.2rem 0 0.3rem;
        }
        .article-body {
            font-size: 0.116rem;
            color: #666;
            height: 0.8rem;
            border-bottom: 1px solid #D8D8D8;
            display: flex;
            align-items: center;
            .acticle-pics {
                text-align: right;
            }
            .acticle-headernick {
                width: 0.4rem;
                height: 0.4rem;
                margin-right: 5px;
            }
        }
    }
</style>