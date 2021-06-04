<script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.4.0.min.js" type="10e47d5097945b1ad5334935-text/javascript"></script>
    <script src="/WPBirckk.com/wp-content/themes/birckk/gamespage/skyrim/three.min.js" type="10e47d5097945b1ad5334935-text/javascript"></script>
    <script src="/WPBirckk.com/wp-content/themes/birckk/gamespage/skyrim/photo-sphere-viewer.min.js" type="10e47d5097945b1ad5334935-text/javascript"></script>

<style>body{
  margin:0;
}

@font-face {
    font-family: Witcherfont;  
    src: url(/WPBirckk.com/wp-content/themes/birckk/fonts/Thewitcher-jnOj.ttf);  
    font-weight: normal;  
}

/* header */ 
#header{
  text-align:center; 
  -webkit-box-shadow: inset 0 0 60px #000000;
  box-sizing:border-box;
}

#headerflex div img{
  max-width:80%;
  max-height:80%; 
  size:50%;
  -webkit-filter: drop-shadow(0px 0px 10px rgba(0,0,0,1)) drop-shadow(0px 0px 5px rgba(0,0,0,1));
}


#headerflex {
  display: flex;
  justify-content: center;
  align-items: center;
  box-sizing:border-box;
}

#headerflex div{
  width: 100%;
  padding-top:10px;
  height: 60px;
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image:url("/WPBirckk.com/wp-content/uploads/GamesPage/Witcher3/bg4.png"); 
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center; 
}


#Achievements {
 -webkit-box-shadow: inset 0 0 60px #000000;
 color:black;
 height:auto; 
 text-align:left;
 min-height:200px;
 max-height:200px;
 background: rgb(255,255,255);
 background: radial-gradient(circle, rgba(255,255,255,1) 0%, rgba(45,45,45,1) 0%, rgba(0,0,0,1) 100%);
 background-image:url("/WPBirckk.com/wp-content/uploads/GamesPage/Witcher3/bg5.jpg");
 background-size: cover;
 background-repeat: no-repeat;
 background-position: 0px -300px;
}

#Achievementsflex{
 width: 100%;
 height: 200px;
 display: flex;
 justify-content: space-between;
 align-items: center;
 padding-right:35%;
 padding-left:35%;
 box-sizing:border-box;
}

#Achievementsflex div{
  width: 250px;
  margin: 30px;
  text-align: center;
}


#Achievementsflex div img{
  width:20px;
  height:auto;
  padding-left: 10px;
  display: inline-block; 
  margin-bottom:4px;
  vertical-align:middle;
  background-attachment: fixed;
  filter: grayscale(100%);
}
#Achievementsflex div h3{
  font-size:20px; 
  display: inline-block;
  padding:0px;  
  margin:0px;
  font-family:Witcherfont;
  color:white;
}

#Achievements h1 {
  margin:0px; 
  line-height: 50px; 
  font-size:38px; 
  font-family:Marcellus; 
  color:#ffd700;
  background: -webkit-linear-gradient(#ffd700, #999);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  /* background: -webkit-linear-gradient(#eee, #333);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; */
}

/* Charpages container */
#Pagecontainer {
  vertical-align:center;
  text-align:center;
  padding:20px;
  -webkit-box-shadow: inset 0 0 10px #000000;
  background-image: url("/WPBirckk.com/wp-content/uploads/GamesPage/Witcher3/bg3-1.png");
  background-size: cover;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center;

}

#container {
  min-width:256px;
  min-height:144px;
  max-width:1280px;
  max-height:720px;
  height:auto;
  width:auto;
  margin: auto;
}

/* picture slideshow ----------------------------------------------------------------------------------*/
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
  background-color:black;
  height:560px;
}

/* Next & previous buttons */
.prev, .next {
  cursor: pointer;
  position: absolute;
  top: 50%;
  width: auto;
  margin-top: -22px;
  padding: 16px;
  color: white;
  font-weight: bold;
  font-size: 18px;
  transition: 0.6s ease;
  border-radius: 0 3px 3px 0;
}

/* Position the "next button" to the right */
.next {
  right: 0;
  border-radius: 3px 0 0 3px;
}

.prev {
  left: 0;
  border-radius: 3px 0 0 3px;
}

/* On hover, add a black background color with a little bit see-through */
.prev:hover, .next:hover {
  background-color: rgba(0,0,0,0.8);
}

/* Caption text */
.text {
  color: #f2f2f2;
  font-size: 15px;
  padding: 8px 12px;
  position: absolute;
  bottom:20px;
  width: 100%;
  text-align: center;
}
.mySlides {
  display:none;
}

.mySlides img {
  width:100%;
  box-shadow: 0px 0px 15px rgba(0,0,0,1); 
}

.active-slide {
  display:block;
}

/* The dots/bullets/indicators */
.dot {
  cursor:pointer;
  height: 13px;
  width: 13px;
  margin: 0 2px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
  transition: background-color 0.6s ease;
}

.active, .dot:hover {
  background-color: #717171;
}

/* Fading animation */
.fade {
  -webkit-animation-name: fade;
  -webkit-animation-duration: 1.5s;
  animation-name: fade;
  animation-duration: 1.5s;
}

@-webkit-keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}

@keyframes fade {
  from {opacity: .4}
  to {opacity: 1}
}</style>
<script src="https://ajax.cloudflare.com/cdn-cgi/scripts/7d0fa10a/cloudflare-static/rocket-loader.min.js" data-cf-settings="10e47d5097945b1ad5334935-|49" defer></script>