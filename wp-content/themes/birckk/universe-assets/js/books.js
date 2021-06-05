const book_data = [{
  title: "book1",
  pages: [
    "<div style=\"display: flex;justify-content: center; align-items: center; height:100%; text-align:center;\"><p>Forged by gods</br> Wielded by man</br> Don't destroy the world</br> Ever Again</p></div>",
    "<div style=\"width:341px; height:536px; display: flex;justify-content: center;align-items: center;\"><img src=\"/WPBirckk.com/wp-content/uploads/portfolio/Universe/Books/GodSword/god-sword.png\" alt=\"\" style=\"width:150%; \"></div>",
  ],
  //x, y, w, h
  pos: [340, 535, 35, 75]
},
{
  title: "book2",
  pages: [
    "",
    "<div style=\"text-align: center;\"><h1 style=\"margin-bottom:0px;\">Flowers and their many traits</h1><h4 style=\"margin:0px;\"> A study on rare and unique flowers </h4></div><p> This book is by Langdon Green A botanic expert on forest plants. The book is an accumilation of his many journals on his discoveries from a lifelong journey to map out all plants known and unknown to man<p>",
    "<div style=\"text-align: center;\"><h1 style=\"margin-bottom:0px;\">Lefriscus</h1><h4 style=\"margin:0px;\"> Singing Eydroplet </h4></div><p> The Lefriscus Flower, more commonly referred to as The Singing Eye droplet is known for its ability to bring sadness into the beholder as it is said that those who listens to its song will have their emotions brought out and burst into sadness.<p><p style=\"transform: rotate(20deg); display: table; padding-left:30px\"> few leaves </p><p style=\"transform: rotate(-20deg); display: table; padding-left:120px; margin-top:70px;\"> sounds found nowhere else on the planet </p><p style=\"transform: rotate(5deg); display: table; padding-left:120px; margin-top:140px; font-size: 20px\"> Further Research Needed </p>",
    "<div style=\"width:341px; height:536px; display: flex;justify-content: center;align-items: center;\"><img src=\"/WPBirckk.com/wp-content/uploads/portfolio/Universe/Books/PlantBook/flower1.png\" alt=\"\" style=\"width:150%; \"></div>",
    "<div style=\"text-align: center;\"><h1 style=\"margin-bottom:0px;\">Sirline</h1><h4 style=\"margin:0px;\"> Void Flower </h4></div><p> Not much is known about the flower or its origin but many people are afraid of it as its reputations speaks of pulling people into the flower<p><p style=\"transform: rotate(20deg); padding-left:120px; display: table;\"> Light doesn't follow <br/> the natural order</p><p style=\"transform: rotate(-20deg); display: table; margin-top:30px;\"> Incredible colors </p><div style=\"padding-left:320px;\"><p style=\"transform: rotate(80deg); display: table; \"> Long deep Roots</p></div><p style=\"transform: rotate(-2deg); display: table; margin-top:60px; padding-left:80px; font-size:40px; text-align:center\">DON'T GO NEAR </p>",
    "<div style=\"width:341px; height:536px; display: flex;justify-content: center;align-items: center;\"><img src=\"/WPBirckk.com/wp-content/uploads/portfolio/Universe/Books/PlantBook/flower2.png\" alt=\"\" style=\"width:150%; \"></div>"
  ],
  //x, y, w, h
  pos: [115, 260, 30, 70]
},
{
  title: "book3",
  pages: [
    "<div style=\"display: flex;justify-content: center; align-items: center; height:100%; text-align:center;\"><i><p>Our vision only works when there is light, and light gets life from fire. So for man to see where nothing can bee seen, must man control fire.</br></i>  </br>The city of Bellmoral in the north has always been a very dark and sombre place to live. And this is where the highly respected Merek and his novices resides. You see Merek the chandler produces candles to light up the night and warm peoples homes. We humans can be truly at despair once we lose the ability to see, which is why Merek’s skills are highly appreciated amongst the villagers.</br>  </br>Not much is known about who first invented or were able to control fire for long periods of time but candles has been used for thousands of years throughout history and in many civilizations</p></div>",
    "<div style=\"width:341px; height:536px; display: flex;justify-content: center;align-items: center;\"><img src=\"/WPBirckk.com/wp-content/uploads/portfolio/Universe/Books/Artisans/artisans-chandler.png\" alt=\"\" style=\"width:250%; \"></div>",
  ],
  //x, y, w, h
  pos: [165, 80, 30, 60]
}
]

/*
,
{
  title: "book3",
  pages: [],
  //x, y, w, h
  pos: [765, 420, 30, 45]
},
{
  title: "book4",
  pages: [],
  //x, y, w, h
  pos: [835, 385, 95, 80]
},
{
  title: "book5",
  pages: [],
  //x, y, w, h
  pos: [1000, 25, 250, 250]
}
*/


class Book {
  constructor(book) {
    this.book = book
    this.x = book.pos[0]
    this.y = book.pos[1]
    this.w = book.pos[2]
    this.h = book.pos[3]
    this.pairOffset = 0
    this.atEnd = false
  }

  show() {
    stroke(0);
    strokeWeight(0);
    fill(255, 0, 0,0); //change alpha value when wanting to see books clickable areas
    rect(this.x, this.y, this.w, this.h);
  }

  reset() {
    this.pairOffset = 0
    this.atEnd = false
  }

  checkClicked(callback, index) {
    if (mouseX > this.x && mouseX < this.x + this.w && mouseY > this.y && mouseY < this.y+ this.h ) {
      callback(this, index)
    }
  }

  renderPairOffset(pairOffset, pages){
    this.pairOffset = pairOffset
    --pairOffset
    let numPages = pages.length
    let pageArray = this.calcPages(pairOffset, numPages)
    let nextPageArray = this.calcPages(pairOffset+1, numPages);

    pageArray.forEach((data, index) => pages[index].innerHTML = data)

    if(pageArray.length == 1){
      pages[1].innerHTML = ""
      this.atEnd = true
    }

    if(nextPageArray.length === 0){
      this.atEnd = true
    }
  }

  calcPages(pairOffset, numPages){
    return this.book.pages.slice(pairOffset * numPages, (pairOffset + 1) * numPages)
  }
}