/**
 * An online store wants to generate a daily sales dashboard. All transaction amounts are stored in an array.
 * Instead of writing one long program, the development team decides to split the calculations into reusable functions.
 * The dashboard should display:
 * - Total sales
 * - Highest transaction
 * - Lowest transaction
 * - Average transaction
 * - Number of transactions above Rp500,000
 * 
 * Student Tasks
 * Create the following functions:
 */

const sales = [
  125000,
  780000,
  250000,
  99000,
  540000,
  670000,
  180000,
  450000,
  310000,
  820000
];

function calculateTotalSales(sales: number[]): number {
  let total = 0;
  for (let i = 0; i < sales.length; i++) {
    total += sales[i];
  }
  return total;
}

function findHighestTransaction(sales: number[]): number {
  let highest = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] > highest) {
      highest = sales[i];
    }
  }
  return highest;
}

function findLowestTransaction(sales: number[]): number {
  let lowest = sales[0];
  for (let i = 1; i < sales.length; i++) {
    if (sales[i] < lowest) {
      lowest = sales[i];
    }
  }
  return lowest;
}

function calculateAverageSale(sales: number[]): number {
  if (sales.length === 0) return 0;
  const total = calculateTotalSales(sales);
  return total / sales.length;
}

function countLargeTransactions(
  sales: number[],
  minimumAmount: number
): number {
  let count = 0;
  for (let i = 0; i < sales.length; i++) {
    if (sales[i] > minimumAmount) {
      count++;
    }
  }
  return count;
}

console.log(`Total Sales: Rp ${calculateTotalSales(sales).toLocaleString("id-ID")}`);
console.log(`Highest Transaction: Rp ${findHighestTransaction(sales).toLocaleString("id-ID")}`);
console.log(`Lowest Transaction: Rp ${findLowestTransaction(sales).toLocaleString("id-ID")}`);
console.log(`Average Transaction: Rp ${calculateAverageSale(sales).toLocaleString("id-ID")}`);
console.log(`Transactions Above Rp500,000: ${countLargeTransactions(sales, 500000)}`);