
class Box extends BaseClass {
  constructor(x, y){
    super(x,y,70,70);
    this.image = loadImage("ice cube.jpg");
    this.visibility = 255
  }
display(){
  console.log(this.body.speed)
  if(this.body.speed<5){
    super.display();
  }
  else{

    World.remove(world,this.body)
    push ()
    this.visibility = this.visibility-5;

    tint (255,this.visibility)
    image (this.image,this.body.position.x,this.body.position.y,70,70)
    pop ()
  }
}

score(){
  if(this.visibility<=0&&this.visibility>=-4){
    score = score+1
  }
}


};