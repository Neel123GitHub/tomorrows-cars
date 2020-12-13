var car,wall,speed,weight,deformation;

function setup() {
  createCanvas(1600,400);

  //variables speed and weight
  speed=random(55,90);
  weight=random(400,1500);

  //creating car and wall
  car=createSprite(50, 200, 50, 50);
  car.velocityX=speed;
  wall=createSprite(1500,200,60,height/2);
  wall.shapeColor=color(80,80,80);
  car.shapeColor="blue";


}

function draw() {
  background("black");
  
  //detecting wether the car is touching the wall or not
  if(wall.x-car.x<(car.width+wall.width)/2){
    car.velocityX=0;

    //calculating deformation
 deformation=0.5*weight*speed*speed/22500;
 console.log(deformation);



   if(deformation>180){
     car.shapeColor="red";
   }
   if(deformation<180 && deformation>80){
     car.shapeColor="yellow";
   }
   if(deformation<80){
     car.shapeColor="green";
   }
  }
  drawSprites();
}

