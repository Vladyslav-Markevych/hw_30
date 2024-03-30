class Order {
  constructor(dishes) {
    this.dishes = dishes;
    this.status = "В обробці";
  }
}

class Table {
  constructor(numberTable) {
    this.number = numberTable;
    this.orders = [];
  }
}

class System {
  constructor() {
    this.tables = {};
  }
  addTable(number) {
    let table = new Table(number);
    if (!this.tables[number]) {
      this.tables[number] = table;
      console.log(`Стіл №${number} додано.`);
    } else {
      console.log("Стіл вже додано");
    }
  }
  addOrder(numberTable, order) {
    if (this.tables[numberTable]) {
      this.tables[numberTable].orders.push(order);
      console.log(`Замовлення для столу №${numberTable} додано`);
    } else {
      console.log("Столу не існує");
    }
  }
  getTotalAmount(numberTable) {
    let totalPrice = 0;
    this.tables[numberTable].orders.forEach((element) => {
      element.dishes.forEach((elem) => {
        totalPrice += elem.price;
      });
    });
    console.log(`Загальна сума для столу №${numberTable}: ${totalPrice} грн`);
  }
  getOrderAmount(numberTable, numberOrder) {
    let totalPrice = 0;
    this.tables[numberTable].orders[numberOrder - 1].dishes.forEach(
      (element) => {
        totalPrice += element.price;
      }
    );
    console.log(
      `Cума замовлення №${numberOrder} для столу №${numberTable}: ${totalPrice} грн`
    );
  }
  changeOrderStatus(numberTable, numberOrder, newStatus) {
    this.tables[numberTable].orders[numberOrder - 1].status = newStatus;
    console.log(
      `Статус для замовлення №${numberOrder} столу №${numberTable} змінено на "${newStatus}"`
    );
  }
  cancelOrder(numberTable, numberOrder) {
    if (this.tables[numberTable].orders[numberOrder - 1]) {
      this.tables[numberTable].orders.splice([numberOrder - 1], 1);
      console.log(`Замовлення №${numberOrder} столу №${numberTable} видалено`);
    } else {
      console.log("Замовлення не існує");
    }
  }
}

// Start
const system = new System();

const order1 = new Order([
  { name: "Кава", price: 30 },
  { name: "Чізкейк", price: 50 },
]);
const order2 = new Order([
  { name: "Лате", price: 40 },
  { name: "Тірамісу", price: 60 },
]);

system.addTable(1);
system.addTable(2);
system.addTable(3);

system.addOrder(1, order1);
system.addOrder(1, order1);
system.getTotalAmount(1);
system.getOrderAmount(1, 1);

system.addOrder(2, order2);
system.changeOrderStatus(2, 1, "готується");

system.addOrder(3, order2);
system.cancelOrder(3, 1);
