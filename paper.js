class Paper  {

    constructor(x,y,r) {
    
    var options={
        isStatic:false,
        restitution:0.3,
        friction:0.5,
        density:1.2
    
    
    }
    
    this.x=x
    this.y=y
    this.radius=r
    this.image=loadImage("/paperball-master/paper.png")
    this.body=Bodies.circle(this.x, this.y, this.radius , options)
    World.add(world, this.body)
    }
    
    display(){
        var pos=this.body.position
        imageMode(CENTER)
       // ellipse(pos.x,pos.y,this.radius,this.radius)
        image(this.image,this.body.position.x,this.body.position.y-30,this.radius,this.radius)
    }
}