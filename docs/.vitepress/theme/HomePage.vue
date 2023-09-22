<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { useRouter } from 'vitepress'
import axios from 'axios'

const subTitle = ref('')
const nav = useRouter()
onMounted(() => {
  axios.get('https://api.vvhan.com/api/ian')
    .then(({ data }) => {
      console.log(data)
      subTitle.value = data
    })
})

const btnClick = () => {
  nav.go('/src/leetcode每日一题/')
}
</script>

<template>
  <div class="container">
    <div class="mask">
      <div class="left">
        <h1 class="title">Good Good Learn, Day Day Up.</h1>
        <p class="sub-title">{{ subTitle }}</p>
        <button @click="btnClick" class="btn">LeetCode每日一练</button>
      </div>

      <div class="right">

      </div>
    </div>
  </div>
</template>

<style scoped>
.container{
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  /* width: 100%;
  height: calc(100vh - 64px); */
  background:  no-repeat cover;
  background: center / cover no-repeat url('https://api.vvhan.com/api/bing?size=640x480&rand=sj');
}
.mask{
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, .4);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 100px;
}
.left{
  flex: 2;
  color: #fff;
}

.right{
  flex: 1;
}

.title{
  font-weight: 600;
  font-size: 64px;
}

.sub-title{
  margin-top: 30px;
  font-size: 24px;
  line-height: 1.5;
}

.sub-name{
  text-align: right;
}

.btn{
  padding: 20px;
  font-size: 24px;
  font-weight: 600;
  border-radius: 30px;
  margin-top: 10px;
  background-image: linear-gradient(to top, #a3bded 0%, #6991c7 100%);
}
</style>