var bullet,wall,l;
var thickness,speed,weight;

function setup() {
createCanvas(1600,400);


speed=random(223,321);
weight=random(25,30);


bullet= createSprite(500,200,50,50);
wall = createSprite(1200,200,60,100);


bullet.velocityX= 5;


  thickness=random(22,83);
}


function draw() {
  background("black");  

  if(hascollided(bullet))
  {
    bullet.velocityX=0;
    var damage=0.5 * weight * speed * speed/(thickness*thickness*thickness);

    if(damage>10)
    {
     
      wall.shapeColor=color("red");
    }
    if(damage>10 )
    {
      
      wall.shapeColor=color("green");
    }
    
  }

  drawSprites();
 hascollided(bullet);
}

function hascollided(bullet,wall)
{

bulletRightEdge=bullet.x+bullet.width;
wallLeftEdge=wall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true;
}else{return false
}

}
