<template>
  <div id="app">

        <AddGoogleMap @addData="changeTable" />



  </div>
</template>

<script>
// Google maps API key: AIzaSyAQpOr4y8Guai4M1Jl78PYJWSZnsxpEoIQ
import AddGoogleMap from './components/GoogleMaps/index.vue'

export default {
  name: 'App',
  components: {
    AddGoogleMap,
  },
  data() {
    return {
      tableData: [],
      selectedList: []
    }
  },
  methods: {
    changeTable(position) {
      this.tableData.push(position)
    },

  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
