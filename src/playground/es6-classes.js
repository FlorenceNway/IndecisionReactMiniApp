class Person {
    constructor(name='Anonymous') {
        this.name = name;
    }

    getGreting(){
        return `Hi. I am ${this.name}.`;
    }
    getDescription() {
        return `${this.name} is 18 years old.`;
    }
}

class Student extends Person {
    constructor(name, major) {
        super(name);
        this.major = major;
    }
    hasMajor() {
        return !!this.major; //true
    }
    getDescription() {
        let despt = super.getDescription();
        if (this.hasMajor()) {
            despt += ` His major is ${this.major}`
        }
        return despt;
    }
}

class Traveller extends Person {
    constructor(name,homeLocation){
        super(name);
        this.homeLocation = homeLocation;
    }
    locate() {
        return !!this.homeLocation;
    }

    getGreting() {
        let greet = super.getGreting();
        if(this.locate()) {
            greet += `I am visiting from ${this.homeLocation}`;
        }
        return greet;
    }
}

const me = new Student('Kim','Business Administration');
const visitor = new Traveller('Florence', 'Yangon')
const other = new Traveller('Florence')

console.log(visitor.getGreting());
console.log(me.getDescription());
console.log(other.getGreting());