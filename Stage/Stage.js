import {
  Stage as StageBase,
  Trigger,
  Watcher,
  Costume,
  Color,
  Sound
} from "https://unpkg.com/leopard@^1/dist/index.esm.js";

export default class Stage extends StageBase {
  constructor(...args) {
    super(...args);

    this.costumes = [
      new Costume("BackGround", "./Stage/costumes/BackGround.svg", {
        x: 240,
        y: 180
      })
    ];

    this.sounds = [];

    this.triggers = [
      new Trigger(Trigger.GREEN_FLAG, this.whenGreenFlagClicked)
    ];

    this.vars.step = 23;
    this.vars.yTop = 160;
    this.vars.gameOn = 1;
    this.vars.Highscore = 51194;
    this.vars.timer = 23.98;
    this.vars.topY = 0;
    this.vars.step2 = 0;

    this.watchers.Highscore = new Watcher({
      label: "☁ HighScore",
      style: "large",
      visible: true,
      value: () => this.vars.Highscore,
      x: 272,
      y: 54
    });
  }

  *whenGreenFlagClicked() {
    while (true) {
      if (this.vars.gameOn == 1) {
        yield* this.playSoundUntilDone("tetris music");
        this.costume = "Get Ready!";
      } else {
        null;
      }
      yield;
    }
  }
}
