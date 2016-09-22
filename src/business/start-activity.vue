<template>
  <div id="wrapper">
    <!-- start view -->
    <router-view
            class="view"
            keep-alive
            transition
            transition-mode="out-in">
    </router-view>
  </div>
</template>
<script>
  import Router from 'vue-router';
  export default {
    data () {
      return {
        uuid: Math.random().toString(36).substring(3, 8)  //唯一标识
      }
    },
    created () {

    },
    ready () {

    },
    methods: {
    }
  }
</script>
<style>
  #wrapper{
    height: 100%;
  }
</style>
