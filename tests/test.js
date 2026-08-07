const fs = require("fs");

const code = fs.readFileSync("src/App.js", "utf8");

let marks = 0;

console.log("========== React Practical 10 ==========\n");

// Test 1

if (/function\s+App/.test(code))
{
    console.log("✓ App Component Created");
    marks += 20;
}
else
{
    console.log("✗ App Component Missing");
}

// Test 2

if (/useState/.test(code))
{
    console.log("✓ useState Hook Used");
    marks += 20;
}
else
{
    console.log("✗ useState Hook Missing");
}

// Test 3

if (/Increment/.test(code))
{
    console.log("✓ Increment Button Found");
    marks += 20;
}
else
{
    console.log("✗ Increment Button Missing");
}

// Test 4

if (/Decrement/.test(code))
{
    console.log("✓ Decrement Button Found");
    marks += 20;
}
else
{
    console.log("✗ Decrement Button Missing");
}

// Test 5

if (/count/.test(code))
{
    console.log("✓ Counter State Displayed");
    marks += 20;
}
else
{
    console.log("✗ Counter State Missing");
}

console.log("\n===============================");
console.log("Marks : " + marks + "/100");
console.log("===============================");

process.exit(marks === 100 ? 0 : 1);