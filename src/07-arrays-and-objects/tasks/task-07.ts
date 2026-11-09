/**
 * An online store has customer orders.
 * Tasks:
 * 1. Get only completed orders.
 * 2. Calculate the total value of each order.
 * 3. Find the customer who spent the most.
 * 4. Calculate the total revenue from completed orders.
 * 5. Find all products that have been purchased.
 */
const orders = [
    {
        id: 101,
        customer: "Andi",
        status: "completed",
        items: [
            { product: "Keyboard", price: 350000, quantity: 1 },
            { product: "Mouse", price: 150000, quantity: 2 },
        ],
    },
    {
        id: 102,
        customer: "Budi",
        status: "cancelled",
        items: [
            { product: "Monitor", price: 2500000, quantity: 1 },
        ],
    },
    {
        id: 103,
        customer: "Citra",
        status: "completed",
        items: [
            { product: "Monitor", price: 2500000, quantity: 2 },
            { product: "Keyboard", price: 350000, quantity: 1 },
        ],
    },
];

const completedOrders = orders.filter(order => order.status === "completed");

const orderTotals = completedOrders.map(order => ({
    id: order.id,
    customer: order.customer,
    total: order.items.reduce((total, item) => total + item.price * item.quantity, 0)
}));

const highestSpender = orderTotals.reduce((highest, order) =>
    order.total > highest.total ? order : highest
);

const totalRevenue = orderTotals.reduce((total, order) => total + order.total, 0);

const purchasedProducts = [...new Set(
    completedOrders.reduce(
        (products, order) => products.concat(order.items.map(item => item.product)),
        [] as string[]
    )
)];

console.log(`Completed Orders: ${JSON.stringify(completedOrders, null, 2)}`);
console.log(`Order Totals: ${JSON.stringify(orderTotals, null, 2)}`);
console.log(`Customer Who Spent the Most: ${highestSpender.customer} (Rp${highestSpender.total.toLocaleString("id-ID")})`);
console.log(`Total Revenue: Rp${totalRevenue.toLocaleString("id-ID")}`);
console.log(`Purchased Products: ${purchasedProducts.join(", ")}`);