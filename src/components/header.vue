<template>
  <div class="header">
     <header>
      <nav class="navbar">
        <ul>
          <span class="name">Sofiane Lakhneche</span>
          <li><a href="#conteneur">Projets</a></li>
          <li><a href="http://sofianelakhneche.com/cv/sofiane_lakhneche_cv.pdf">CV</a></li>
          <li><a href="mailto:contact@sofianelakhneche.com">Contact</a></li>
        </ul>
      </nav>
  </header>

<div id="example-3">
  <button v-on:click="say('salut')">Dire salut</button>
  <button v-on:click="say('quoi')">Dire quoi</button>
</div>
</div>
</template>
<!--if (window.addEventListener) {
  var kkeys
  kkeys.konami = [ '38,38,40,40,37,39,37,39,66,65' ]
  window.addEventListener('keydown', function (e) {
    kkeys.push(e.keyCode)
  if (kkeys.toString().indexOf(kkeys) >= 0) {
    alert('Kommunauty.fr, ça roxx de la chaise a bascule')
    window.location = 'http://kommunauty.fr'
  }
  }, true)
}--><script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
.header {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
nav {
  padding: 0; margin: 0;
  text-align: center;
  margin-top: 40px;
  font-size: 24px;
}
nav li {
  display: inline;
  list-style: none;
}
nav a {
  display: inline-block;
  margin: 0 30px;
  text-decoration: none;
  color: white;
  /*font-family: "PathwayGothicOne";*/
   font-family: 'Avenir', Helvetica, Arial, sans-serif;

}
.name {
margin-right: 10%;
color: white;
}
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
