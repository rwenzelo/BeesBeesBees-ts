class HoneyMakerBee extends Bee {
    age: number = 10;
    job: string = 'make honey';
    honeyPot: number = 0;

    makeHoney() {
        this.honeyPot ++;
    }

    giveHoney() {
        this.honeyPot --;    
    }

 };