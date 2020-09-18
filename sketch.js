var wall
var thickness;
var bullet;
var speed;
var weight;
var lbullet;
var lwall;
var bulletRightEdge;
var wallLeftEdge;


function setup() {
  createCanvas(1600,100);
  
  thickness=random(22,83);
  speed=random(1,10);
  weight=random(30,52);

  bullet=createSprite(200,200,50,50);
  //bullet.velocityX = speed;

  wall = createSprite(1200,200,thickness,height/2);


}

function draw() {
  background(255,255,255);  
  
if(hasCollided(bullet,wall))
{

   bullet.velocityX = 0;
   var damage=0.5 * speed* speed/(thickness * thickness *thickness);

   if(damage>10)
   {
     wall.shapeColor=color(255,0,0);
   }
    if(damage<10)
    {
      wall.shapeColor=color(0,255,0);
    }

}

  drawSprites();
  
}

function hasCollided(lbullet,lwall)
{   
      //console.log(lbullet)
      bulletRightEdge= lbullet.x + lbullet.width;
      wallLeftEdge = lwall.x;
      if(bulletRightEdge>=wallLeftEdge)
      {  console.log("hi");
        return true;
      }
      console.log("hey");
      return false;
    
    
}

















