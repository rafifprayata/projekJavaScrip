// Fungsi untuk menghasilkan deret Fibonacci dengan rekursi
function fibonacci(n) {
    // Basis rekursi: jika n == 0 atau n == 1
    if (n === 0) {
      return [0];
    }
    if (n === 1) {
      return [0, 1];
    }
    // Rekursi: gabungkan deret Fibonacci dari n-1 dengan fibonacci(n-1) + fibonacci(n-2)
    const fib = fibonacci(n - 1);
    fib.push(fib[n - 1] + fib[n - 2]);
    return fib;
  }
  
  export default fibonacci;
  