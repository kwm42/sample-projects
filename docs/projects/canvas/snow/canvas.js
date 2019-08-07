var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let gravity = 9.8 / 10;

let snowArray = [];
let starArray = [];

setInterval(function(){
  if(myRandom(0, 100) > 30){
    return;
  } 
  let x = Math.random() * canvas.width;
  let dx = myRandom(0, 10);
  let radius = myRandom(10, 20);
  snowArray.push(new Snow(x, 10, dx, gravity, radius));
}, 500);

function myRandom(start, end){
  return Math.random() * (end - start) + start;
}

function Snow(x, y, dx, a, radius, v = 0){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.a = a;
  this.radius = radius;
  this.t = 0;
  this.v = v;

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = 'white';
    ctx.lineWidth = 3;
    ctx.fillStyle = 'white';
    ctx.stroke();
    // ctx.fill();
  }

  this.update = function(){
    if(this.y + a * this.t > canvas.height){
      this.divide();
      this.v = -this.v / 3 * 2;
      this.t = 0;
    }
    this.y += this.v;
    this.v += a;
    this.x += dx;
    ++this.t;
    this.draw();
  }

  this.divide = function(){
    let v = -this.v / 3 * 2;
    if(this.radius > 1){
      let randomSize = Math.floor(myRandom(2, 5));
      for(var i = 0; i < randomSize; ++i){
        let carry = Math.random() - 0.5 >= 0 ? 1 : -1;
        let weight = myRandom(0.7, 1.0);
        snowArray.push(new Snow(this.x, this.y, this.dx * carry * weight, this.a, this.radius / 2, v * weight));
      }
    }
    snowArray.splice(snowArray.indexOf(this), 1);
  }
}

function drawStar(){
  
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  snowArray.forEach((c) => {
    c.update();
  })
}

animate();