import Phaser from "phaser";

import Ball from "../classes/Ball.js";
import Paddle from "../classes/Paddle.js";

export default class PlayScene extends Phaser.Scene {
  constructor() {
    super("PlayScene");
  }

  create() {
    // Start UIScene, which will layer on top of PlayScene
    this.scene.run("UIScene");

    const camera = this.cameras.main;
    const cursors = this.input.keyboard.createCursorKeys();
    camera.setBounds(0, 0, this.game.config.width, this.game.config.height);

    // Create background
    this.background = this.add.sprite(0, 0, "background").setOrigin(0, 0);

    this.ball = new Ball(this, 40, 40);
    this.ball.setCollideWorldBounds(true);

    // Left paddle
    this.leftPaddle = new Paddle(this, 30, this.game.config.height / 2, 10, 40);
    //this.physics.add.collider(this.ball, this.leftPaddle);

    // Right paddle
    this.rightPaddle = new Paddle(
      this,
      this.game.config.width - 30,
      this.game.config.height / 2,
      10,
      40
    );
    //this.physics.add.collider(this.ball, this.rightPaddle);

    this.physics.add.collider([this.leftPaddle, this.rightPaddle], this.ball);
    /*
    this.add
      .text(0, 0, "Arrow keys to move paddles!", {
        font: "32px monospace",
        fill: "#ffffff",
        padding: { x: 1, y: 1 },
        backgroundColor: "#000000"
      })
      .setScrollFactor(0);
      */
  }

  update(time, delta) {
    this.ball.update(time, delta);
    this.leftPaddle.update(time, delta);
    this.rightPaddle.update(time, delta);
  }
}
