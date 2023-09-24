<template>  
    <div id="content">      
      <div class="grid grid-cols-2 justify-items-center" id="post-list">
        <div class="post lg:w-2/5 lg:col-span-1 col-span-2 w-full mb-10" v-for="post in posts" v-bind:key="post">
          <p>{{post}}</p>
        </div>
      </div>
    </div>
</template>

<script>
  let phrase = "Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. Just a bunch of random text. ";
  
  export default {
    name: "HomePage",    
    data() {
      return {          
          posts: [
            phrase,
            phrase,
            phrase,
            phrase,
            phrase,
            phrase,
            phrase,
            phrase,
            phrase,
            phrase
        ]
      }      
    }
  }
</script>