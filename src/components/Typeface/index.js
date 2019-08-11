import React, { Component } from 'react';
import style from './index.module.scss';
import { random } from '../../utils/randomUtil';

const starArray = [];

var mindCenter = {
  x: undefined,
  y: undefined,
  radius: undefined
}

export default class Typeface extends Component {
  constructor() {
    super();
    this.state = {
      ctx: undefined
    }
  }
  render() {
    return (
      <div className={style.typeface} ref="typeface" >
        <canvas ref="canvas"></canvas>
      </div>
    )
  }
  componentDidMount() {
    const APPBAR_HEIGHT = 64;
    let typeface = this.refs.typeface;
    // var canvas = document.createElement('canvas');
    let canvas = this.refs.canvas;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight - APPBAR_HEIGHT;
    this.generateStar();
    mindCenter.x = canvas.width / 2;
    mindCenter.y = canvas.height + (2.7 / 5 * canvas.width)
    mindCenter.radius = canvas.width * 4 / 5;
    this.setState({
      ctx: canvas.getContext('2d')
    }, () => {
      this.animate(this);
    })
  }
  animate(that) {
    const { ctx } = this.state;
    const canvas = this.refs.canvas
    requestAnimationFrame(function () {
      ctx.beginPath();
      var grd = ctx.createRadialGradient(
        canvas.width / 2, canvas.height - 10, canvas.height / 2, 
        canvas.width / 2, canvas.height - 10, canvas.height);
      grd.addColorStop(0, "#130f40");
      grd.addColorStop(1, "#1e272e");

      // 填充渐变
      ctx.fillStyle = grd;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.arc(mindCenter.x, mindCenter.y, mindCenter.radius, 0, Math.PI * 2);
      ctx.fillStyle = 'rgba(44, 44, 84,1.0)';
      ctx.fill();

      // draw star
      let { x, y } = mindCenter;
      starArray.forEach((star, index) => {
        ctx.beginPath();
        ctx.arc(
          x + Math.cos(star.angle) * star.radius,
          y - Math.sin(star.angle) * star.radius,
          star.size,
          0,
          Math.PI * 2,
          false);
          ctx.fillStyle = 'rgba(254, 211, 48,1.0)';
          ctx.fill();
          ctx.closePath();
          star.angle += star.speed;
      });
      ctx.closePath();
      that.animate(that);
    });
  }

  generateStar() {
    let canvas = this.refs.canvas;
    let r = 4 / 5 * canvas.width;
    for(var i = 0; i < 500; ++i) {
      starArray.push({
        radius: random(r, r + canvas.height),
        // sin(angle) = 3/5 => sin(1/5 PI) = 0.58
        // angle: random(Math.PI * 1 / 5, Math.PI * 4 / 5),
        angle: random(0, Math.PI * 2),
        size: random(1, 2),
        speed: random(1, 2) / 3000
      })
    }
  }
}
