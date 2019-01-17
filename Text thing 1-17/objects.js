let c = document.getElementById("canvas");
let ctx = c.getContext('2d');

c.width=window.innerWidth;
c.height=window.innerHeight;

window.oneresize = () => {
  c.width=window.innerWidth;
  c.height=window.innerHeight;
};

class Player{
  constructor(x,y,w,h){
    this.x=x;
    this.y=y;
    this.w=w;
    this.h=h;
}