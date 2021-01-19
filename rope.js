class rope{
    contructor(bodyA,pointB)
    {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:1,
            angularStiffness:1,
            length:220
        }
        this.pointB=pointB
        this.pointX=bodyA.x;
        this.pointB=bodyA.y-250;

        this.sling=Constraint.create(options);
        World.add(world,this.sling)
    }
    display(){
        if(this.sling.bodyA){
            var pointA=this.sling.bodyA.position;
            var pointB=this.pointB;
            push();
            strokeWeight(3.5);
            stroke("#fff");
            line(pointB.y,pointB.x,pointA.x,pointB.y)
            pop();
        }
    }
}