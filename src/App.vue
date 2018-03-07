<template>
  <div id="app">
    <mHeader></mHeader>
    <router-view/>
  </div>
</template>

<script>
  import './app.scss'
  import './assets/libs/icon/iconfont.css'
  import mHeader from './components/header/header'
export default {
  name: 'App',
  components: {
    mHeader
  }
}
</script>
