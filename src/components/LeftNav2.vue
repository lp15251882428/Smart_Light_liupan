<template>
  <div class="container">
    <div class="left-nav">
      <el-menu
        :default-active="active"
        class="el-menu-vertical-demo"
        background-color="#333"
        text-color="#fff"
        active-text-color="#ffd04b"
        router>
        <el-menu-item index="/system/personal" class="left-menu">
          <div class="icon">
            <div class="icon-personal"></div>
          </div>
          <div slot="title">个人设置</div>
        </el-menu-item>
        <el-menu-item index="/system/subuser" class="left-menu">
          <div class="icon">
            <div class="icon-subuser"></div>
          </div>
          <div slot="title">子用户管理</div>
        </el-menu-item>
        <el-menu-item index="/system/notice" class="left-menu">
          <div class="icon">
            <div class="icon-notice"></div>
          </div>
          <div slot="title">通知屏蔽</div>
        </el-menu-item>
        <el-menu-item index="/system/log" class="left-menu">
          <div class="icon">
            <div class="icon-log"></div>
          </div>
          <div slot="title">日志管理</div>
        </el-menu-item>
      </el-menu>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LeftNav2',
  props: ['active'],
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
.icon-personal {
  background: url(../../static/images/icons/personal.png)
}
.icon-subuser {
  background: url(../../static/images/icons/subuser.png)
}
.icon-notice {
  background: url(../../static/images/icons/notice.png)
}
.icon-log {
  background: url(../../static/images/icons/log.png)
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
