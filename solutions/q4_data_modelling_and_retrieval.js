// Create a list of fruits with their properties (name, color, pricePerKg)
// and convert it into a format so that for a given fruit name
// retrieval of its color and pricePerKg value is fast


// Write your code here
const fruits = [
    { name: 'Papaya', color: 'Orange', pricePerKg: '20' },
    { name: 'Water Melon', color: 'Green', pricePerKg: '40' },
    { name: 'Orange', color: 'Orange', pricePerKg: '30' },
    { name: 'Banana', color: 'Yellow', pricePerKg: '35' },
    { name: 'Guava', color: 'Green', pricePerKg: '45' },
    { name: 'Custard Apple', color: 'Green', pricePerKg: '50' },
    { name: 'Musk Melon', color: 'Light Yellow', pricePerKg: '25' }
];

class Fruit {
    constructor(name, color, pricePerKg) {
        this.name = name;
        this.color = color;
        this.pricePerKg = pricePerKg;
    }
    getColorAndPrice() {
        return { color: this.color, pricePerKg: this.pricePerKg };
    }
}

const fruitsList = [];
for (let i = 0; i < fruits.length; i = i + 1) {
    fruitsList.push(new Fruit(fruits[i].name, fruits[i].color, fruits[i].pricePerKg));
}

function getFruitDetails(fruitName) {
    let fruitWithGivenName = null;
    if (fruitName) {
        fruitWithGivenName = fruitsList.filter(fruit => {
            return fruit.name.toLowerCase() === fruitName.toLowerCase();
        });
        if (fruitWithGivenName && fruitWithGivenName.length > 0) {
            return fruitWithGivenName[0].getColorAndPrice();
        }
        return fruitWithGivenName;
    }
    return fruitWithGivenName;
}

console.log('Get Orange color and Price:: ', getFruitDetails('guava'));

