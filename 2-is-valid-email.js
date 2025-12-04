const isValidEmail = (email) => {
  // Your code here
}

// Example Usage:
console.log(isValidEmail("  Maya@Example.com  ")); // true
console.log(isValidEmail("invalid.email")); // false - no @
console.log(isValidEmail("@example.com")); // false - nothing before @
console.log(isValidEmail("abc@examplecom")); // false - no dot after @
console.log(isValidEmail("abc@example.test.com")); // false - too many dots after @
