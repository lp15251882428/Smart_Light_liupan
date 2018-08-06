<template>
  <div class="container">
    <div id="background"></div>
    <div class="content">
      <el-form class="login-content" :model="ruleForm" :rules="rules" ref="ruleForm">
        <h3 class="title">智慧路灯云管理平台</h3>
        <el-form-item prop="name">
          <el-input v-model="ruleForm.name" placeholder="用户名"></el-input>
        </el-form-item>
        <el-form-item prop="pwd">
          <el-input v-model="ruleForm.pwd" placeholder="密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-checkbox-group v-model="ruleForm.type">
            <el-checkbox label="记住用户名" name="type"></el-checkbox>
          </el-checkbox-group>
        </el-form-item>
        <el-form-item class="btn">
          <el-button class="btn-login" type="primary" @click="login">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      ruleForm: {
        name: '',
        pwd: '',
        type: []
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ],
        pwd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 8, message: '长度在 3 到 8 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      this.$post('login', this.ruleForm).then(resp => {
        if (resp.data) {
          console.log(resp.data)
          this.$router.push({name: 'DataCount'})
        }
      })
    }
  }
}
</script>

<style scoped>
.background {
  background-color: #000;
  position: fixed;
  z-index: 1000;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  opacity: 0.3;
}
.container {
  position: fixed;
  z-index: 1001;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background:url('../../static/images/loginbg.jpg') no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
}
.login-content{
  border-radius: 5px;
  background-clip: padding-box;
  width: 350px;
  margin: 0 auto;
  padding: 20px 40px;
  background-color: hsla(0,0%,100%,.9);
  border: 1px solid #eaeaea;
}
.title {
  margin: 16px auto 25px;
  text-align: center;
  font-size: 24px;
  color: #505458;
}
.btn {
  text-align: center;
}
.btn-login {
  width: 100px;
}
</style>
