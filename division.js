class Division{
constructor(x, y, width, height) {
    var options = {
       'isStatic' : true,
       'restitution':0.8,
       'friction':1.0,
       'density':1.0
    }
     this.body = Bodies.rectangle(x, y, width, height, options);
     this.width = width;
     this.height = height;
 
     World.add(world, this.body);
  }
  display(){
     strokeWeight(2);
     stroke("white");
     fill("white");

     rectMode(CENTER);
     rect(this.body.position.x,this.body.position.y,this.width,this.height);
           
     push();
     translate(this.body.position.x, this.body.position.y);
     pop();
    }     
    
 }