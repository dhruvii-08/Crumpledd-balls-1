class Paper {
    constructor(x, y,radius) {
      var options = {
        isStatic: false,
          'restitution':0.3,
          'friction':0.5,
          'density':8
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);

    }
    display(){
      ellipseMode(CENTER);
      strokeWeight(4);
      stroke("green");
      fill(255);
      ellipse(this.body.position.x,this.body.position.y,this.radius,this.radius);
    }
  };
  