<template>
    <div class="header-container">
        <div class="header-box">
            <img class="header-logo" src="../assets/imgs/index/logo.png" />
            <div class="header-nav">
                <ul class="nav-list">
                    <li class="nav-item" v-for="item in navArrs" :key="item.label">{{item.label}}</li>
                </ul>
                <div @click="loginHandle" class="nav-login">登录/注册</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navArrs: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        loginHandle() {
            this.$router.push('/login');
        }
    }
}
</script>

<style lang="scss" scoped>
    .header-container {
        width: 100%;
        height: 1.1rem;
        .header-box {
            width: 14.4rem;
            height: 100%;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 auto;
            .header-logo {
                width: 2.88rem;
                height: 1.04rem;
            }
            .header-nav {
                display: flex;
                align-items: center;
                justify-content: space-between;
                height: 100%;
                .nav-list {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    margin-right: 0.3rem;
                    .nav-item {
                        font-size: 0.18rem;
                        color: #fff;
                        padding: 0 0.3rem;
                        cursor: pointer;
                    }
                }
                .nav-login {
                    width: 1.6rem;
                    height: 0.4rem;
                    background:rgba(255,255,255,1);
                    box-shadow:0 0 0.06rem 0 rgba(0,0,0,0.1);
                    border-radius: 0.2rem;
                    font-size: 0.18rem;
                    color: #333;
                    line-height: 0.4rem;
                    cursor: pointer;
                    text-align: center;
                }
            }
        }
    }
</style>></style>