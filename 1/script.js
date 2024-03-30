class Weather {
  constructor(mo, tu, we, th, fr, sa, su) {
    this.monday = mo;
    this.tuesday = tu;
    this.wednesday = we;
    this.thursday = th;
    this.friday = fr;
    this.saturday = sa;
    this.sunday = su;
  }
  averageTemperature() {
    let count = 0;
    Object.values(this).forEach((element) => {
      if (typeof element == "number") {
        count += element;
      }
    });
    count /= 7;
    console.log(`Середня температура ${count.toFixed(2)}°C`);
    return count.toFixed(2);
  }

  minTemperature() {
    let count = 100;
    Object.values(this).forEach((element) => {
      if (typeof element == "number" && element < count) {
        count = element;
      }
    });
    return console.log(`Мінімальна температура ${count}°C`);
  }
  maxTemperature() {
    let count = 0;
    Object.values(this).forEach((element) => {
      if (typeof element == "number" && element > count) {
        count = element;
      }
    });
    return console.log(`Максимальна температура ${count}°C`);
  }
  print() {
    let name = Object.keys(this);
    let temperature = Object.values(this);
    for (let i = 0; i < 7; i++) {
      console.log(`|${name[i]}   | ${temperature[i]} |
-----------------`);
    }
  }
}

const weather = new Weather(6, 6, 7, 7, 8, 9, 13);

weather.minTemperature();
weather.maxTemperature();
weather.averageTemperature();
weather.print();
