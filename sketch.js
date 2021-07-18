// variables for spacecrafts.
var spacecraft1,spacecraft2,spacecraft3,spacecraftimg4,spacecraftimg1,spacecraftimg2,spacecraftimg3,spacecraftimg4;

// variables for background image.
var space,spaceimg;

// variables for iss image.
var iss,issimg;

var hasDocked;
hasDocked = false;

// function for loading the images.
function preload(){

// loading the background image.
  spaceimg = loadImage("spacebg.jpg");

// loading the spacecraft images.
  spacecraftimg1 = loadImage("spacecraft1.png");
  spacecraftimg2 = loadImage("spacecraft2.png");
  spacecraftimg3 = loadImage("spacecraft3.png");
  spacecraftimg4 = loadImage("spacecraft4.png");

// loading the iss image.
  issimg = loadImage("iss.png");

}

function setup() {
  
// creating the canvas.
  createCanvas(800,400);

// creating the sprite of spacecraft
  spacecraft1 = createSprite(400,350,20,20)
  spacecraft1.addImage(spacecraftimg1)
  spacecraft1.scale = 0.3;

// creating the sprite of iss .
  iss = createSprite(400,200,10,10);
  iss.addImage(issimg);
  iss.scale = 1;

 
  

}

function draw() {
  
// adding the background image.
  background(spaceimg);  
 
  drawSprites();
  keyPressed();

  if(spacecraft1.y <= (iss.y+130) && spacecraft1.x <= (iss.x-10)){
   hasDocked = true;
   fill("white");
   textSize(20);
   text("DOCKING SUCCESSFUL !!",500,200);
  

  
  }

}

function keyPressed(){
  if(keyDown(UP_ARROW)){
    
    spacecraft1.y  = spacecraft1.y-10
  }

  if(keyDown(DOWN_ARROW)){
    spacecraft1.addImage(spacecraftimg2)
    spacecraft1.y  = spacecraft1.y+10
    
  }
  if(keyDown(RIGHT_ARROW)){
    spacecraft1.addImage(spacecraftimg4)
    spacecraft1.x  = spacecraft1.x+10
  }
  if(keyDown(LEFT_ARROW)){
    spacecraft1.addImage(spacecraftimg3)
    spacecraft1.x  = spacecraft1.x-10
  }
}