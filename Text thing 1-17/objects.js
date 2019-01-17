let c = document.getElementById("canvas");
let ctx = c.getContext('2d');

c.width = window.innerWidth;
c.height = window.innerHeight;

window.onresize = () => {
   c.width = window.innerWidth;
   c.height = window.innerHeight;
};

class Player {
   constructor(x, y, w, h) {
       this.x = x;
       this.y = y;
       this.w = w;
       this.h = h;
   }

   update(pixels) {
       this.move(pixels);
       this.draw();
   }

   move(pixels) {
       this.x += pixels;
   }

   draw() {
       ctx.fillRect(this.x, this.y, this.w, this.h);
   }
}

let peoples = [new Player(10, 10, 100, 100), new Player(400, 400, 100, 300)];

function animate() {
   ctx.clearRect(0, 0, c.width, c.height);
   for (let player of peoples)
       player.update(3);
}

setInterval(animate, 10);