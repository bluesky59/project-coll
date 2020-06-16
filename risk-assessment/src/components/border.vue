<template>
  <div class="decorate_angle">
    <div class="decorate-top"></div>
    <div class="decorate-bottom"></div>
  </div>
</template>
<script>
export default {
  name: 'DecorateAngle',
};
</script>
<style lang="scss" scoped>
.decorate-top, .decorate-bottom{
  &::before,&::after{
    position: absolute;
    content: '';
    width: 0.2rem;
    height: 0.2rem;
    display: block;
    border-style:  solid;
    border-color: #196DEB;
  }
}
.decorate-top{
  &::before{
    left: -0.02rem;
    top: -0.02rem;
    border-width: 0.04rem 0 0 0.04rem;
  }
  &::after{
    right: -0.02rem;
    top: -0.02rem;
    border-width: 0.04rem 0.04rem 0 0;
  }
}
.decorate-bottom{
  &::before{
    bottom: -0.02rem;
    left: -0.02rem;
    border-width: 0 0 0.04rem 0.04rem;
  }
  &::after{
    bottom: -0.02rem;
    right: -0.02rem;
    border-width: 0 0.04rem 0.04rem 0;
  }
}
</style>
