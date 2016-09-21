<template>
  <div id="wrapper">
    <!-- header -->
    <div id="header">
      <a id="yc" href="https://github.com/GlorisZhang">
        <img src="http://localhost:8080/src/assets/images/gemini-logo.jpg" width="100px"/>
      </a>
      <h1><a href="#/">Gemini News</a></h1>
      <span class="source">
        Built with <a href="http://vuejs.org" target="_blank">Vue.js</a> |
        <a href="https://github.com/GlorisZhang/Gemini-New" target="_blank">Source</a>
      </span>
    </div>
    <!-- main view -->
    <router-view
      class="view"
      keep-alive
      transition
      transition-mode="out-in">
    </router-view>
  </div>
</template>

<style lang="stylus">
html, body
  font-family Verdana
  font-size 13px
  height 100%

ul
  list-style-type none
  padding 0
  margin 0

a
  color #000
  cursor pointer
  text-decoration none

#wrapper
  background-color #fff
  position relative
  width 85%
  min-height 80px
  margin 0 auto

#header
  background-color #fff
  height auto
  line-height 72px
  position relative
  h1
    font-weight bold
    font-size 13px
    display inline-block
    vertical-align middle
    margin 0
  .source
    color #038cd6
    font-size 11px
    position absolute
    top 4px
    right 4px
    a
      color #038cd6
      &:hover
        text-decoration underline

#yc
  border 1px solid transparent
  margin 2px
  display inline-block
  vertical-align middle
  img
    vertical-align middle

.view
  position absolute
  background-color #fff
  width 100%
  transition opacity .2s ease
  box-sizing border-box
  padding 8px 20px
  &.v-enter, &.v-leave
    opacity 0

@media screen and (max-width: 700px)
  html, body
    margin 0
  #wrapper
    width 100%

  #yc
    img
      width 50px
      height 40px

</style>
