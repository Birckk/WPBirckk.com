var books, current_thing;
var imgbackground;

let bubbles = []; //bubbles
var things = [];

const book_content = document.getElementById("book")
const pages = document.querySelectorAll(".book-html")
const book_nav_prev =  document.getElementById("prev-page")
const book_nav_next =  document.getElementById("next-page")
const map = document.getElementById("map")

function setup() {

  var canvas = createCanvas(1280, 720);
  img = loadImage ('/WPBirckk.com/wp-content/uploads/portfolio/Universe/OtherStuff/bubble.png');
  canvas.parent('sketch-holder');

  for (const [_type, _data] of _things_recipe.entries()) {
    let item_collection = _data.map((data) => new _type(data))
    things.push(item_collection)
  }
  things = things.flat()

  current_thing = -1;

  imgbackground = loadImage('/WPBirckk.com/wp-content/uploads/portfolio/Universe/Backgrounds/BackgroundNew.png');
}

function draw() {
  image(imgbackground, 0, 0);
  strokeWeight(0);

  things.forEach((thing) => {thing.show()})

// bubbles
// rect(765,420,30,45); purple jar location
  if(mouseIsPressed && mouseX>765 && mouseX<790 && mouseY>420 && mouseY<465 && frameCount%12==0)
  {
  let size = random(5, 20);
  let b = new Bubble(773, 415, size, size);
  bubbles.push(b);
  }
  for (let bubble of bubbles) {
    bubble.move1();
    bubble.move2();
    bubble.show();
  }

  for (let i = 0; i < bubbles.length; i++) {
    bubbles[i].move1();
    if(frameCount%12==0)
    {
      bubbles[i].move2();
    }
    bubbles[i].show();
  }
  if(frameCount%60==0){
    bubbles.splice(0,1)
  }

  if (bubbles.length > 7){
  bubbles.splice(0,2)
  }
//bubbles
}

function mouseClicked() {
    if (current_thing === -1) {
      things.forEach((thing, index) => {
        if(thing instanceof Book){
          thing.checkClicked(bookClicked, index)
        }

        if(thing instanceof WallMap){
          thing.checkClicked(wallMapClicked)
        }
      })
    }
}

function bookClicked(book_instance, index){
  current_thing = index
  book_content.classList.remove("hidden")
  book_instance.renderPairOffset(1, pages)
  book_nav_prev.onclick = navBackwards
  book_nav_next.onclick = navForward
}

function wallMapClicked(){
  map.classList.remove("hidden")
}

// Specielle bog-funktionalitet
window.onload=function() {
    document.onkeyup = key_event;
    document.getElementById("close-page").onclick = clearPopupSelections
    document.getElementById("book").onclick = backgroundClick
    document.getElementById("map").onclick = backgroundClick
}

function navForward(e){
  let book = things[current_thing]
  book.atEnd ? null : book.pairOffset++
  things[current_thing].renderPairOffset(book.pairOffset, pages)
}

function navBackwards(e){
  let book = things[current_thing]
  book.pairOffset > 1? book.pairOffset-- : null
  book.atEnd = false
  things[current_thing].renderPairOffset(book.pairOffset, pages)
}


function key_event(e) {
    if (e.keyCode == 27){
      clearPopupSelections()
    }
}

function clearPopupSelections(){
  if(things[current_thing] && things[current_thing] instanceof Book)
    things[current_thing].reset()
  current_thing = -1

  book_content.classList.add("hidden")
  book_nav_prev.onclick = null
  book_nav_next.onclick = null

  map.classList.add("hidden")

}

function backgroundClick(e){
  var ev = e || window.event;
  if(e.target === this)
    clearPopupSelections()
}

//bubbles
class Bubble {

  constructor(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
  }

  move1() {
    this.x = this.x + random(-1, 1);
  }
  move2() {
    this.y = this.y + random(-1, 0);
  }

  show() {
    imageMode(CORNER);
    image(img,this.x,this.y,this.w,this.h);
  }
}
////