const fs = require("fs");

// Reading the input file

/* the trailing and leading white spaces have been removed,
and have been placed in an object iterated by the spaces for each Elf */
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
const test = fs.readFileSync("test.txt", "utf-8").trim().split("\n");
// const input = test

// Function to check if a report is safe
function isSafeReport(levels) {
    let increasing = true;
    let decreasing = true;

 
    for (let i = 1; i < levels.length; i++) {
        const diff = levels[i] - levels[i - 1];

        // Check if the difference is within the allowed range
        if (Math.abs(diff) < 1 || Math.abs(diff) > 3) {
            return false;
        }

        // Update flags for increasing and decreasing
        if (diff > 0) decreasing = false;
        if (diff < 0) increasing = false;
    }

    // A report is safe if it is entirely increasing or entirely decreasing
    return increasing || decreasing;
}

// Parse and process each report
let safeCount = 0;

function canBeMadeSafe(levels) {
    for (let i = 0; i < levels.length; i++) {
        const modifiedLevels = levels.slice(0, i).concat(levels.slice(i + 1));
        if (isSafeReport(modifiedLevels)) {
            return true;
        }
    }
    return false;
}

input.forEach(line => {
    const levels = line.split(' ').map(Number);
    const safe = isSafeReport(levels) || canBeMadeSafe(levels)
    if (safe) {
        safeCount++;
    } 
    
});

console.log(`Number of safe reports: ${safeCount}`);
