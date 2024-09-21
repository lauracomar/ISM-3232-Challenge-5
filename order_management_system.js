// Task 1: Create an Inventory Array of Product Objects
const inventory = [

    { name: 'Espresso', price: 3, quantity: 10 },
    { name: 'Latte', price: 4, quantity: 5 },
    { name: 'Cappuccino', price: 4, quantity: 6 },
    { name: 'Mocha', price: 5, quantity: 4 }

]; // inventory array using sample data provided

//Task 2: Create an Orders Array of Order Objects
const orders = [];
// empty array that will store the information of the following steps

// Task 3: Create a Function to Place an Order
function placeOrder(customerName, orderedItems) {
    for (let item of orderedItems) {
        let product = inventory.find(pdct => pdct.name === item.name);//find product item in inventory array in task 1
        if (!product || product.quantity < item.quantity) { //if an item is not founf or if quantity order is more than available
            console.log('Item not found/not available');
        }
    };
    orderedItems.forEach(item => {
        let product = inventory.find(pdct => pdct.name === item.name);
        product.quantity -= item.quantity; // find product item in inventory array and updates quantity status 
    });
    orders.push({
        CustomerName: customerName,
        Items: orderedItems,
        status: 'pending',
    }); // place order therefore adding order details to orders array
    console.log('Order placed');
};

// Task 4: Create a Function to Calculate Total for an Order
function caculateOrderTotal(order) {
    return order.items.reduce((total, item) => {
        let product = inventory.find(pdct => pdct.name === item.name); // find product item in inventory array
        return total + (product.price * item.quantity); // calculate order total
    }, 0);
};

// Task 5: Create a Function to Mark an Order as Completed
function completeOrder(customerName) {
    let order = orders.find(ord => ord.customerName == customerName && ord.status === 'Pending'); // find order according to costumer name
    if (order) {
        order.status = 'Completed'; // update order status to completed
        console.log(`${customerName} order was completed`);
    }
    else { console.log(`${customerName} order was not found`) }; // message if order is not found 
};