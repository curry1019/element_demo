import Vue from 'vue'
import Router from 'vue-router'
import Imfather from '@/views/father'
import Searchdemo from '@/views/searchdemo'
import UploadImgdemo from '@/views/uploadimgdemo'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'UploadImgdemo',
      meta:{
        title:"图片上传"
      },
      component: UploadImgdemo
    },
    {
      path: '/Imfather',
      name: 'Imfather',
      meta:{
        title:"组件传值"
      },
      component: Imfather
    },
    {
      path: '/Searchdemo',
      name: 'Searchdemo',
      meta:{
        title:"模糊搜索"
      },
      component: Searchdemo
    }
  ]
})
