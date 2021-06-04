class ForagerBee extends Bee{
    age: number = 10;
    job: string = 'find pollen';
    canFly: boolean = true;
    treasureChest: Array<string> = [];

    forage() {
        this.treasureChest.push ('treasure');
    }
};