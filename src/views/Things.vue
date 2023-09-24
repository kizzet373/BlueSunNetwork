<template>    
  <div class="grid grid-cols-2 justify-items-center text-center content-center">
    <template v-for="category in categories" v-bind:key="category">
      <div class="category col-span-2 w-full mb-10 mt-10">
        <span class="text-3xl">{{category.title}}</span>
      </div>
      <div class="post lg:w-1/2 lg:col-span-1 w-full col-span-2 mb-10" v-for="post in category.posts" v-bind:key="post">
        <span>{{post.text}}</span>
        <a v-if="post.link.element === 'a'">{{post.link}}</a>
        <iframe v-if="post.link.element === 'iframe'" v-bind:width="post.link.width" v-bind:height="post.link.height" v-bind:src="post.link.src" v-bind:title="post.link.title" v-bind:frameborder="post.link.frameborder" v-bind:allow="post.link.allow" allowfullscreen></iframe>
      </div>
    </template>
  </div>
</template>
  
  <style scoped>    
  </style>
  
  <script>
    export default {
      name: "Things",
      data() {
        return {
          categories: [
            {
              title: "Songs to learn on Piano!",
              posts: [
                {
                  text:"Memoria:",
                  link:{element:"iframe", width:"100%", height:"315", src:"https://www.youtube.com/embed/lVJYocffodY?start=300", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", extra:"allowfullscreen"}
                },
                {
                  text:"Kuja's Theme:",
                  link:{element:"iframe", width:"100%", height:"315", src:"https://www.youtube.com/embed/lVJYocffodY?start=1386", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", extra:"allowfullscreen"}
                },
                {
                  text:"PDPP - Lake Theme:",
                  link:{element:"iframe", width:"100%", height:"315", src:"https://www.youtube.com/embed/4Y0eR3E4So0", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", extra:"allowfullscreen"}
                },
                {
                  text:"Coheed and Cambria - The Hollow:",
                  link:{element:"iframe", width:"100%", height:"315", src:"https://www.youtube.com/embed/uKdQwJmACqI", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", extra:"allowfullscreen"}
                },
                {
                  text:"Kingdom Hearts - Hollow Bastion:",
                  link:{element:"iframe", width:"100%", height:"315", src:"https://www.youtube.com/embed/WbKdwIw82wg", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", extra:"allowfullscreen"}
                },
                {
                  text:"Erik Satie - Gymnopédie No.1:",
                  link:{element:"iframe", width:"100%", height:"315", src:"https://www.youtube.com/embed/S-Xm7s9eGxU?list=PL0COI12jLAaYq4mQiBr-PjZT8ntVc6NxJ", title:"YouTube video player", frameborder:"0", allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture", extra:"allowfullscreen"}
                }
              ]
            },
            {
              title: "Noise Scapes",
              posts: []
            }
          ]                      
        }      
      }
    }
  </script>