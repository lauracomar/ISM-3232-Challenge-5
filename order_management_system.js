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
        let product = inventory.find(pdct => pdct.name === item.name);//find the item in the inventory array in task 1
        if (!product || product.quantity < item.quantity) { //if an item is not founf or if quantity order is more than available
            console.log('Item not found/not available');
        }
    };
    orderedItems.forEach(item => {
        let product = inventory.find(pdct => pdct.name === item.name);
        product.quantity -= item.quantity; // finds item in inventory and updates quantity status 
    });
    orders.push({
        CustomerName: customerName,
        Items: orderedItems,
        status: 'pending',
    }); // place order therefore adding order details to orders array
    console.log('Order placed');
};