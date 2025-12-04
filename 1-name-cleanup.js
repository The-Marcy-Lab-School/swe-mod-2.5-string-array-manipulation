/* 
Key methods reference:
- trim() - removes whitespace from both ends
- toLowerCase() / toUpperCase() - normalize case
- split(delimiter) - string → array
- join(delimiter) - array → string
- slice(start, end) - extract portion (end is exclusive)
- String indexing: str[0] gets character at position
*/


const userName = "  MAYA   Rodriguez  ";

// Problem: clean this up for display
console.log(userName);

// Step 1: Remove extra whitespace
const trimmed = undefined;
console.log(trimmed); // "MAYA   Rodriguez"

// Step 2: Normalize case
const lower = undefined;
console.log(lower); // "maya   rodriguez"

// Step 3: Handle the spaces between names
const parts = undefined;
console.log(parts); // ["maya", "", "", "rodriguez"]


// Step 4: Filter out empty strings
const cleanParts = undefined;
console.log(cleanParts); // ["maya", "rodriguez"]

// Step 5: Capitalize first letter of each
console.log(cleanParts); // ["Maya", "Rodriguez"]

// Step 6: Join back together
const formatted = undefined;
console.log(formatted); // "Maya Rodriguez"
