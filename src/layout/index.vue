<template>
  <div style="height: 100%;background-color: #f8f8f8;">
      <NavBar />
      <router-view />
      <TabBar />
  </div>
</template>

<script>

import { setToken } from '../utils/auth'
import TabBar from '../components/Tabbar'
import NavBar from '../components/Navbar'
export default {
  name: 'index',
  components: {
    NavBar,
    TabBar
  },
  data () {
    return {
      a: 1,
    }
  },
  methods: {},
  created () {},
  mounted () {

  }
}
</script>

<style scoped>

</style>
