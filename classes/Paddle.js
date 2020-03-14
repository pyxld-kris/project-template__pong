import Phaser from "phaser";

export default class Paddle extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x, y, width, height) {
    super(scene, x, y, "paddle");
    this.scene = scene;

    // Add to rendering engine
    scene.add.existing(this);
    // Add to physics engine
    scene.physics.add.existing(this, false); // second parameter is isStatic

    this.setCollideWorldBounds(true);

    this.setMaxVelocity(0, 200);
    this.setDrag(1000);
    this.setBounce(1, 1);

    // Track the arrow keys & OPQA
    const {
      LEFT,
      RIGHT,
      UP,
      DOWN,
      W,
      A,
      S,
      D
    } = Phaser.Input.Keyboard.KeyCodes;
    this.keys = scene.input.keyboard.addKeys({
      left: LEFT,
      right: RIGHT,
      up: UP,
      down: DOWN,
      w: W,
      a: A,
      s: S,
      d: D
    });
  }

  update() {
    const keys = this.keys;

    if (keys.up.isDown || keys.w.isDown) {
      this.setVelocity(0, -300);
    } else if (keys.down.isDown || keys.s.isDown) {
      this.setVelocity(0, 300);
    }

    /*
    const onGround = sprite.body.blocked.down;
    const acceleration = onGround ? 600 : 200;

    // Apply horizontal acceleration when left/a or right/d are applied
    if (keys.left.isDown || keys.o.isDown) {
      sprite.setAccelerationX(-acceleration);
      sprite.setFlipX(true);
    } else if (keys.right.isDown || keys.p.isDown) {
      sprite.setAccelerationX(acceleration);
      sprite.setFlipX(false);
    } else {
      sprite.setAccelerationX(0);
    }

    // Only allow the player to jump if they are on the ground
    if (onGround && (keys.up.isDown || keys.q.isDown)) {
      sprite.setVelocityY(-5000 * 2);
    }

    // Update the animation/texture based on the state of the player
    if (onGround) {
      if (sprite.body.velocity.x !== 0) {
        sprite.anims.play("johnny-walk", true);
      } else {
        sprite.anims.play("johnny-idle", true);
      }
    } else {
      sprite.anims.stop();
      sprite.setTexture("johnny", 4);
    }
    */
  }

  destroy() {
    super.destroy();
  }
}
