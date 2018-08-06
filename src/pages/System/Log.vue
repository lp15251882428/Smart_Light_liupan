<template>
  <div>
    <leftnav2 v-bind:active="'/system/log'"></leftnav2>
    <div class="content">
      <div class="content_pad">
        <h3>日志管理</h3>
        <hr/>
       
        <el-form ref="searchModel" :model="searchModel" label-position="left" inline>
          <el-form-item label="类型">
            <el-select v-model="searchModel.eventType">
              <el-option v-for="t in models.eventType" :key="t.value" :label="t.label" :value="t.value"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="触发者ID">
              <el-input v-model="searchModel.operaterId"></el-input>
          </el-form-item>
          <el-form-item label="路灯ID">
              <el-input v-model="searchModel.lampId"></el-input>
          </el-form-item>
          <el-form-item label="状态">
              <el-select v-model="searchModel.isRead">
                <el-option v-for="t in models.isRead" :key="t.value" :label="t.label" :value="t.value"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="排序依据">
              <el-select v-model="searchModel.orderBy">
                  <el-option v-for="t in models.orderBy" :key="t.value" :label="t.label" :value="t.value"></el-option>
              </el-select>
          </el-form-item>
          <el-form-item label="顺序">
              <el-select v-model="searchModel.descending">
                  <el-option v-for="t in models.descending" :key="t.value" :label="t.label" :value="t.value"></el-option>
              </el-select>
          </el-form-item>
          <el-button type="primary" @click.prevent="searchEvents">搜索</el-button>
        </el-form>
        
        <el-pagination
          class="mw-pagination"
          @current-change="pageChange"
          @size-change="pageSizeChange"
          :current-page="searchModel.page"
          :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400, 500]"
          :page-size="searchModel.pageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="searchModel.total"
          >
        </el-pagination>

        <el-table :data="tableData" style="width: 100%">
          <el-table-column type="expand"><!-- 展开的模块开始  -->
            <template slot-scope="props">
              <el-form label-position="left" class="table-expand" inline>
                <el-form-item label="类型"><span>{{ props.row.eventType }}</span></el-form-item>
                <el-form-item label="触发者ID"><span>{{ props.row.operaterId }}</span></el-form-item>
                <el-form-item label="路灯ID"><span>{{ props.row.lampId }}</span></el-form-item>
                <el-form-item label="内容"><span>{{ props.row.dataJson }}</span></el-form-item>
                <el-form-item label="时间"><span>{{ props.row.timestamp }}</span></el-form-item>
              </el-form>
            </template>
          </el-table-column><!-- 展开的模块结束  -->
          <el-table-column prop="eventType" label="类型" width="150"></el-table-column>
          <el-table-column prop="operaterId" label="触发者ID" width="100"></el-table-column>
          <el-table-column prop="lampId" label="路灯ID" width="100"></el-table-column>
          <el-table-column prop="dataJson" label="内容"></el-table-column>
          <el-table-column prop="timestamp" label="时间" width="180"></el-table-column>  
        </el-table>

        <el-pagination
          class="mw-pagination"
          @current-change="pageChange"
          @size-change="pageSizeChange"
          :current-page="searchModel.page"
          :page-sizes="[5, 10, 20, 50, 100, 200, 300, 400, 500]"
          :page-size="searchModel.pageSize"
          layout="sizes, prev, pager, next, jumper"
          :total="searchModel.total"
          >
        </el-pagination>

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        searchModel: {
            eventType: null,
            operaterId: '',
            lampId: '',
            isRead: null,
            page: 1,
            pageSize: 20,
            orderBy: null,
            descending: 0,
            total: 668
        },
        models: {
          eventType: [
              { value: null, label: '全部' },
              { value: 1, label: '网关通用应答命令' },
              { value: 2, label: '网关异常报错命令' }
          ],
          isRead: [
              { value: null, label: '全部' },
              { value: 1, label: '已读' },
              { value: 0, label: '未读' }
          ],
          orderBy: [
              { value: null, label: '默认排序' },
              { value: 'id', label: '编号' },
              { value: 'eventType', label: '类型' },
              { value: 'operaterId', label: '触发者ID' },
              { value: 'lampId', label: '路灯ID' },
              { value: 'timestamp', label: '时间' }
          ],
          descending: [
              { value: 1, label: '降序' },
              { value: 0, label: '升序' }
          ]
        },
        tableData: [{
          eventType: '网关异常报错命令',
          operaterId: '102',
          lampId: '11',
          dataJson: '{"id": 405, "message": {"message": "PTZ Control Failed.", "errorCode": 40305}}',
          timestamp: '2016-05-04 08:30'
        }, {
          eventType: '网关异常报错命令',
          operaterId: '101',
          lampId: '11',
          dataJson: '{"id": 405, "message": {"message": "PTZ Control Failed.", "errorCode": 40305}}',
          timestamp: '2018-04-04 08:30'
        },{
          eventType: '网关异常报错命令',
          operaterId: '102',
          lampId: '11',
          dataJson: '{"id": 405, "message": {"message": "PTZ Control Failed.", "errorCode": 40305}}',
          timestamp: '2016-05-04 08:30'
        }, {
          eventType: '网关异常报错命令',
          operaterId: '101',
          lampId: '11',
          dataJson: '{"id": 405, "message": {"message": "PTZ Control Failed.", "errorCode": 40305}}',
          timestamp: '2018-04-04 08:30'
        }]
      }
    },
    methods: {
      searchEvents() {
          this.getEvents(this.searchModel);
      },
      pageChange(page) {
        this.searchModel.page = page;
        this.searchEvents();
      },
      pageSizeChange(pageSize) {
        this.searchModel.pageSize = pageSize;
        this.getEvents(this.searchModel);
      },
    }
  }
</script>

<style>
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

.events-page .badge.unread {
    font-weight: bold;
}
.events-page table .cell {
    white-space: nowrap;
}
.table-expand{
    font-size: 0;
}
.table-expand label {
    width: 90px;
    color: #99a9bf;
}
.table-expand .el-form-item {
    margin-bottom: 0;
    width: 100%;
}
.mw-pagination {
    margin: 20px 0;
    padding: 0 !important;
}
</style>