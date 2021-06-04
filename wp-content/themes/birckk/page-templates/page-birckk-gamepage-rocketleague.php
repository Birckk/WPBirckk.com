<style>body {
  padding:0;
  margin:0;
  background-image: linear-gradient(#005f8e,#0c2e3e);
}

.noselect {
  -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none; /* Non-prefixed version, currently
                                  supported by Chrome and Opera */
}

  .flex-container-stats {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  min-width:600px;
}

.flex-container-stats > div {
  width: 150px;
  margin:auto;
  margin-right:3%;
  margin-left:3%;
  margin-top:5px;
  margin-bottom:5px;
  text-align: left;
  line-height: ;
  text-align:center;
}

@media(max-width:900px){
  .flex-container-stats > div{
    margin-right:0%;
    margin-left:0%;
  }
}

.center {
    display: block;
    margin-left: auto;
    margin-right: auto;
}

.stats-maindiv{
  width:100%;
  margin:auto;
  overflow:hidden;
  margin:auto;
  overflow:hidden;
  background-image: linear-gradient(#005f8e,#0c2e3e); 
  color:white;
  text-align:center;
}

.stats-maindiv p{
  margin-top:0px;
}


/*stats-rocketleague-----------------------------------------*/
.stats-rl-maindiv{
  width:100%;
  margin:auto;
  overflow:hidden;
  background-color: #005f8e; 
  background-image: linear-gradient(#005f8e,#0c2e3e); 
  color:#2879af; 
  font-family:Century Gothic;
  margin:auto ;
  overflow:hidden ;
}

.stats-rl-rocketleague{
  text-align: center; 
  background: -webkit-linear-gradient(#d5efff, #0da0ff);  
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  margin:0px; 
  font-size:18px;
  font-family:Century Gothic;
}

.stats-rl-currentrankings{
  text-align: center; 
  background: -webkit-linear-gradient(#97d3fc, #007acc); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin:2px; 
  font-size:15px;
  text-align: center; 
  margin-top:0px; 
  margin-bottom:2px;
  font-family:Century Gothic;
}

.stats-rl-gamemode{
  background: -webkit-linear-gradient(#d5efff, #0da0ff); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;  
  text-align: center; 
  color:#8fafef; 
  margin-top:0px; 
  margin-bottom:10px; 
  font-family:Century Gothic;
  font-size:16px;
}

.stats-rl-division{
  background: -webkit-linear-gradient(#83b5d7, #007acc); 
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  text-align: center; 
  margin-top: 0px ;
}

.stats-rl-rankingimage{
  display: block;
    margin-left: auto;
    margin-right: auto;
    width:100px;
    height:100px;
	margin-bottom:0px;
}

/* picture slideshow ----------------------------------------------------------------------------------*/
.slideshow-container {
  max-width: 1000px;
  position: relative;
  margin: auto;
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