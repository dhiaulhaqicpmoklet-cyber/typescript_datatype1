/**
 * A customer has a shopping cart below.
 * Tasks:
 * 1. Count subtotal of all products (expected result: 3.350.000)
 * 2. Calculate discount with this rules.
 *  - subtotal >= 3,000,000 → 10% discount
 *  - subtotal >= 2,000,000 → 5% discount
 *  - otherwise             → 0%
 * 
 * 3. Calculate final subtotal after given discount
 * 4. Find expensive product ( > 1.000.000)
 */

const cart = [
    {
        product: "Keyboard",
        price: 350000,
        quantity: 2,
    },
    {
        product: "Mouse",
        price: 150000,
        quantity: 1,
    },
    {
        product: "Monitor",
        price: 2500000,
        quantity: 1,
    },
];

const subtotal = cart.reduce((total, item) => total + item.price * item.quantity, 0);
const discount = subtotal >= 3000000 ? 0.1 : subtotal >= 2000000 ? 0.05 : 0;
const discountAmount = subtotal * discount;
const finalSubtotal = subtotal - discountAmount;
const expensiveProducts = cart.filter(item => item.price > 1000000);
console.log(`Subtotal: Rp${subtotal.toLocaleString("id-ID")}`);
console.log(`Discount: ${discount * 100}% (Rp${discountAmount.toLocaleString("id-ID")})`);
console.log(`Final Subtotal: Rp${finalSubtotal.toLocaleString("id-ID")}`);
console.log(`Expensive Products: ${expensiveProducts.map(item => item.product).join(", ")}`);