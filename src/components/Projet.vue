<template>
   <div class="projet">
   <div class="picture">
   <h1>C'est notre projet</h1>
   </div>
     <p>{{msg}}</p>
     <h1>{{msg}}</h1>
     <a href="Projet">projet</a>
     <h1>le projet Nuance</h1>
     Hello {{ $route.params.name }}
     <p>bla bla bla bladededdededededed<br>fefefefefefefefefefe</p>
     
   </div>
</template>
<script>
  export default {
   // name: 'Projet',
   // data () {
   //   return {
      //  msg: 'Projet'
  //    }
 //   }
}
</script>
<style>
.projet {
  position: fixed;
  top:0;
  right: 0;
  width: 100%;
  height: 100vh;
  background: #111629;
  opacity : 1;
  z-index: 200;
}
.picture {
  position: relative;
float: left;
width: 48%;
height: 100%;
overflow: hidden;
background-color: white;
color:#111629;
}
</style>