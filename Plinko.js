class Plinko {
    constructor(x,y) {
      var options = {
          isStatic: true,
          friction:0
      }

      this.body = Bodies.circle(x,y, 10,options);
      this.radius = 10;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      push();
      translate(pos.x,pos.y);
     // noStroke();
      ellipseMode(RADIUS);
      fill("black");
      ellipse(0, 0, this.radius, this.radius);
      pop();
    }
  }