var mainPlayer;
var ground;

var mainImg, walkingFr;

function preload(){

  mainImg = loadImage('images/Mainpose.png');
  walkingFr = loadAnimation("images/running/1.png", "images/running/2.png", "images/running/3.png");
}

function setup() {
  createCanvas(displayWidth,displayHeight-110);

  mainPlayer = createSprite(400, 200, 50, 50);
  ground = createSprite(700,600, 1500, 50);

  
}

function draw() {
  background(255,255,255);

  mainPlayer.addAnimation("running", walkingFr);
  mainPlayer.collide(ground);
  mainPlayer.y = mainPlayer.y + 10;

  drawSprites();
}