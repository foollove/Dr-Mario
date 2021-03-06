
function Virus(options){
    this.game = options.game;
    this.color = randomColor();
    this.idx = this.randomPosition()
}

  Virus.prototype.randomPosition =  function randomPosition(){
        let x = Math.round(Math.random() * 7) + 1;
        let y = Math.round(Math.random() * 10) + 5;
        let idx =  (y * 8 - 1) + x
        let squares = document.getElementsByClassName('grid-square-square')
        if (squares[idx].classList.contains('virus')){
            return randomPosition()
        }
        else{  
            squares[idx].classList.add('virus', `${this.color}`)
        }
        let x2 = Math.floor(200 + (x * 20))
        let y2 = Math.floor(100 + (y * 20))
        return [x2, y2]
  }

 
  function randomColor() {
    const possibleColors = ['cornflowerblue', 'salmon', 'bisque']  
    color = possibleColors[Math.floor((Math.random() * 3))];
    return color;
  }

module.exports = Virus;