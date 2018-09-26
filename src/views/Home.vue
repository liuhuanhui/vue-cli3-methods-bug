<template>
  <div class="home">
    <button class="btn" @click="clickRegister">立即注册</button>
  </div>
</template>

<script>
// @ is an alias to /src
// import { Indicator } from 'mint-ui';
// import { registerService, sendVerifyCodeService } from '@/api/'
export default {
  name: 'home',
  methods: {
    onClickGetCode() {
      // console.log(Indicator)
      // Indicator.open('正在发送...');
    },
    clickRegister(){
      alert('clickRegister')
    }
  },
  created() {
    console.log(this)
    alert(2)
  },
}
</script>
