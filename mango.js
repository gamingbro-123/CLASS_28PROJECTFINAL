class Mango
{
  constructor(xpos,ypos,radius)
  {
      var options={
          isStatic:true,
          restitution:0,
          friction:1,
      }


        // this.body = Bodies.circle(xpos,ypos,radius);

        this.image = loadImage("mango.png");

        this.radius = radius;

        // this.body.position.x = position.x;
        // this.body.position.y = position.y;
        


        // World.add(world,this.body);
                  
      }

      display()
      {
        push();
        imageMode(CENTER);

        // image(this.image,this.body.position.x,this.body.position.y,radius,radius);
        // image(this.image,100,200,50,50);
        image(this.image,this.body.position.x,this.body.position.y,radius,radius);
        pop();

      }
    }
