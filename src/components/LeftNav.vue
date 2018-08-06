<template>
  <div class="container">
    <div class="left-nav">
      <el-menu
        :default-active="actValue"
        class="el-menu-vertical-demo"
        background-color="#333"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/light/lightcontrol" class="left-menu">
          <div class="icon">
            <div class="icon-street-light"></div>
          </div>
          <div slot="title">路灯</div>
        </el-menu-item>
        <el-menu-item index="/light/control" class="left-menu">
          <div class="icon">
            <div class="icon-control"></div>
          </div>
          <div slot="title">控制策略</div>
        </el-menu-item>
        <el-menu-item index="/light/led-list" class="left-menu">
          <div class="icon">
            <div class="icon-led"></div>
          </div>
          <div slot="title">LED列表</div>
        </el-menu-item>
        <el-menu-item index="/light/warning" class="left-menu">
          <div class="icon">
            <div class="icon-warning"></div>
          </div>
          <div slot="title">警报</div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftNav',
  props: ['actValue'],
  data () {
    return {}
  },
  methods: {}
}
</script>

<style scoped>
.left-nav {
  width: 100px;
  z-index: 1;
  position: fixed;
  top: 60px;
  bottom: 0px;
  height: calc(100% - 60px)!important;
  background-color: #333;
  border-right:none;
}
.el-menu-vertical-demo {
  border-right:none;
}
.left-menu {
  padding: 20px 0 10px;
  padding-left: 0!important;
  color: #fff;
  height: auto;
  text-align: center;
}
.icon {
  background-color: #fff;
  border-radius: 100%;
  width: 50px;
  height: 50px;
  margin: auto;
}
.icon div{
  width: 32px;
  height: 32px;
  margin: 9px;
  float: left;
  background-size: cover;
}
.icon-street-light {
  background: url(../../static/images/icons/light.png)
}
.icon-control {
  background: url(../../static/images/icons/control.png)
}
.icon-led {
  background: url(../../static/images/icons/led.png)
}
.icon-warning {
  background: url(../../static/images/icons/warning.png)
}

/* .content-view {
  min-width: 1000px;
  z-index: 0;
  padding: 60px 0 0 100px;
  background-color: #000;
  width: 100%;
  height: 100%;
  margin-left: 100px;
} */
</style>
