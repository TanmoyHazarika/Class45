class Bodyguard{
    constructor(x,y,width,height){
       
        var options = {
            isStatic : false
    
        }
        bodyguardImage = loadAnimation("Animation/Man1.png","Animation/Man2.png","Animation/Man3.png","Animation/Man4.png","Animation/Man5.png","Animation/Man6.png")
       this.body = Bodies.rectangle(x,y,width,height,options)
       World.add(world,this.image)
    }
     display(){
         var pos = this.image.position
         imageMode(CENTER)
         image(bodyguardImage,pos.x,pos.y,this.width,this.height)
         
     }
    }
     