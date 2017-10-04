<template>
    <div id="app">
      <div class="description">
          <h1> HELLO !</h1>
            <p>— Je suis Sofiane, je suis développeur web et mobile.<br>
                  Étudiant licence pro développeur web et mobile à<br>
                      l’IUT de Bobigny.<br>
                      Je recherche actuellement une entreprise ou effectuer mon apprentissage</p>
      </div>
            <p class="scroll">Scrollez vers le bas</p>
      <div id="conteneur">
          <div class="colonne">
              <div id="image"></div>
              <h2>Stage   .   Application  .  Vidéos .RA</h2>
              <h1>IREALITY</h1>
              <p>— Application de réalité augmentée pour la presse
                développée lors de mon stage universitaire.<br><a href="images/ireality.mp4" target="_blank">Voir la vidéo de présentation</a></p>

            </div><hr>
      <div class="colonne-1">
        <div id="image1"></div>
          <h2>Scolaire   .   Application .  Projet .   Cordova    .    Ionic</h2>
          <h1>NUANCE</h1>
            <p>— Application musicale de playlists dynamiques qui relient les chansons aux émotions de l’utilisateur.<br><a href="https://play.google.com/store/apps/details?id=com.nitentia.nuance" target="_blank">Télécharger l'application sur Google Play</a></p>
        </div>

  <section>
       <h1>COMPETENCES</h1>
        <p>— En programmation, je maîtrise HTML5,<br> CSS3, JQuery, JSP,  ANGULARJS<br>Je connais aussi le C#, JAVA, PHP,<br>
      et j'ai de l'intérêt pour UNITY 3D<br>
  <span class="cv"><a href="http://sofianelakhneche.com/cv/sofiane_lakhneche_cv.pdf"> → Voir mon CV complet</a></span></p>
  </section>
<hr>
              <div class="colonne-2">
                <div id="image2"></div>
                <h2>Personnel   .   Jeu   .  Unity   .  C# </h2>
                <h1>SONIC</h1>
                <p>— Un remake du jeu Sonic 2 que j’affectionne particulièrement, développé sous Unity 3D durant mon temps libre.<br><a href="sonic/sonic.html" class="image" target="_blank">Tester le jeu(Prototype)</a></p>
              </div>

              <div class="colonne-3">
                <div id="image3"></div>
                <h2>Scolaire  .  Jeu  .  Web    .  Javascript . Canvas</h2>
                <h1>MEMORY</h1>
                <p>— Un remake du jeu Sonic 2 que j’affectionne particulièrement, développé sous Unity 3D durant mon temps libre.<br><a href="memory/memory.html" class="image" target="_blank">Tester le jeu</a></p>
              </div>
              <hr>
    <section>
      


       <h1>CONTACT</h1>
        <p>— — Vous pouvez m’envoyer un message<br> à <span class="cv"><a href="mailto:contact@sofianelakhneche.com">contact@sofianelakhneche.com</a></span> Ou me retrouver par ici →</p> 
                <ul class="icons">
                            <a href="http://github.com/solidusnake/" class="fa fa-github"></a>
                            <a href="mailto:contact@sofianelakhneche.com" class="fa fa-envelope"></a>
                          </ul>
    </section>
     
            </div>

        <router-view></router-view>
      </div>
</template>
    <script>
    export default {
      name: 'app'
    }
    </script>
    <style>

    #app {
      font-family: 'Avenir', Helvetica, Arial, sans-serif;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      text-align: center;
      margin-top: 60px;


    }
    body {
      background-color: #111629;
        color: white;
        width: auto;
        height: auto;
        /*font-family: "PathwayGothicOne";*/
    }
    h1 {
      font-size:400%;
    }
    p {
    font-size:130%;
    /*font-family: "Chivo";*/
    }
    a {
      text-decoration: none;
      
    }
    section {
      height: 100px;
      width: 485px
    }
    hr {
      margin: 0px;
    }
  .cv {
    color: #FEEA72;
    text-decoration: none;
  }
  .scroll {
    text-align: center;
  padding-top: 130px;
  }
.colonne
  {
    width:485px;
    height:777px;
    background-color:#87BBD8;
   }
.colonne-1
  {
  width:485px;
  height:777px;
  background-color:#F36D69;
  margin-top: 150px;
  }


  .colonne-2
  {
  width:485px;
  height:777px;
  background-color:#242F61;
  margin-top: 150px;
  }


  .colonne-3
  {
  width:485px;
  height:777px;
  background-color:#87BBD8;
  }
  #conteneur {
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
    justify-content: space-between;
  }
  #image {
    width: 485px;
    height: 360px;
    background-image: url('assets/img/projet_1.png');
    background-size: 100%;
    background-repeat: no-repeat;
  }
  #image1 {
    width: 485px;
    height: 360px;
    background-image: url('assets/img/projet_2.png');
    background-size: 120%;
    background-repeat: no-repeat;
  }
  #image2 {
    width: 485px;
    height: 360px;
    background-image: url('assets/img/projet_3.png');
    background-size: 120%;
    background-repeat: no-repeat;
  }
  #image3 {
    width: 485px;
    height: 360px;
    background-image: url('assets/img/projet_4.png');
    background-size: 120%;
    background-repeat: no-repeat;
  }

  .ligne_verticale
  {
    border-left:1px solid white;
    height:3500px;
    margin: 90px;
  }
  .description {
    text-align: left;
    margin-left : 158px;
  }
  /*version mobile*/

/*@media only screen and (max-device-width:412px) {
body {
  width: auto;
  height: auto;
  font-size:200%;
  margin-top: 200px;
  }
 hr {
  overflow: hidden;
opacity: 0;
 }
 h1 {
   
 }
.scroll {
  text-align: center;
 }
.colonne1 {
   margin: auto;
   width:970px;
   height:1600px;
   background-color:#87BBD8;
  }
 .colonne2
 {
 margin: auto;
 width:970px;
 height:1600px;
 background-color:#F36D69;
}
.colonne3
 {
 width:970px;
 height:1600px;
 background-color:#242F61;
}
.colonne4
 {
 width:970px;
 height:1600px;
 background-color:#87BBD8;
 }
  #conteneur {
  
  padding: 0;
  margin: 0;
  list-style: none;
  
  display: -webkit-box;
  display: -moz-box;
  display: -ms-flexbox;
  display: -webkit-flex;
  display: flex;
  
  -webkit-flex-flow: row wrap;
  justify-content: space-around;
 
  }

 #image {
   width: 970px;
   height: 720px;
    background-image: url('assets/img/projet_1.png');
   background-size: 100%;
   background-repeat: no-repeat;
 }
 #image1 {
   width: 970px;
   height: 720px;
    background-image: url('assets/img/projet_4.png');
   background-size: 200%;
   background-repeat: no-repeat;
 }
 #image2 {
   width: 970px;
   height: 720px;
    background-image: url('assets/img/projet_4.png');
   background-size: 200%;
   background-repeat: no-repeat;
 }
 #image3 {
   width: 970px;
   height: 720px;
    background-image: url('assets/img/projet_4.png');
   background-size: 120%;
   background-repeat: no-repeat;
 }
}*/
  </style>
        <style src="./assets/css/styles.css?v=1.0s"></style>
        <style src="./assets/css/font-awesome.min.css"></style>

