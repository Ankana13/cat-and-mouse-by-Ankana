var bg,bg_Img;
var cat,cat_Img;
var mouse,mouse_Img;
var mouse1,mouse1_Img;
var cat1,cat1_Img;
function preload(){
  bg_Img = loadImage("garden.png");
  cat_Img = loadImage("cat1.png");
  mouse_Img = loadImage("mouse4.png");
  cat1_Img = loadImage("cat4.png");
  mouse1_Img = loadImage("mouse1.png");
}
function setup() {
  createCanvas(400, 400);
  
  bg = createSprite(240,200);
   bg.addImage(bg_Img);
  bg.scale = 0.6;
  
  cat = createSprite(300,300);
  cat.addImage(cat_Img);
  cat.scale = 0.1;
  
  mouse = createSprite(25,300);
  mouse.addImage(mouse_Img);
  mouse.scale = 0.1;
}

function draw() {
  background(220);
  mouse.x = World.mouseX;
  
  if (mouse.isTouching(cat)){
 mouse.addImage(mouse1_Img);
     cat.addImage(cat1_Img);
  }
  drawSprites();
}