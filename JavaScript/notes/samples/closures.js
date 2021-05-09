const outer = (a) => {
    return (b) => b + a;
}

const a1 = outer(5);
a1(2); // 7

const a2 = outer(3);
a2(1); // 4

// Currying
outer(2)(1) //3

// Fake fetch function
const fakeFetch = (url, succeeds) => {
    if (succeeds) {
        return Promise.resolve({
            json: () => {
                return { data: 1 }
            }
        });
    } else {
        throw new Error('Fake error');
    }
}

// Promises
const getData = () => {
    return new Promise((resolve, reject) => {
        fakeFetch('fakeurl', true)
            .then(res => {
                resolve(res.json())
            })
            .catch(err => {
                reject(err)
            })
    });
}

// Invocation
getData().then(data => {
    console.log(data)
}).catch(err => {
    console.log(err)
});

// Async Await wrapper 
const asyncGetData = async () => {
    try {
        const data = await fakeFetch('fakeUrl', true);
        return data.json();
    } catch (err) {
        console.log(err);
        return null;
    }
}

// Invocation
(async () => {
    const data = await asyncGetData();
    console.log(data);
})();

// new class
class Car {
    make = '';
    model = '';
    year = '';

    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    printCar = () => {
        console.log(`${this.make} - ${this.model} - ${this.year}`);
    }
}

const car = new Car('Honda', 'Civic', 2020);
car.printCar();

// old class
function CarClass(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;

    this.printCar = () => {
        console.log(`${this.make} - ${this.model} - ${this.year}`);
    }
}

const car2 = new CarClass('Honda', 'Civic', 2020);
car2.printCar();

// object prototype

let object1 = function () {
    console.log('Base class')
}
object1.testFunction = () => console.log('bye!');
object1.prototype.printSomething = function () { console.log('hello!') };

const obj2 = new object1;
// obj2.testFunction(); // testFunction is not a function
obj2.printSomething(); // hello


const testRecursion = () => {
    let counter = 0;

    const recursion = (counter) => {
        while (counter < 5) {
            console.log("I'm about to go again!", counter);
            return recursion(counter + 1);
        }
        return;
    }

    recursion(counter);
}
testRecursion();