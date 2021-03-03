let n = 1;
let [start, increment] = [30, 30];
const byg = [ 'blue', 'yellow', 'green' ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  noLoop();
}

function draw() {
  for (let y = start; y < height; y += increment) {
    for (let x = start; x < width; x += increment) {
      fillSquare(x, y); 
    }
  }
}

// When the user clicks the mouse
function mousePressed() {
  fillSquare(mouseX,mouseY);
  /*
  // Check if mouse is inside the circle
  var d = dist(mouseX, mouseY, 360, 200);
  if (d < 100) {
    // Pick new random color values
    r = random(255);
    g = random(255);
    b = random(255);
  }
  */
}

function fillSquare(x, y) {
  fill(byg[n++ % 3]);
  rect(x - increment, y - increment, increment, increment);
}
