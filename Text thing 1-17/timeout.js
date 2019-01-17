function printRandom() {
   console.log(Math.floor(Math.random() * 10) + 1);
   console.log("HI");
}
let x = 0;
setTimeout(printRandom, 400);


setTimeout(printRandom, 7000);

setInterval(() => console.log("A Second Passed!" + (++x)), 1000);

window.onresize = () => {
   console.log("Window Rechanged!");
};
