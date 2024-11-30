class Inventory {
    constructor() {
      this.items = [];  // Menyimpan daftar barang
    }
  
    // Method untuk menambahkan item ke dalam inventaris
    addItem(item) {
      this.items.push(item);
    }
  
    // Method untuk menghapus item berdasarkan ID
    removeItem(id) {
      this.items = this.items.filter(item => item.id !== id);
    }
  
    // Method untuk menampilkan semua item dalam inventaris
    listItems() {
      return this.items.map(item => item.displayDetails()).join('\n');
    }
  }
  
  export default Inventory;
  