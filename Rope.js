class Rope{
    constructor(body1,body2,pointA,pointB){
        this.pointA=pointA;
        this.pointB=pointB;

        var options={
            bodyA:body1,
            bodyB:body2,
            pointB:{x:this.pointA,y:this.pointB}
        }

        this.rope=Matter.Constraint.create(this.pointA,options.bodyB,this.pointB,options.bodyA)
        World.add(world,this.body)
    }
    display(){
        var pointA=this.rope.bodyA.position;
        var pointB=this.rope.bodyB.position;

        push();
        strokeWeight(2);
        stroke(255);
         line(pointA.x,pointA.y,pointB.x,pointB.y);
         pop();
    }
}