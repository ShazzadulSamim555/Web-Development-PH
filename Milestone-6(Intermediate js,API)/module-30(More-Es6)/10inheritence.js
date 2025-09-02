// 🐾 Base class: Animal
class Animal {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    eat() {
        console.log(`${this.name} is eating`);
    }
}

// 🐶 Dog class extends Animal
class Dog extends Animal {
    constructor(name, bark, age) {
        super(name, age); // Animal class-এর constructor কল করা হচ্ছে
        this.bark = bark;
    }

    sbark() {
        console.log(`${this.name} makes sound: ${this.bark}`);
    }
}

// 🐱 Cat class extends Animal
class Cat extends Animal {
    constructor(name, color, age) {
        super(name, age); // Animal class-এর constructor কল করা হচ্ছে
        this.color = color;
    }

    showAge() {
        console.log(`${this.name} is ${this.age} years old`);
    }

    describe() {
        console.log(`${this.name} is a ${this.color} cat`);
    }
}

// ✅ Creating Dog object
const dog1 = new Dog('Tomi', 'Gew Gew', 4);
console.log(dog1);
dog1.eat();      // Tomi is eating
dog1.sbark();    // Tomi makes sound: Gew Gew

// ✅ Creating Cat object
const cat1 = new Cat('Timu', 'Brown', 2);
console.log(cat1);
cat1.eat();       // Timu is eating
cat1.showAge();   // Timu is 2 years old
cat1.describe();  // Timu is a Brown cat