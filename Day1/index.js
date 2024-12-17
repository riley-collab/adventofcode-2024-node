const fs = require("fs");

// Reading the input file

/* the trailing and leading white spaces have been removed,
and have been placed in an object iterated by the spaces for each Elf */
const input = fs.readFileSync("input.txt", "utf-8").trim().split("\n");
// const test = fs.readFileSync("test.txt", "utf-8").trim().split("\n");
const test = input

const leftArr = []
const rightArr = []


test.forEach((item) => 
    //find absolute value of the difference
{
    const [left, right] = item.split(/\s+/).map(Number);

    leftArr.push(left)
    rightArr.push(right)
})

// sort through both arrays

leftArr.sort()
rightArr.sort()
// console.log(leftArr ,rightArr);

let totalArr = 0
for (let i = 0; i < leftArr.length; i++){
    totalArr += Math.abs(leftArr[i] - rightArr[i])
}
let similarityScore = 0
leftArr.forEach(item => {
    let numLeftInRightArr = 0
    rightArr.forEach(line => {
        if (item === line) numLeftInRightArr ++
    })
    similarityScore += item * numLeftInRightArr
})

console.log("First Part: " + totalArr)
console.log("Second Part: " + similarityScore)