let  eyeX
let  eyeY

let  eyeX2
let  eyeY2

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  eyeX = map(mouseX, 0, 400, 105, 135);
  eyeY= map(mouseY, 0, 400, 155, 185);

  eyeX2 = map(mouseX, 0, 400, 255, 285);
  eyeY2 = map(mouseY, 0, 400, 155, 185);

  //Face
  fill(255);
  stroke(0, 0, 255);
  strokeWeight(5);
  rect(50, 50, 300, 300, 150);

}