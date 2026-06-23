// INFO 465 Programming Assignment #1
// Author: Makayla Pelt
// This program reads integers, stores them in an array,
// and calculates mean, median, count, minimum, and maximum.

const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let numbers = [];

function getInput() {
    rl.question("Enter an integer or q to quit: ", function(answer) {
        if (answer.toLowerCase() === "q") {
            if (numbers.length === 0) {
                console.log("No integers were entered.");
                rl.close();
                return;
            }

            displayResults();
            rl.close();
            return;
        }

        let number = Number(answer);

        if (!Number.isInteger(number)) {
            console.log("Error: Please enter a valid integer.");
        } else {
            numbers.push(number);
        }

        getInput();
    });
}

function displayResults() {
    let count = numbers.length;
    let sum = numbers.reduce((total, num) => total + num, 0);
    let mean = sum / count;

    let sortedNumbers = [...numbers].sort((a, b) => a - b);
    let median;

    if (count % 2 === 0) {
        median = (sortedNumbers[count / 2 - 1] + sortedNumbers[count / 2]) / 2;
    } else {
        median = sortedNumbers[Math.floor(count / 2)];
    }

    let minimum = Math.min(...numbers);
    let maximum = Math.max(...numbers);

    console.log("\nResults:");
    console.log("Count:", count);
    console.log("Mean:", mean);
    console.log("Median:", median);
    console.log("Minimum:", minimum);
    console.log("Maximum:", maximum);
}

getInput();
