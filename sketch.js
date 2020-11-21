const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;



var base1,base2,base3;
var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16,box17,box18,box19,box20,
box21,box22,box23,box24,box25,box26,box27;






















function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

   ground=new Ground(400,390,800, 20);
   base1=new Ground(300,360,800,20);
   base2=new Ground(340,340,800,20);
   base3=new Ground(380,320,800,20);
   //first pyramid.
   box1=new Box(300,355,20,20);
   box2=new Box(320,355,20,20);
   box3=new Box(340,355,20,20);
   box4=new Box(360,355,20,20);

   box5=new Box(300,350,20,20);
   box6=new Box(325,350,20,20);
   box7=new Box(345,350,20,20);

   box8=new Box(300,345,20,20);
   box9=new Box(320,355,20,20);

   //second pyramid.
   box10=new Box(340,355,20,20);
   box11=new Box(360,355,20,20);
   box12=new Box(380,355,20,20);
   box13=new Box(380,355,20,20);

   box14=new Box(340,350,20,20);
   box15=new Box(365,350,20,20);
   box16=new Box(385,350,20,20);

   box17=new Box(340,345,20,20);
   box18=new Box(360,345,20,20);

   //third pyramid.
   box19=new Box(380,325,20,20);
   box20=new Box(380,325,20,20);
   box21=new Box(380,325,20,20);
   box22=new Box(380,325,20,20);

   box23=new Box(380,325,20,20);
   box24=new Box(385,325,20,20);
   box25=new Box(390,325,20,20);
   
   box26=new Box(380,325,20,20);
   box27=new Box(390,325,20,20);




}

function draw() {
  background(255,255,255);  
  drawSprites();
  ground.display();
  base1.display();
  base2.display();
  base3.display();
}


function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
  setTimeout(function(){
   sling.fly();
  },150);
}

function keyPressed(){
  if(keyCode===32){

    sling.attach(this.polygon);


  }


