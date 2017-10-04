<template>
  <div id="main">
      <h1> fdp !</h1>
  <p>— Je suis Sofiane, je suis développeur web et mobile et également<br>étudiant en licence pro développeur web et mobile en apprentissage à<br> l’IUT de Bobigny.</p>
  </article>
  <p class="scroll">Scrollez vers le bas</p>
           <div id="conteneur">
             <div class="colonne1">
          <div id="image1"></div>
          <h1>IREALITY</h1>
          <p>— Application de réalité augmentée pour la presse
            développée lors de mon stage universitaire.</p>

          </div>
          <hr>
       <!--   <div class="ligne_verticale" ></div> -->
          <div class="colonne2">
  <div id="image1"></div>
  <h1>NUANCE</h1>
  <p>— Application musicale de playlists dynamiques qui relient les chansons aux émotions de l’utilisateur.</p>
          </div>

<section>
   <h1>COMPETENCES</h1>
    <p>— En programmation, je maîtrise HTML5,<br> CSS3, JQuery, JSP,  ANGULARJS<br>Je connais aussi le C#, JAVA, PHP,<br>
  et j'ai de l'intérêt pour UNITY 3D<br>

  → Voir mon CV complet</p>
</section>


<hr>

          <div class="colonne3">
            <div id="image2"></div>
            <h2>Personnel   .   Jeu</h2>
            <h1>SONIC</h1>
            <p>— Un remake du jeu Sonic 2 que j’affectionne particulièrement, développé sous Unity 3D durant mon temps libre.</p>
          </div>

          <div class="colonne4">
            <div id="image3"></div>
            <h1>NUANCE</h1>
            <p>— Application musicale de playlists dynamiques qui relient les chansons aux émotions de l’utilisateur.</p>
          </div>
          <hr>
<section>
   <h1>COMPETENCES</h1>
    <p>— — Vous pouvez m’envoyer un message<br> à lakhneche.sofiane@gmail.com Ou me retrouver par ici → Voir mon CV complet</p>
            <ul class="icons">
                        <a href="http://github.com/solidusnake/" class="fa fa-github"></a>
                        <a href="mailto:contact@sofianelakhneche.com" class="fa fa-envelope"></a>
                      </ul>
</section>

        </div>



    <img src="./assets/logo.png">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'main1'
}
</script>

<style>
#main1 {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
body {
  background-color: #111629;
    color: white;
    width: auto;
    height: auto;
    font-family: "PathwayGothicOne";
}
h1 {
  font-size:500%;
}
p {
font-size:130%;
font-family: "Chivo";
}

section {
  height: 100px;
  width: 485px
}
hr {
  margin: 0px;
}

.scroll {
  text-align: center;
}
.colonne1
{
  width:485px;
  height:777px;
  background-color:#87BBD8;

 }



.colonne2
{
width:485px;
height:777px;
background-color:#F36D69;
margin-top: 150px;


}


.colonne3
{
width:485px;
height:777px;
background-color:#242F61;
margin-top: 150px;
/*
margin-top: 100px;
margin-left: 60px;*/
}


.colonne4
{
width:485px;
height:777px;
background-color:#87BBD8;
/*
margin-top: 100px;
margin-right: 60px;
margin-left: 700px;*/
}
#conteneur {

  /*display: flex;
  flex-flow: row wrap;
  margin-left: 60px;
  justify-content: space-around;
  width : 1000px;
  max-width: 800px;
  margin: 0 auto;
  margin: 0 auto;
  padding: 0;
  /*margin: 0;*/
  margin: 0 auto;
  list-style: none;
  width: 1000px;
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  flex-flow: row wrap;
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
}
#image {
  width: 485px;
  height: 360px;

  background-size: 100%;
  background-repeat: no-repeat;
}
#image1 {
  width: 485px;
  height: 360px;

  background-size: 120%;
  background-repeat: no-repeat;
}
#image2 {
  width: 485px;
  height: 360px;

  background-size: 120%;
  background-repeat: no-repeat;
}
#image3 {
  width: 485px;
  height: 360px;

  background-size: 120%;
  background-repeat: no-repeat;
}

.ligne_verticale
{
  border-left:1px solid white;
  height:3500px;
  margin: 90px;
  /*width:5px;
  color: white;
  margin-left:630px;
  position: absolute;*/
}
</style>
