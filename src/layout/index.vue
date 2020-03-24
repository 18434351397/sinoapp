<template>
  <div>
    layout页
  </div>
</template>

<script>
import { setToken } from '../utils/auth'
export default {
  name: 'index',
  data () {
    return {
      a: 1
    }
  },
  methods: {},
  created () {
    setToken('2333')
  }
}
</script>

<style scoped>

</style>
