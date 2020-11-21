class Polygon{
    constructor(){

        var  options={
            isStatic:false,
           restitution:0.3,
           friction:0.5,
           density:1.2
       }
   
       polygon=Matter.Bodies.circle(x,y,20,options);
       World.add(world,polygon);
       this.img=loadImage("sprites/paperimage.png");
       slingShot=new slingShot(this.polygon,{x:100,y:200});
   
   }
   
    display(){
        var pos=this.body.position;
        push ();
        imageMode(CENTER);
        fill("pink");
        image(polygon.img,pos.x,pos.y,40,40);
    }
   
   
    
}