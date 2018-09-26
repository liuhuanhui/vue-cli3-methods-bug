<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  methods:{
    test(){
      console.log('2')
    }
  }
}
</script>
