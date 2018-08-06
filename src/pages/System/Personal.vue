<template>
  <div>
    <leftnav2 v-bind:active="'/system/personal'"></leftnav2>
    <div class="content">
      <div class="content_pad">
        <h3>个人设置</h3>
        <hr/>
        <el-form :model="perForm" :rules="rules" ref="perForm" label-width="100px">
          <el-form-item label="用户名">
            <el-input placeholder="admin" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item prop="userReal" label="真实姓名">
            <el-input v-model="perForm.userReal" placeholder="admin"></el-input>
          </el-form-item>
          <el-form-item prop="userEmail" label="邮箱">
            <el-input v-model="perForm.userEmail" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="userPhone" label="电话号码">
            <el-input v-model="perForm.userPhone" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="roles" label="权限">
            <el-input v-model="perForm.roles" placeholder="路灯管理，信息发布，监控管理，环境监测" :disabled="true"></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button class="btn-change" type="primary" @click="change">更新个人信息</el-button>
          </el-form-item>
        </el-form>
        <hr/>
        <el-form :model="pwdForm" :rules="rules" ref="pwdForm" label-width="100px">
          <el-form-item prop="oldPwd" label="旧密码">
            <el-input v-model="pwdForm.oldPwd" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="newPwd" label="新密码">
            <el-input v-model="pwdForm.newPwd" placeholder=""></el-input>
          </el-form-item>
          <el-form-item prop="newPwd2" label="重复新密码">
            <el-input v-model="pwdForm.newPwd2" placeholder=""></el-input>
          </el-form-item>
          <el-form-item class="btn">
            <el-button class="btn-change" type="primary" @click="modifyPWD">修改密码</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      perForm: {
        userReal: '',
        userEmail: '',
        userPhone: '',
        roles: []
      },
      pwdForm: {
        oldPwd: '',
        newPwd: '',
        newPwd2: ''
      },
      // rules: {
      //   userReal: [
      //     { required: true, message: '请输入真实姓名', trigger: 'blur' },
      //     { min: 2, max: 5, message: '长度在 2 到 5 个字符', trigger: 'blur' }
      //   ],
      //   userEmail: [
      //     { required: true, message: '请输入邮箱', trigger: 'blur' },
      //     { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
      //   ]
      // }
    }
  },
  methods: {
    change () {
      this.$post('change', this.perForm).then(resp => {
        if (resp.data) {
          console.log(resp.data)
          this.$router.push({name: 'DataCount'})
        }
      })
    },
    modifyPWD () {
      this.$post('modifyPWD', this.perForm).then(resp => {
        if (resp.data) {
          console.log(resp.data)
          this.$router.push({name: 'DataCount'})
        }
      })
    }
  }
}
</script>
<style>
.el-input__inner{color:#5a5e66}
</style>
<style scoped>
.content {
  min-width: 1000px;
  z-index: 0;
  margin-left: 100px;
  background-color: #fff;
  bottom: 0;
}
.content_pad{
  padding: 20px;
}
.content h3{
  font-size: 19px;
  line-height: 1;
  font-weight: 400
}
hr{
  border: 0;
  border-top: 1px solid #bbb;
  margin: 15px 0;}
</style>
