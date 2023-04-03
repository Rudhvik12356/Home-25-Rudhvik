class Boat {
  constructor(x, y, width, height, boatPos) {

    var options = {
      isStatic:true
    }

    this.body = Bodies.rectangle(x, y, this.w, this.h, options);
    this.width = width;
    this.height = height;

    this.image = loadImage("./assets/boat.png");
    this.boatPosition = boatPos;
    World.add(world, this.body);
  }
  show() {
    var pos = this.body.position;
    var angle = this.body.angle

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image, 0, this.boatPosition, this.width, this.height);
    pop();
  }
}