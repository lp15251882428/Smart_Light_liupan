<template>
  <div>
    <leftnav2 v-bind:active="'/system/notice'"></leftnav2>
    <div class="content">
      <div class="content_pad">
        <h3>通知屏蔽</h3>
        <hr/>
        <h4>已屏蔽的路灯</h4>
        <el-table stripe :data="tableData">
            <el-table-column label="路灯ID" prop="lId"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-switch v-model="state" ></el-switch>
                </template>
            </el-table-column>
        </el-table>
        <h4 class="t_20">已屏蔽的事件</h4>
        <el-table stripe :data="tableData2">
            <el-table-column label="路灯ID" prop="lId"></el-table-column>
            <el-table-column label="操作">
                <template slot-scope="scope">
                <el-switch v-model="state"></el-switch>
                </template>
            </el-table-column>
        </el-table>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
        tableData: [{
          lId: '2',
          state:'1'
        },{
          lId: '3',
          state:'0'
        },{
          lId: '4',
          state:'0'
        },{
          lId: '5',
          state:'1'
        }],
        tableData2: [{
          lId: '2',
          state:'1'
        },{
          lId: '3',
          state:'0'
        },{
          lId: '4',
          state:'0'
        },{
          lId: '5',
          state:'1'
        }]
      }
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
.content h4{
  font-size: 16px;
  line-height: 1.2;
  color:#2c3e50;
  font-weight:bold;
}
hr{
  border: 0;
  border-top: 1px solid #bbb;
  margin: 15px 0;}
.t_20{margin-top: 20px;}
</style>
