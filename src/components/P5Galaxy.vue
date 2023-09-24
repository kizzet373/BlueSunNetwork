<template>
    <div class="container border">
        <div class="d-flex justify-content-center" id="p5Canvas"></div>
    </div>
</template>

<script>
    export default {    
        mounted() {             
            const P5 = require('p5/lib/p5.js'); 
            const sketch = require('@/assets/javascript/sketch.js');                       
            new P5(sketch);
        }             
    }
</script>
