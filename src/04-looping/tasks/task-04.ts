/**
 * An online store wants to analyze today's sales transactions. 
 * Each transaction amount is stored in an array.
 * ---------------------------------
 * const sales = [
 * 125000,
 * 350000,
 * 78000,
 * 910000,
 * 150000,
 * 420000,
 * 275000,
 * 99000,
 * 640000,
 * 18000
 * ]
 * -------------------------------------
 * 
 * Student task in calculate:
 * 1. Total sales revenue
 * 2. Highest transaction
 * 3. Lowest transaction
 * 4. Number of transactions worth Rp300,000 or more
 * 5. Average transaction value
 */

const sales: number[] = [
  125000,
  350000,
  78000,
  910000,
  150000,
  420000,
  275000,
  99000,
  640000,
  18000
];

let totalSales:number = 0;
let highestTransaction:number = sales[0];
let lowestTransaction:number = sales[0];
let transactions300KOrMore:number = 0;

for (let i = 0; i < sales.length; i++) {
  const amount:number = sales[i];

  totalSales += amount;

  if (amount > highestTransaction) {
    highestTransaction = amount;
  }

  if (amount < lowestTransaction) {
    lowestTransaction = amount;
  }

  if (amount >= 300000) {
    transactions300KOrMore++;
  }
}

const averageTransaction:number = totalSales / sales.length;

console.log("Total Sales Revenue: Rp" + totalSales);
console.log("Highest Transaction: Rp" + highestTransaction);
console.log("Lowest Transaction: Rp" + lowestTransaction);
console.log("Transactions >= Rp300,000:", transactions300KOrMore);
console.log("Average Transaction: Rp" + averageTransaction);