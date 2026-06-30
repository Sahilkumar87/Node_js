const fs = require('fs');

console.log("1. start of scripting ....");



// blocking operation
console.log("2. Reading file synchrously");
const dataSync = fs.readFileSync("user-details.txt", "utf8");
console.log("3. Synhronous read complete");



// Async non-blocking operation 
console.log("4. Reading file asynchronously");
fs.readFile("user-details.txt", "utf8", (err, dataAsync) => {
    if(err) throw err;
    console.log("6. Async read complete");
});

console.log("5. End of script");