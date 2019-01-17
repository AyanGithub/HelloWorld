function printRandom() {
   console.log(Math.floor(Math.random() * 10) + 1);
}

setTimeout(printRandom, 7000);

setInterval(() => console.log("A Second Passed!"), 1000);

window.onresize = () => {
   console.log("Window Size Changed!");
};
