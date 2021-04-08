function setup() {
  createCanvas(800,400);
wall =createSprite(200, 200, 50, 80);
wall.shapeColor="Purple";
car= createSprite(400,200,80,50)
car.shapeColor="Purple";
car.velocityX=5
wall.velocityY=-2
}
function draw() {
  background(255,255,255);  
  car.x=World.mouseX;
  car.y=World.mouseY;
  if(isTouching(car,wall)){
    car.shapeColor="red"
    wall.shapeColor="red"
      }
      else{
        car.shapeColor="purple"
        wall.shapeColor="purple"
      }
  drawSprites();
}

