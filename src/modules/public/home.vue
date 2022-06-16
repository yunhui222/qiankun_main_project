<template>
  <div>
    <el-container style="height: 600px; border: 1px solid #eee;">
      <el-aside width="200px" style="background-color: #545c64">
        <el-menu 
          :default-openeds="['1', '2', '3']" 
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          collapse-transition
          @select="selectMenu">
          <el-submenu v-for="(tmp, y) in menuList" :key="y" :index="tmp.index">
            <template slot="title"><i :class="tmp.icon"></i>{{tmp.title}}</template>
            <el-menu-item-group>
              <el-menu-item v-for="(vv, x) in tmp.list" :key="x" :index="vv.index">{{vv.title}}</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      
      <el-container> 
        <el-main>
          <!-- <el-table :data="tableData">
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120">
            </el-table-column>
            <el-table-column prop="address" label="地址">
            </el-table-column>
          </el-table> -->
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>

  </div>
</template>

<script>
export default {
  components: {

  },
  props: {

  },
  data() {
    // const item = {
    //   date: '2022-01-09',
    //   name: '王小宝',
    //   address: '北京市西城区中国邮政集团邮票印制局'
    // }

    return {
      // tableData: Array(8).fill(item),
      menuList: [
        {
          index: '/custmoer',
          title: '客户管理',
          icon: 'el-icon-message',
          list: [
            {
              index: '/custmoer/custCollection',
              title: '客户采集管理'
            }
          ]
        },
        {
          index: '/sale',
          title: '销售管理',
          icon: 'el-icon-menu',
          list: [
            {
              index: '/sale/salePerformance',
              title: '销售业绩管理'
            }
          ]
        },
        {
          index: '/basic',
          title: '基础管理',
          icon: 'el-icon-setting',
          list: [
            {
              index: '/basic/team',
              title: '团队管理'
            }
          ]
        }
      ],
      chooseRoute: ''
    }
  },
  computed: {

  },
  watch: {
  },
  created() {

  },
  mounted() {

  },
  methods: {
    selectMenu(index, indexPath) {
      console.log('index, indexPath',index, indexPath)
      this.chooseRoute = indexPath
    }
  }
}
</script>

<style>
.el-menu-item-group__title {
  padding: 0;
}
</style>
