class Car {
    model: String;
    doors: Number;
    isElectric: Boolean;
    constructor(model: String, doors: Number, isElectric: Boolean) {
        this.model = model;
        this.doors = doors;
        this.isElectric = isElectric;
    }
    displayMake(): void {
        console.log(`This car is ${this.model}`);
    }
}
