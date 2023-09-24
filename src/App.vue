<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link> |
    <router-link to="/vue">Vue</router-link>
    <router-link to="/things">Things</router-link>
  </div>  
  <!--<video autoplay muted loop id="backgroundVideo"><source src="./assets/videos/galaxy.mp4" type="video/mp4"></video>-->
  <div id="background" :style="{backgroundImage:'url('+require('@/assets/images/galaxy.jpg')+')'}"></div>
  <P5Galaxy/>
  <div id="component">
    <router-view/>
  </div>
</template>

<style scoped>
  @import url(./assets/styles/main.css);
</style>

<script>
import P5Galaxy from '@/components/P5Galaxy.vue'

export default {
        name: 'App',
        components: {
            P5Galaxy
        }
    }
</script>

