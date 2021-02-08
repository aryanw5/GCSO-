var car, wall
var speed, weight

function setup() {
  createCanvas(800,200);

  car = createSprite(100,100,30,30);
  car.velocityX = random(55,74);
  car.shapeColor = "white";

  wall = createSprite(730,100,50,70);



}

function draw() {
  background(0,0,0);  

  speed = random(55,90);
  weight = random(400,1050);

  if(wall.x - car.x < (car.width + wall.width)/2) {
    car.velocityX = 0;
    var deformation = 0.5 * weight * speed * speed/22500;

    if(deformation < 100) {
      car.shapeColor = color(0,255,0);
    }

    if(deformation < 180 && deformation > 100) {
      car.shapeColor = color(230,230,0);
    }

    if(deformation > 180) {
      car.shapeColor = color(255,0,0);
    }
  }
  wall.bounce(car);
  drawSprites();
}