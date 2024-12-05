// Write your solution in this file!
// Declare a global variable called customerName using the var keyword
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function that declares a global variable bestCustomer and assigns it 'not bob'
function setBestCustomer() {
      bestCustomer = 'not bob';  // Declaring the global bestCustomer variable
}

// Function to overwrite the bestCustomer global variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';  // This will change the global bestCustomer variable
}

// Declare a constant leastFavoriteCustomer in global scope
const leastFavoriteCustomer = 'John';

// Function that attempts to change leastFavoriteCustomer, which will fail
function changeLeastFavoriteCustomer() {
    // This will throw an error because leastFavoriteCustomer is a constant
    leastFavoriteCustomer = 'Jane';  // Error: Assignment to constant variable.
}
