function setup() {
  createCanvas(940, 642);
}

function draw() {
  background(50);

  // black space in the corner lol
  fill(0)
  ellipse(120, 220, 250, 200)

  // hair layer 1

  strokeWeight(12);
  stroke(0);
  fill(208, 166, 3);
  ellipse(900, 300, 400);
  ellipse(940, 320, 400, 200);
  ellipse(940, 350, 400, 200);
  ellipse(940, 375, 400, 200);
  ellipse(940, 388, 400, 200);

  // hair layer 2
  strokeWeight(25);
  stroke(0);
  fill(208, 166, 3);
  ellipse(30, 390, 400, 300);
  ellipse(130, 400, 300, 300);
  ellipse(500, 550, 1100, 750);
  ellipse(650, 330, 400, 250);
  ellipse(660, 385, 550, 300);
  ellipse(640, 420, 675, 300);
  ellipse(260, 650, 550);
  ellipse(290, 675, 550);
  ellipse(700, 600, 800, 600);
  ellipse(600, 730, 1200, 700);
  ellipse(720, 750, 1150, 700);
  ellipse(720, 750, 950, 600);
  ellipse(740, 740, 900, 550);
  ellipse(780, 740, 900, 550);
  ellipse(815, 740, 900, 550);
  ellipse(845, 740, 900, 550);
  ellipse(875, 740, 900, 550);
  
  // hair layer 3

  noStroke()
  fill(208, 166, 3)
  ellipse(860, 725, 830, 550);
  
  // hair layer 4

  strokeWeight(25);
  stroke(0);
  fill(208, 166, 3);
  ellipse(900, 800, 900, 600);

  // hair layer 5

  strokeWeight(12);
  stroke(0);
  fill(208, 166, 3);
  ellipse(950, 815, 900, 600);
  ellipse(1000, 820, 900, 600);
  ellipse(1000, 825, 700, 600);
  ellipse(1000, 825, 600, 600);

  // red bar
  noStroke();
  angleMode(DEGREES);

  fill(97, 1, 2);
  rect(0, 0, width, 190);
  
  fill(0);
  rect(0, 190, width, 15);

  rotate(-1);
  fill(0);
  rect(0, 170, width, 17);
  rect(0, 100, width, 20)


}