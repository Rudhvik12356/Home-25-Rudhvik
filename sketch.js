const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world;
var scene, tower, ground, cannon, cannonBall, angle, boat;
var sceneImage, towerImage;
var balls = [];
var boats = [];

function preload() {
  sceneImage = loadImage("assets/background.gif");
  towerImage = loadImage("assets/tower.png");
}

function setup() {
  createCanvas(1200, 600);

  engine = Engine.create();
  world = engine.world;

  angleMode(DEGREES);
  angle = 15;

  var options = {
    isStatic: true
  }

  scene = Bodies.rectangle(600, 300, 100, 1, options);
  World.add(world, scene);

  tower = Bodies.rectangle(160, 350, 160, 310, options);
  World.add(world, tower);

  ground = Bodies.rectangle(0, height - 1, width * 2, 1, options);
  World.add(world, ground);

  cannonBall = new CannonBall(180, 110);
  cannon = new Cannon(180, 110, 130, 100, angle);
  boat = new Boat(width - 79, height - 100, 160, 160, -80);
}

function draw() {
  background("black");

  imageMode(CENTER)
  image(sceneImage, scene.position.x, scene.position.y, 1200, 600);

  Engine.update(engine);

  rect(ground.position.x, ground.position.y, width * 2, 1);

  push();
  imageMode(CENTER);
  image(towerImage, tower.position.x, tower.position.y, 160, 310);
  pop();

  Matter.Body.setVelocity(boat.body, {
    x: -0.9,
    y: 0
  })
  boat.show();

  for (var i = 0; i < balls.length; i++) {
    showCannonBalls(balls[i], i);
  }
  cannon.show();
  cannonBall.show();
}

function keyReleased() {
  if (keyCode === 32) {
    balls[balls.length - 1].shoot();
  }
}

function keyPressed() {
  cannonBall = new CannonBall(cannon.x, cannon.y);
  cannonBall.trajectory = [];
  balls.push(cannonBall);
}

function showCannonBalls(ball, i) {
  if (ball) {
    balls[i].show();
  }
}