let [n, screenNum] = [1,0];
let [start, increment] = [30, 30];
const byg = [ 'blue', 'yellow', 'green' ];

function setup() {
  createCanvas(windowWidth, windowHeight);
  let button = createButton('Switch');
  button.position(0,0);
  button.mousePressed(switchScreen);
  noLoop();
}

function switchScreen() {
  screenNum++;
  screenNum %= 2;
  console.log(screenNum + ' = screenNum now.');
  draw(); // since noLoop() is on...
}

function draw() {
  switch (screenNum) {
    case 0:
      draw0();
      break;
    case 1:
      draw1();
      break;
  }
}

function draw1() {
  background(220);
  fill('black');
  textSize(24);
  text('this is draw1 method.', 10, 50);
}

function draw0() {
  background(220);
  fill('black');
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
