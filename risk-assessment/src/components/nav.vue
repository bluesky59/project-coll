<template>
    <div class="nav-container" :style="{'background': backgroundProps, 'color': isSpe ? '#fff' : '#666'}">
        <div class="nav-box">
            <img class="nav-logo" src="../assets/imgs/nav-logo.png" />
            <ul class="nav-list">
                <li class="nav-item" 
                    @click="navTo(item)" 
                    :class="{'nav-item-sel': (navIndex === index) && !isSpe, 'nav-item-sel-spe': (navIndex === index) && isSpe}" 
                    v-for="(item, index) in navArrs" 
                    :key="item.label">{{item.label}}</li>
            </ul>
            <img class="nav-notice" src="../assets/imgs/nav-notice.png" />
            <div class="nav-userinfo">
                <img class="nav-user-headernick" src="../assets/imgs/headernick.png" />
                <span class="nav-user-nick">沈遇星</span>
                <img class="nav-user-more" src="../assets/imgs/down.png" />
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        navIndex: {
            type: Number,
            default: 7
        },
        backgroundProps: {
            type: String,
            default: '#fff'
        },
        isSpe: {
            type: Boolean,
            default: false
        },
        navArrs: {
            type: Array,
            default: () => []
        }
    },
    methods: {
        navTo(item) {
            item.route && this.$router.push(item.route);
        }
    }
}
</script>

<style scoped lang="scss">
    .nav-container {
        width: 100vw;
        height: 1rem;
        background :rgba(255,255,255,1);
        box-shadow: 0 0.02rem 0.2rem 0 rgba(0,0,0,0.1);
        .nav-box {
            width: 14.4rem;
            height: 100%;
            margin: 0 auto;
            display: flex;
            justify-content: space-between;
            align-items: center;
            .nav-logo {
                width: 2.3rem;
                height: 0.42rem;
                display: block;
                margin-right: 1.2rem;
            }
            .nav-notice {
                width: 0.2rem;
                height: 0.2rem;
                display: block;
            }
            .nav-list {
                height: 1rem;
                display: flex;
                justify-content: space-around;
                align-items: center;
                cursor: pointer;
                .nav-item {
                    min-width: 0.96rem;
                    height: 100%;
                    line-height: 1rem;
                    font-size: 0.18rem;
                    font-weight: 400;
                    padding: 0 0.05rem;
                    list-style: none;
                    text-align: center;
                }
                .nav-item-sel {
                    color: #fff;
                    background: linear-gradient(180deg,rgba(84,184,243,1) 0%,rgba(42,130,228,1) 100%);
                }
                .nav-item-sel-spe {
                    background:linear-gradient(180deg,rgba(0,78,243,1) 0%,rgba(42,130,228,1) 100%);
                    color: #fff;
                }
            }
            .nav-userinfo {
                width: 1.5rem;
                display: flex;
                align-items: center;
                justify-content: space-between;
                .nav-user-headernick {
                    width: 0.7rem;
                    height: 0.7rem;
                    display: block;
                }
                .nav-user-nick {
                    font-size: 0.18rem;
                }
                .nav-user-more {
                    width: 0.11rem;
                    height: 0.07rem;
                    display: block;
                }
            }
        }
    }
</style>
