class Plinko{
    constructor(x,y,r){
        var options = {
            isstatic : true,
            
        }
        this.radius = r;
        this.body = Bodies.circle(x,y,this.radius,options);
        World.add(world,this.body);

       
    }
    dislplay(){
        var pos = this.body.position;

        push();
        translate(pos.x,pos.y);

        fill("white");
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        Pop();
    }
}