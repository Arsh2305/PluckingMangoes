class Slingshot{
    constructor(bodyA,pointB){
        var options={
           bodyA:this.bodyA,
            pointB:pointB,
            length:10,
            stiffness:0.04,


        }
       bodyA=this.bodyA
        this.pointB=pointB
        this.sling=Matter.Constraint.create(options)
        World.add(world,sling)
    }
    fly(){
        this.sling.bodyA=null
    }
    attach(body){
        this.launcher.bodyA=body
    }
        display(){
            if(this.sling.bodyA){
            var pointA=this.bodyA.position
            var pointB=this.pointB

        line(pointA.x,pointA.y,pointB.x,pointB.y)
            }
}
}