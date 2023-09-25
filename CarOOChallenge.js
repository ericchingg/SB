// Part One
class Vehicle {
  constructor(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }

  honk() {
    return 'Beep';
  }

  toString() {
    return `The vehicle is a ${this.make, this.model} from ${this.year}.`
  }
}

// Part Two
class Car extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 4;
  }
}

// Part Three
class Motocycle extends Vehicle {
  constructor(make, model, year) {
    super(make, model, year);
    this.numWheels = 2;
  }
  
  revEngine() {
    return 'VROOM!!!'
  }
}

// Part Four
class Garage {
  constructor (a) {
    this.capcity = a;
    this.vehicles = [];
  }

  add(newVehicle) {
    if (!(newVehicle instanceof Vehicle)) {
      return 'Only vehicle are allowed in here!';
    }
    if (this.vehicles.length >= this.capcity) {
      return "Sorry, we're full";
    }
    this.vehicles.push(newVehicle);
    return 'Vehicle added!'
  }
}