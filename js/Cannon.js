class Cannon {
  constructor(x, y, w, h, a) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.a = a;

    var cannon_options = {
      isStatic: true
    }

    this.body = Bodies.rectangle(x, y, w, h, cannon_options);
    this.cannonImage = loadImage("assets/cannon.png");
    this.cannonBaseImage = loadImage("assets/cannonBase.png");
    World.add(world, this.body);
  }
  show() {

    if (keyIsDown(RIGHT_ARROW) && this.a < 62) {
      this.a += 1;
    }

    if (keyIsDown(LEFT_ARROW) && this.a > -36) {
      this.a -= 1;
    }

    //console.log(this.a);

    var pos = this.body.position;
    push();
    translate(pos.x, pos.y);
    rotate(this.a);
    imageMode(CENTER);
    image(this.cannonImage, 0, 0, this.w, this.h);
    pop();

    image(this.cannonBaseImage, 160, 120, 200, 200);

  }
}