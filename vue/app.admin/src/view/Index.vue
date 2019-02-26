<template>
  <div>
    <!--<ul>
      <li v-for="(item, index) in menu" :key="index" class="menu-item">
        {{ item.name }}
      </li>
    </ul>-->
    <p>
      <button @click="select(0)">选中[添加商品]</button>
    </p>
    <p>
      <button @click="select(1)">选中[订单列表]</button>
    </p>
    <p>
      <button @click="select(2)">选中[权限列表]</button>
    </p>
    <p>
      <button @click="select(3)">选中[分配操作权限]</button>
    </p>
  </div>
</template>

<script>
  export default {
    name: 'Index',
    data () {
      return {
        ob: {
          toggle: true
        },
        menu: [{
          id: 2,
          name: '商品管理',
          pid: 1,
          list: [{
            id: 3,
            name: '商品列表',
            pid: 2,
            list: []
          }, {
            id: 4,
            name: '添加商品',
            pid: 2,
            list: []
          }]
        }, {
          id: 5,
          name: '订单管理',
          pid: 1,
          list: [{
            id: 6,
            name: '订单列表',
            pid: 5,
            list: []
          }, {
            id: 7,
            name: '添加订单',
            pid: 5,
            list: []
          }]
        }, {
          id: 8,
          name: '系统管理',
          pid: 1,
          list: [{
            id: 9,
            name: '账号管理',
            pid: 8,
            list: []
          }, {
            id: 10,
            name: '权限管理',
            pid: 8,
            list: [{
              id: 11,
              name: '权限列表',
              pid: 10,
              list: []
            }, {
              id: 12,
              name: '分配权限',
              pid: 10,
              list: [{
                id: 13,
                name: '分配菜单权限',
                pid: 12,
                list: []
              }, {
                id: 14,
                name: '分配操作权限',
                pid: 12,
                list: []
              }]
            }]
          }]
        }]
      }
    },
    created: function () {
    },
    methods: {
      setActiveMenu1: function (menuList, activeItem) {
        let parents = []

        function loop (list) {
          list.map(function (item) {
            // 正则匹配
            let reg = new RegExp('\\b' + activeItem.id + '\\b')
            if (JSON.stringify(item).match(reg)) {
              // 设置当前菜单及当前菜单的一级菜单为激活状态
              if (item.pid === activeItem.pid || item.pid === 1) {
                Object.assign(item, {
                  active: true
                })
              } else {
                // 设置当前菜单的父级菜单为未激活状态
                Object.assign(item, {
                  active: false
                })
              }
              parents.push({
                id: item.id,
                name: item.name,
                active: item.active
              })
            } else {
              // 设置其他菜单为未激活状态
              Object.assign(item, {
                active: false
              })
            }
            if (item.id !== activeItem.id) {
              loop(item.list)
            }
            return item
          })
        }

        loop(menuList)
        return parents
      },
      setActiveMenu: function (menuList, activeItem) {
        function loop (list) {
          list.map(function (item) {
            // 正则匹配
            let reg = new RegExp('\\b' + activeItem.id + '\\b')
            if (JSON.stringify(item).match(reg)) {
              // 设置当前菜单及当前菜单的一级菜单为激活状态
              if (item.pid === activeItem.pid || item.pid === 1) {
                Object.assign(item, {
                  active: true
                })
              } else {
                // 设置当前菜单的父级菜单为未激活状态
                Object.assign(item, {
                  active: false
                })
              }
            } else {
              // 设置其他菜单为未激活状态
              Object.assign(item, {
                active: false
              })
            }
            if (item.id !== activeItem.id) {
              loop(item.list)
            }
            return item
          })
        }

        loop(menuList)
        return menuList
      },
      select: function (index) {
        const activeItem = [{
          id: 4,
          name: '添加商品',
          pid: 2,
          list: []
        }, {
          id: 6,
          name: '订单列表',
          pid: 5,
          list: []
        }, {
          id: 11,
          name: '权限列表',
          pid: 10,
          list: []
        }, {
          id: 14,
          name: '分配操作权限',
          pid: 12,
          list: []
        }]
        // this.$set(this.menu, this.setActiveMenu(this.menu, activeItem[index]))
        // Object.assign(this.menu, this.setActiveMenu(this.menu, activeItem[index]))
        this.setActiveMenu(this.menu, activeItem[index])
        console.log(JSON.stringify(this.menu))
        // console.log(JSON.stringify(this.setActiveMenu1(this.menu, activeItem[index])))
        // JSON.stringify(this.setActiveMenu1(this.menu, activeItem[index]))
      }
    },
    computed: {},
    watch: {}
  }
</script>

<style scoped>
  ul {
    list-style: none;
  }

  .menu-item {
    line-height: 30px;
    color: dimgrey;
    cursor: pointer;
  }
</style>
