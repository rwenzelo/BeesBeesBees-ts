class ForagerBee extends Bee {
  canFly: boolean = true;
  treasureChest: any[] = [];
  constructor() {
    super();
    this.age = 10;
    this.job = 'find pollen';
  }

  forage(treasure): void {
    this.treasureChest.push(treasure);
  }
};