<template>
  <div class="hello">
    <button @click="getData()">clickme</button>
    {{ msg }}
  </div>
</template>

<script>
export default {
  data () {
    return {
      msg: 'Welcome'
    }
  },
  methods: {
    getData () {
      let that = this
      let param = {name: '11'}
      this.$post('getInitApi', param).then(function (res) {
        that.msg = res.data.title
      }).catch(function (err) {
        console.log(err)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
