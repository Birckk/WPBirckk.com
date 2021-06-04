const map_data = [{
  id: "Map",
  // (mouseX >= 1000 && mouseX < 1245) && (mouseY >= 25 && mouseY < 275
  borders: [1000, 1245, 25, 275]
}]

class WallMap {
  constructor(wallMap) {
    this.id   = wallMap.id
    this.minX = wallMap.borders[0]
    this.maxX = wallMap.borders[1]
    this.minY = wallMap.borders[2]
    this.maxY = wallMap.borders[3]
  }

  checkClicked(callback) {
    if ((mouseX >= this.minX && mouseX < this.maxX) && (mouseY >= this.minY && mouseY < this.maxY)) {
      callback()
    }
  }

  show(){
    
  }
}