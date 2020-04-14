class Store {
  constructor(name,stock,revenue) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;    
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  processProductSale(toyname) {
    let value;
    // look up the product
    this.stock.forEach(element => {
      console.log("my toy name",element.name);
      if(toyname === element.name){
        // decrease toy count by one
        element.count = element.count -1;
        // get the toy's price and
       // value = element.price;
      }
    });
    // increase store's revenue
    // decrease toy count by one
  }

  }


module.exports = Store;
