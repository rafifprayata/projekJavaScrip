class Item {
    constructor(id, name, quantity, price) {
      this.id = id;
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Method untuk memperbarui detail item
    updateDetails(name, quantity, price) {
      this.name = name;
      this.quantity = quantity;
      this.price = price;
    }
  
    // Method untuk menampilkan detail item dalam format yang diinginkan
    displayDetails() {
      return `ID: ${this.id}, Name: ${this.name}, Quantity: ${this.quantity}, Price: ${this.price}`;
    }
  }
  
  export default Item;
  