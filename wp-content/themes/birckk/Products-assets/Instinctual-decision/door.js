var canvas = document.querySelector('canvas');
var c = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

var boxheight = 30;
var boxwidth = 18;

var doorx = (window.innerWidth/2)-(boxwidth/2);
var doory = (window.innerHeight/2)-(boxheight/2);

var alpha = 1;


var maxRadius = 40;
var minRadius = 2;

colorArray = [
 '#FFFCF3',
 '#7F7E7A',
 '#FFFDF5',
 '#7F7F7B',
 '#CCCAC4',
];



window.addEventListener('resize',function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;

	init()
});

function Circle (x, y, dx, dy, radius) {
	this.x = x;
	this.y = y;
	this.dx = dx;
	this.dy = dy;
	this.radius = radius;
	this.minRadius = radius;
	this.color = colorArray[Math.floor(Math.random()*colorArray.length)];	
	this.lifespan = 255;

	this.draw = function () {
		c.beginPath();
		c.arc(this.x,this.y,this.radius,0, Math.PI *2,false);
		c.fillStyle = this.color,this.lifespan;
		c.fill();
	}
	this.update = function(){
		if (this.x+this.radius > innerWidth || this.x-this.radius < 0) {
			this.dx = -this.dx;
			}
			if (this.y+this.radius > innerHeight || this.y-this.radius < 0) {
				this.dy = -this.dy;
			}
			this.x+=this.dx;
			this.y+=this.dy;
			
			
			
			this.draw();
			
	}
}

var circleArray =[];


function init(){

	circleArray = [];
	for (var i = 0; i < 100; i++) {
		var radius=Math.random() * 3+1;
		var x = Math.random()*(innerWidth - radius*2)+radius;
		var y = Math.random()*(innerHeight - radius*2)+radius;
		var dx = (Math.random() -0.5) *2;
		var dy = (Math.random() -0.5) *2;
		circleArray.push(new Circle(x,y,dx,dy,radius));
	}
	doorx = (window.innerWidth/2)-(boxwidth/2);
	doory = (window.innerHeight/2)-(boxheight/2);
}



function animate() {


	requestAnimationFrame(animate);
	c.clearRect(0,0,innerWidth,innerHeight);
	c.fillStyle = "black";
	c.fillRect(0,0,window.innerWidth,window.innerHeight);
	c.shadowBlur = 10;
	c.shadowColor = "white";
	c.fillStyle = "white";
	c.fillRect(doorx,doory,boxwidth,boxheight);
	for (var i = 0; i < circleArray.length; i++) {
		circleArray[i].update();
	}
	


}
init();

animate();