class Vehicle {
  start() {
    console.log("start");
  }
  stop() {
    console.log("stop");
  }
}

class Car extends Vehicle {
  turnOnWipers() {
    console.log("eu-eu");
  }
  brake() {
    console.log("brake");
  }
}

class Bike extends Vehicle {
  goFast() {
    console.log("vrum-vrum");
  }
  nextGear() {
    console.log("click-click");
  }
}

class Truck extends Car {
  loadСargo() {
    console.log("Loading cargo");
  }
  start() {
    super.start();
    console.log("speed 80");
  }
  stop() {
    super.stop();
    console.log("speed 0");
  }
}

class Sedan extends Car {
  openDoor() {
    console.log("door opened");
  }
  start() {
    super.start();
    console.log("speed 100");
  }
  stop() {
    super.stop();
    console.log("speed 0");
  }
}

class SportBike extends Bike {
  turnOnHeadlight() {
    console.log("Light ON");
  }
  start() {
    super.start();
    console.log("speed 300");
  }
  stop() {
    super.stop();
    console.log("speed 0");
  }
}
class Scooter extends Bike {
  turnOnHeadlight() {
    console.log("Light ON");
  }
  start() {
    super.start();
    console.log("speed 50");
  }
  stop() {
    super.stop();
    console.log("speed 0");
  }
}

const truck = new Truck();
const sedan = new Sedan();
const sportBike = new SportBike();
const scooter = new Scooter();

truck.start();
scooter.start();
scooter.stop();
sportBike.start();
