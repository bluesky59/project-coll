<template>
    <div class="photo-container">
        <div class="photo-box" :style="{'width': width + 'rem'}" v-for="item in photoLen" :key="item">
            <img class="photo-pic" src="../../../assets/imgs/index/professor-00.png" />
            <div class="photo-txt">
                <p class="photo-name">程宇豪</p>
                <p class="photo-des">高级工程师</p>
                <p class="photo-des">10年行业经验</p>
                <p class="photo-des">博士后</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        len: {
            type: Number,
            default: 20
        },
        width: {
            type: Number,
            default: 2.4
        }
    },
    data() {
        return {
            photoLen: []
        }
    },
    mounted() {
        this.photoLen = new Array(this.len);
    }
}
</script>

<style scoped lang="scss">
    .photo-container {
        display: flex;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-top: 0.4rem;
        .photo-box {
            width: 2.4rem;
            height: 1.46rem;
            margin-bottom: 0.2rem;
            background:rgba(255,255,255,1);
            box-shadow:0px 0px 10px 0px rgba(0,0,0,0.1);
            display: flex;
            justify-content: flex-start;
            align-items: center;
            .photo-pic {
                width: 1.12rem;
                height: 1.46rem;
            }
            .photo-txt {
                padding-left: 0.25rem;
                .photo-name {
                    font-size: 0.16rem;
                    font-family:PingFangSC-Semibold,PingFang SC;
                    font-weight:600;
                    color:rgba(51,51,51,1);
                    line-height:0.22rem;
                    text-shadow:0px 0px 10px rgba(0,0,0,0.1);
                    margin-bottom: 0.2rem;
                }
                .photo-des {
                    font-size: 0.14rem;
                    font-family:PingFangSC-Regular,PingFang SC;
                    font-weight:400;
                    color:rgba(102,102,102,1);
                    line-height: 0.2rem;
                    text-shadow:0px 0px 10px rgba(0,0,0,0.1);
                }
            }
        }
    }
</style>