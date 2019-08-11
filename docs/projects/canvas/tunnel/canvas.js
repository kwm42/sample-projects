const canvas = document.querySelector('#canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let ctx = canvas.getContext('2d');
let dotArray = [];
let point = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  lastX: undefined,
  lastY: undefined,
  middleX: canvas.width / 2,
  middleY: canvas.height / 2,
  diffX: 0,
  diffY: 0,
  weight: .1
}

window.addEventListener('mousemove', (e) => {
  // point is symmetry to mouse position
  // c is the scale of distance of mouse and middle and target and middle
  let c = 1;
  point.x = point.middleX - ((e.x - point.middleX) * c);
  point.y = point.middleY - ((e.y - point.middleY) * c);
  point.diffX = (e.x - point.middleX) * point.weight;
  point.diffY = (e.y - point.middleY) * point.weight;
})

function myRandom(start, end){
  return Math.random() * (end - start) + start;
}

setInterval(() => {
  let x = point.x;
  let y = point.y;
  let radius = 1;
  for(var i = 0; i < 10; ++i) {
    dotArray.push(new Dot(x, y, radius, myRandom(0, Math.PI * 2)));
  }
}, 16);

function Dot(x, y, radius, angle){
  // distance from center
  let distance = myRandom(10, 40);
  this.x = x + Math.sin(angle) * distance;
  this.y = y + Math.cos(angle) * distance;
  this.radius = radius;
  this.angle = angle;
  this.speed = myRandom(1.5, 2.5);
  this.a = myRandom(3, 5);
  // loop animate times
  this.loop = 0;

  this.draw = function(){
    ctx.beginPath();
    ctx.fillStyle = 'white';
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.fill();
  }

  this.move = function(){
    // if(this.x > canvas.width || this.x < 0 || this.y > canvas.height || this.y < 0) {
    //   dotArray.splice(dotArray.indexOf(this), 1);
    // }
    if(this.speed > 80) {
      dotArray.splice(dotArray.indexOf(this), 1);
    }
    this.x += Math.sin(this.angle) * this.speed + point.diffX;
    this.y += Math.cos(this.angle) * this.speed + point.diffY;
    this.loop = (++this.loop) % 10;
    if(this.loop === 0) {
      this.speed += this.a;
      this.radius += .25;
    }
    this.draw();
  }
}

function animate(){
  requestAnimationFrame(animate);
  ctx.fillStyle = 'rgba(0, 0, 0, 0.5)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  dotArray.forEach(d => {
    d.move();
  });
  console.log(dotArray.length);
}

animate();