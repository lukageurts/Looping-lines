let x = 20;
let stap = 20;
let stop = 620;

function setup() {
  createCanvas(700, 150);
  background(240);
}

function draw() {
  
  while (x < stop) {
    if(x == 140 || x == 480) {
      stroke(255, 0, 0);
    } else {
      stroke(0);
    }
    line(x, 60, x, 80);
    x = x + stap;
  }
  x = 20;


}