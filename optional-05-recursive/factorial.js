// Fungsi untuk menghitung faktorial dengan rekursi
function factorial(n) {
    // Basis rekursi: jika n <= 1, faktorialnya 1
    if (n <= 1) {
      return 1;
    }
    // Rekursi: n * faktorial dari n-1
    return n * factorial(n - 1);
  }
  
  export default factorial;
  