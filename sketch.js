var BG;
var snowFlakes1;
var snowFlakes2;
var select_snowFlake;

function setup() {
  createCanvas(800,400);
}

function preload() {
  BG = loadImage ("snow1.jpg");
  snow1 = loadImage ("snow4.webp");
  snow2 = loadImage ("snow5.webp");
}

function draw() {
  background(BG);

  var select_snowFlake = Math.round(random(1, 2));

  if (World.frameCount % 100 == 0) {
    if (select_snowFlake == 1) {
      snowFlakes();
    } else {
      snowFlake();
    }
  }

  drawSprites();
}

function snowFlakes() {
  snowFlakes1 = createSprite( Math.round(random(20, 800)), 2, 10, 15);
  snowFlakes1.addImage(snow1);
  snowFlakes1.scale = 0.2;
  snowFlakes1.lifeTime = 300;
  snowFlakes1.velocityY = 2;
}

function snowFlake() {
  snowFlakes2 = createSprite( Math.round(random(20, 800)), 2, 10, 15);
  snowFlakes2.addImage(snow2);
  snowFlakes2.scale = 0.2;
  snowFlakes2.lifeTime = 300;
  snowFlakes2.velocityY = 2;
}
