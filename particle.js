class Particle{
    constructor(x,y,r){
        var options = {
            isStatic : false,
            restitution : 0.5
        }
        this.r = r;
        this.body = Bodies.circle(x,y,this.r,options);
        this.color = color(random(0,255),random(0,255),random(0,255));
        World.add(world,this.body);

       
    }
    dislplay(){
        var pos = this.body.position;


        push();
        translate(pos.x,pos.y);

        noStroke();
        fill(this.color);
        ellipseMode(RADIUS);
        ellipse(0,0,this.r,this.r);
        Pop();
    }
}