<template>
   <div>
     <p>dededed</p>
     <h1>{{msg}}</h1>
     <a href="Hello">hello</a>
       Hello {{ $route.params.name }}
   </div>
</template>
<script>
  export default {
    name: 'firstroute',
    data () {
      return {
        msg: 'FirstRoute'
      }
    }
}
</script>