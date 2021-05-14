class HoneyMakerBee extends Bee {
  honeyPot: number = 0;
  constructor() {
    super();
    this.age = 10;
    this.job = 'make honey'
  }

  makeHoney() {this.honeyPot++}
  giveHoney() {this.honeyPot--}
};