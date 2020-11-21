class Box{
  constructor(x,y,w,h){
      var options ={
          restitution:0.5
      }
      this.body=Bodies.rectangle(x,y,w,h,options);
      this.visiblity=255;
      World.add(myWorld,this.body);
      this.width=w;
      this.height=h;
  }
  display(){
    if(this.body.speed<3){
      var pos=this.body.position;
      var angle=this.body.angle;
      push();
      translate(pos.x,pos.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0,this.width,this.height);
     pop();
    }
    else{
        World.remove(world,this.body);
    
    tint (255,this.visiblity);
      this.visiblity=this.visiblity-5;

      noTint();
    }
  }