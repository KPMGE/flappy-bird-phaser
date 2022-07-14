import "phaser";

import { Start } from './scenes/start'
import { Title } from './scenes/title'
import { Preload } from './scenes/preload'

const config = {
  type: Phaser.AUTO,
  width: 288,
  height: 512,
  pixelart: true,
  backgroundColor: '#000000',
  scene: [Start, Preload, Title],
  physics: {
    default: 'arcade',
    arcade: {
      // gravity: {
      //   y: 1000
      // },
      debug: false
    }
  },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    min: {
      width: 288,
      height: 512
    },
    max: {
      width: 1152,
      height: 2048
    }
  }
};

export class FlappyBirdGame extends Phaser.Game {
  constructor(config) {
    super(config);
  }
};

window.onload = () => {
  var game = new FlappyBirdGame(config);
};
