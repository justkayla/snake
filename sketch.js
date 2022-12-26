function windowResized() {
  resizeCanvas(innerWidth, innerHeight);
}

/**
 * TODOs:
 * Manage death at edges (comes back around?)
 * Manage death at reverse (reverse the array?)
 */

let snake;
let scl = 20;

let food;

function setup() {
  createCanvas(innerWidth, innerHeight);
  snake = new Snake();
  frameRate(8);
  pickLocation();
}

function pickLocation() {
  let cols = floor(width / scl);
  let rows = floor(height / scl);

  food = createVector(floor(random(cols)), floor(random(rows)));
  food.mult(scl);
}

function draw() {
  background(20);
  if (snake.eat(food)) {
    pickLocation();
  }
  snake.death();
  snake.update();
  snake.show();

  fill(255, 0, 100);
  rect(food.x, food.y, scl, scl);
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
