const canvas = document.querySelector('#canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

ctx.fillStyle = '#65aab7';
ctx.fillRect(0, 0, canvas.width, canvas.height);

// var img = new Image();
// img.onload = function () {
//     ctx.drawImage(img, 0, 0);
// }
// img.src = 'img.png';
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, 5, 5);
console.log(ctx.getImageData(0, 0, 10, 10));