// Task 1
// a. Store correct password in a JS variable.
var correctPassword = "mypassword";

// b. Asks user to enter his/her password
var userInput = prompt("Enter your password:");

// c. Validate the two passwords
if (!userInput) {
    console.log("Please enter your password");
} else if (userInput === correctPassword) {
    console.log("Correct! The password you entered matches the original password");
} else {
    console.log("Incorrect password");
}
// Task 2
var greeting;
var hour = 13;
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
console.log(greeting);
// Task 3
// a. Declare an empty array using JS literal notation to store student names in future.
var studentNamesLiteral = [];

// b. Declare an empty array using JS object notation to store student names in future.
var studentNamesObject = new Array();

// c. Declare and initialize a strings array.
var stringsArray = ["apple", "banana", "orange"];

// d. Declare and initialize a numbers array.
var numbersArray = [1, 2, 3, 4, 5];

// e. Declare and initialize a boolean array.
var booleanArray = [true, false, true];

// f. Declare and initialize a mixed array.
var mixedArray = ["apple", 1, true];

// g. Declare and Initialize an array and store available education qualifications in Pakistan.
var educationQualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];
var colorNames = ["Red", "Green", "Blue"];

// a
var colorToAdd = prompt("Enter color to add to the beginning:");
colorNames.unshift(colorToAdd);

// b
colorToAdd = prompt("Enter color to add to the end:");
colorNames.push(colorToAdd);

// c
colorNames.unshift("White", "Black");

// d
colorNames.shift();

// e
colorNames.pop();

// f
var indexToAddColor = prompt("Enter index to add color:");
colorToAdd = prompt("Enter color to add:");
colorNames.splice(indexToAddColor, 0, colorToAdd);

// g
var indexToDelete = prompt("Enter index to delete colors:");
var numToDelete = prompt("Enter number of colors to delete:");
colorNames.splice(indexToDelete, numToDelete);
var studentScores = [90, 85, 70, 95, 80];
studentScores.sort(function(a, b){return a - b});
console.log(studentScores);
var phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<select>");
for (var i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");
var tableNumber = parseInt(prompt("Enter table number:"));
var tableLength = parseInt(prompt("Enter table length:"));
for (var i = 1; i <= tableLength; i++) {
    console.log(tableNumber + " * " + i + " = " + (tableNumber * i));
}
var stringNumber = "472";
var number = parseInt(stringNumber);
console.log(number);
var userInput = prompt("Enter a string:");
console.log(userInput.toUpperCase());
// a
var countingSeries = Array.from({length: 15}, (_, i) => i + 1);
console.log("Counting: " + countingSeries.join(", "));

// b
var reverseCountingSeries = Array.from({length: 10}, (_, i) => 10 - i);
console.log("Reverse counting: " + reverseCountingSeries.join(", "));

// c
var evenSeries = Array.from({length: 11}, (_, i) => i * 2);
console.log("Even: " + evenSeries.join(", "));

// d
var oddSeries = Array.from({length: 10}, (_, i) => i * 2 + 1);
console.log("Odd: " + oddSeries.join(", "));

// e
var kSeries = Array.from({length: 10}, (_, i) => (i + 1) * 2 + "k");
console.log("Series: " + kSeries.join(", "));
var items = ["cake", "apple pie", "cookie", "chips", "patties"];
var userInput = prompt("Enter item to search:");
if (items.includes(userInput)) {
    alert("Item found in the list");
} else {
    alert("Item not found in the list");
}
var userInput = prompt("Enter a string:");
var titleCaseInput = userInput.toLowerCase().split(' ').map(function(word) {
    return (word.charAt(0).toUpperCase() + word.slice(1));
}).join(' ');
console.log(titleCaseInput);
