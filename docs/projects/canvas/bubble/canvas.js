var canvas = document.getElementById('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let ctx = canvas.getContext('2d');

let color = ['rgba(26, 188, 156, .7)', 
             'rgba(46, 204, 113, .7)', 
             'rgba(52, 152, 219, .7)', 
             'rgba(155, 89, 182, .7)', 
             'rgba(52, 73, 94, .7)', 
             'rgba(231, 76, 60, .7)', 
             'rgba(127, 140, 141, .7)', 
             'rgba(243, 156, 18, .7)'];

let mouse = {
  x: undefined,
  y: undefined
}

function Circle(x, y, dx, dy, radius, fillStyle){
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;
  this.fillStyle = fillStyle;

  this.draw = function(){
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.strokeStyle = '2px, rgba(0, 0, 255, 0.4)';
    ctx.stroke();
    ctx.fillStyle = this.fillStyle;
    ctx.fill();
  }

  this.update = function(){
    if(this.x + this.radius > window.innerWidth || this.x + this.radius < 0){
      this.dx = -this.dx;
    }
    if(this.y + this.radius > window.innerHeight || this.y + this.radius < 0){
      this.dy = -this.dy;
    }

    if(this.x < mouse.x + 100 && this.x > mouse.x - 100 &&
       this.y < mouse.y + 100 && this.y > mouse.y - 100){
      if(this.radius <= 80)
        this. radius += 6;
    }
    else{
      this.radius = 10;
    }

    this.x += this.dx;
    this.y += this.dy;
    this.draw();
  }
}

let circleArray = [];
for(var i = 0; i < 400; ++i){
  let x = Math.random() * window.innerWidth;
  let y = Math.random() * window.innerHeight;
  let dx = (Math.random() - 0.5) * 8;
  let dy = (Math.random() - 0.5) * 8;
  let radius = Math.random() * 5 + 5;
  let fillStyle = color[Math.floor(Math.random() * color.length)]
  circleArray.push(new Circle(x, y, dx, dy, radius, fillStyle));
}

function animate(){
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);
  circleArray.forEach((c) => {
    c.update();
  })
}

window.addEventListener('mousemove', function(event){
  mouse.x = event.x;
  mouse.y = event.y;
  console.log(mouse)
})

animate();