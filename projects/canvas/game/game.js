var canvas = document.getElementById('canvas')
let ctx = canvas.getContext('2d')
var myGamePiece;

window.onload = function(){
  myGamePiece = new component(30, 30, "red", 10, 120);
  addController();
}

class component{
  constructor(width, height, color, x, y){
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.stepX = 10;
    this.stepY = 10;
    ctx = ctx;
    ctx.fillStyle = color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
  
  up(){
    this.y += this.stepY;
  }
  left(){
    this.x -= this.stepX;
  }
  right(){
    this.x += this.stepX;
  }
  down(){
    this.y -= this.stepY;
  }
}

function addController(){
  let upBtn = document.getElementsByClassName('btn-up')[0];
  let leftBtn = document.getElementsByClassName('btn-left')[0];
  let rightBtn = document.getElementsByClassName('btn-right')[0];
  let downBtn = document.getElementsByClassName('btn-down')[0];
  upBtn.addEventListener('click', () => {
    myGamePiece.up()
  });
  leftBtn.addEventListener('click', () => {
    myGamePiece.left()
  });
  rightBtn.addEventListener('click', () => {
    myGamePiece.right()
  });
  downBtn.addEventListener('click', () => {
    myGamePiece.down()
  });
}