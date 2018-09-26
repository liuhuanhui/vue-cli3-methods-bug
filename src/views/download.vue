<template>
  <div id="download-page">
    down
    </div>  
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  created() {
    if (this.browser.isWX) {
      this.visible = true
    }
  }
}
</script>
