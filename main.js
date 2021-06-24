class Plane {
    constructor(name, maxSpeed) {
        this.name = name;
        this.maxSpeed = maxSpeed;
        this.status = 'На земле'
    }
    takeoff() {
        console.log('Взлетает ' + this.name);
        this.status = 'В воздухе';
        console.log(this.status);
    }
    landing() {
        console.log('Посадка ' + this.name);
        this.status = 'На земле';
        console.log(this.status);
    }
}
class MIG extends Plane {
    attack() {
        console.log('attack!!');
    }
}

let dan = new Plane('ТУ-154');
let mig = new MIG('МИГ')

dan.takeoff()
dan.landing()
mig.attack()