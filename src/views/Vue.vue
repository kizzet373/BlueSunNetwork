<template>
    <div class="home grid grid-cols-6">
        <img class="col-span-full mx-auto" alt="Vue logo" src="../assets/logo.png">
        <HelloWorld class="col-span-full" msg="Welcome to Your Vue.js App"/>
    </div>
</template>

<style>
    .home {
        text-align: center;
    }
</style>

<script>
    // @ is an alias to /src
    import HelloWorld from '@/components/HelloWorld.vue'

    export default {
        name: 'Vue',
        components: {
            HelloWorld
        }
    }
</script>
  