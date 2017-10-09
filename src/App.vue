<template>
  <div id="app">
    <Header/>
    <Conteneur/>
<Footer/>

        <router-view></router-view>
      </div>
</template>
<script>
import Header from '@/components/Header'
import Conteneur from '@/components/container'
import Footer from '@/components/Footer'
export default {
  name: 'app',
  components: {
    Header,
    Conteneur,
    Footer
  }
}
</script>
    <style>

  </style>


