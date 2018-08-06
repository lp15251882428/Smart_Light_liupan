<template>
  <div>
    <leftnav2 v-bind:active="'/system/subuser'"></leftnav2>
    <div class="content">
      <div class="content_pad">
        <h3>子用户管理</h3>
        <hr/>
        <el-table
          :data="tableData"
          style="width: 100%">
          <el-table-column
            prop="id"
            label="编号"
            width="220">
          </el-table-column>
          <el-table-column
            prop="userName"
            label="用户名"
            width="180">
          </el-table-column>
          <el-table-column
            prop="userReal"
            label="真实姓名">
          </el-table-column>
          <el-table-column
            prop="pId"
            label="父账户ID">
          </el-table-column>
          <el-table-column
            prop="roles"
            label="权限">
          </el-table-column>

          <el-table-column label="操作">
            <template slot-scope="scope">
              <i class="el-icon-edit mw-edit" @click="openEditWin(scope.$index)"></i>
              <i class="el-icon-delete mw-edit" @click="deleteUser(scope.row)"></i>
            </template>
          </el-table-column>
        </el-table>
        <el-button type="primary" class="mw-add-button" @click="openEditWin('create')">新建子账户</el-button>
        <!--对话框-->
        <el-dialog
          custom-class="mw-edit-dialog"
          class="mw-dialog-wrapper"
          title="编辑子账户信息"
          v-if="editDialogVisible"
          :visible.sync="editDialogVisible">
          <el-form :model="editUser" label-position="left" label-width="40px" :rules="editUserRule" ref="userInfo">
            <div class="user-info">
              <el-form-item label="用户名" prop="userName" v-if="editType === 'create'">
                <el-input v-model="editUser.userName"></el-input>
              </el-form-item>
              <el-form-item label="真实姓名" prop="realName">
                <el-input v-model="editUser.realName"></el-input>
              </el-form-item>
              <el-form-item label="初始密码" prop="password" v-if="editType === 'create'">
                <el-input v-model="editUser.password"></el-input>
              </el-form-item>
              <el-form-item label="权限" prop="roles">
                <el-select multiple placeholder="请选择权限" v-model="editUser.roles">
                  <el-option
                    v-for="role in userRoleSelect"
                    :key="role.value"
                    :label="role.label"
                    :value="role.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </div>
          </el-form>
          <div slot="footer">
            <el-button class="mw-edit-button" @click="editDialogVisible = false">取消</el-button>
            <el-button class="mw-edit-button confirm" @click="updateUser">确定</el-button>
          </div>
        </el-dialog>
      </div>
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        tableData: [{
          id: '101',
          userName: 'wangxiaohu',
          userReal: '王小虎',
          pId: '2',
          roles: '路灯管理',
        },{
          id: '101',
          userName: 'wangxiaohu',
          userReal: '王小虎',
          pId: '2',
          roles: '路灯管理',
        },{
          id: '101',
          userName: 'wangxiaohu',
          userReal: '王小虎',
          pId: '2',
          roles: '路灯管理',
        },{
          id: '101',
          userName: 'wangxiaohu',
          userReal: '王小虎',
          pId: '2',
          roles: '路灯管理',
        }]
      }
    },
    methods: {
      openEditWin(index) {
          if (index === 'create') {
              this.editUser = {
                  userName: '',
                  realName: '',
                  password: '',
                  rootUserId: this.$store.state.user.userInfo.id,
                  subUsersLimit: 0,
                  roles: []
              };
              this.editIndex = null;
          } else {
              this.editUser = { ...this.subuser.list[index] };
              this.editIndex = index;
          }
          this.editDialogVisible = true;
      },
    }
  }
</script>

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


<style>
i.mw-edit {
  cursor: pointer;
  margin-right: 5px;
}
.mw-add-button {
  margin-top: 20px !important;
}
</style>

