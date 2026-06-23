```javascript
// INFO 465 Programming Assignment #1
// Author: Makayla Pelt
//
// This program allows the user to enter integers.
// The integers are stored in an array.
// When the user enters "q", the program calculates:
// Mean, Median, Count, Minimum, and Maximum.

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// Array to store user-entered integers
let numbers = [];

// Function to continuously ask for input
function getInput() {
    rl.question('Enter an integer (or q to quit): ', (answer) => {

        // Stop entering values
        if (answer.toLowerCase() === 'q') {

            if (numbers.length === 0) {
                console.log('No integers were entered.');
                rl.close();
                return;
            }

            displayResults();
            rl.close();
            return;
        }

        // Convert input to number
        const num = Number(answer);

        // Error handling
        if (!Number.isInteger(num)) {
            console.log('Error: Please enter a valid integer.');
            getInput();
            return;
        }

        numbers.push(num);
        getInput();
    });
}

// Function to calculate and display statistics
function displayResults() {

    // Sort array for median calculation
    const sortedNumbers = [...numbers].sort((a, b) => a - b);

    const count = numbers.length;

    const sum = numbers.reduce((total, value) => total + value, 0);
    const mean = sum / count;

    const minimum = Math.min(...numbers);
    const maximum = Math.max(...numbers);

    let median;

    if (count % 2 === 0) {
        median =
            (sortedNumbers[count / 2 - 1] +
                sortedNumbers[count / 2]) / 2;
    } else {
        median = sortedNumbers[Math.floor(count / 2)];
    }

    console.log('\n----- Results -----');
    console.log('Count:', count);
    console.log('Mean:', mean);
    console.log('Median:', median);
    console.log('Minimum Value:', minimum);
    console.log('Maximum Value:', maximum);
}

// Start the program
getInput();
```
