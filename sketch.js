var ball
function setup() {
  createCanvas(400,400);

  ball = createSprite(200,200,20,20)
}

function draw() 
{
  background(30);

  if(keyDown(RIGHT)){
    ball.x = ball.x+5
  }

  if(keyDown(LEFT)){
    ball.x = ball.x-5
  }

  if(keyDown("UP")){
    ball.y = ball.y-5
  }

  if(keyDown("DOWN")){
    ball.y = ball.y+5
  }

  drawSprites()
}




