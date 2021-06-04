class RetiredForagerBee extends ForagerBee{
    age: number = 40;
    job: string = 'gamble';
    canFly: boolean = false;
    color:  string = 'grey';

    forage() {
        return 'I am too old, let me play cards instead';
    }
    gamble() {
        this.treasureChest.push ('treasure');
    }
};