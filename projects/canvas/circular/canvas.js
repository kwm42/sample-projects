var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let mouse = {
  x: canvas.width/2,
  y: canvas.height/2
}

let lastPoint = {
  x: canvas.width/2,
  y: canvas.height/2
}

function myRandom(start, end){
  return Math.random() * (end - start) + start;
}

let colorArray = [
  '#123456',
  '#8c5e44',
  '#1a5cbb',
  '#34cc0a'
]

let dotArray = [];
for(var i = 0; i < 30; ++i){
  let radius = myRandom(1, 3);
  let radians = myRandom(0, Math.PI * 2);
  dotArray.push(new Dot(canvas.width/2, canvas.height/2, radius, radians, colorArray[i % colorArray.length]));
}

function Dot(x, y, radius, radians, color, speed){
  this.x = x;
  this.y = y;
  this.radius = radius;
  this.radians = radians;
  this.color = color;
  this.distance = myRandom(80, 150);
  this.speed = myRandom(0.02, 0.03);
  let prePos = {
    x: this.x,
    y: this.y
  }

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    // ctx.lineWidth = radius * 2;
    // ctx.stroke();
    ctx.fillStyle = this.color;
    ctx.fill();
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(prePos.x, prePos.y);
    ctx.closePath();
  }

  this.update = function(){
    prePos.x = this.x;
    prePos.y = this.y;
    this.x = lastPoint.x + Math.cos(this.radians) * this.distance;
    this.y = lastPoint.y + Math.sin(this.radians) * this.distance;
    this.radians += this.speed;
    this.draw();
  }
}

function animate(){
  requestAnimationFrame(animate);
  lastPoint.x = lastPoint.x + (mouse.x - lastPoint.x) * 0.05;
  lastPoint.y = lastPoint.y + (mouse.y - lastPoint.y) * 0.05;
  ctx.fillStyle = 'rgba(255, 255, 255, 0.03)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  dotArray.forEach((d) => {
    d.update();
  })
}

window.addEventListener('mousemove', (event) => {
  mouse.x = event.x;
  mouse.y = event.y;
})

animate();
