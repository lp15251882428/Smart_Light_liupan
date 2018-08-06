<template>
  <div id="app">
    <div class="top-nav">
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handle"
        background-color="#162533"
        text-color="#fff"
        active-text-color="#409EFF"
        router>
        <el-menu-item index="/datacount"><i class="el-icon-tickets"></i>数据统计</el-menu-item>
        <el-menu-item index="/virtualblock"><i class="el-icon-rank"></i>虚拟城区</el-menu-item>
        <el-menu-item index="/light/lightcontrol"><i class="el-icon-menu"></i>路灯管控</el-menu-item>
        <el-menu-item index="/newmessage"><i class="el-icon-news"></i>信息发布</el-menu-item>
        <el-menu-item index="/system/personal"><i class="el-icon-setting"></i>系统管理</el-menu-item>
      </el-menu>
    </div>
    <div class="vue-content-view">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  data () {
    return {
      activeIndex: '/datacount'
    }
  },
  methods: {
    handle () {}
  }
  // watch: {
  //   '$route' () {
  //     let path = this.$route.matched[0].path
  //     this.element.activeIndex = path
  //     console.log(path)
  //   }
  // }
}
</script>
