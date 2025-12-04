# String and Array Manipulation Review - Student Notes

**Table of Contents**
- [Learning Objectives](#learning-objectives)
- [Part 1: String Methods (15 min)](#part-1-string-methods-15-min)
  - [The Problem](#the-problem)
  - [Code Along: Cleaning User Input](#code-along-cleaning-user-input)
  - [Key String Methods Reference](#key-string-methods-reference)
- [Practice Problem 1: Email Validator (20 min)](#practice-problem-1-email-validator-20-min)
  - [Problem](#problem)
  - [Example Usage](#example-usage)
  - [Hints](#hints)
  - [Your Solution](#your-solution)
- [Part 2: Array Methods (15 min)](#part-2-array-methods-15-min)
  - [The Problem](#the-problem-1)
  - [Code Along: Finding and Removing Items](#code-along-finding-and-removing-items)
  - [Key Array Methods Reference](#key-array-methods-reference)
- [Practice Problem 2: Remove Without Mutating (20 min)](#practice-problem-2-remove-without-mutating-20-min)
  - [Problem](#problem-1)
  - [Example Usage](#example-usage-1)
  - [Hints](#hints-1)
  - [Your Solution](#your-solution-1)
- [Challenge Problem (If Time): Parse Student Data (10 min)](#challenge-problem-if-time-parse-student-data-10-min)
  - [Problem](#problem-2)
  - [Example Usage](#example-usage-2)
  - [Requirements](#requirements)
  - [Your Solution](#your-solution-2)
- [Key Takeaways](#key-takeaways)
- [Common Bugs to Watch For](#common-bugs-to-watch-for)


## Learning Objectives

By the end of this lesson, you will be able to:
- Choose appropriate string methods to normalize and extract data
- Distinguish between mutating and non-mutating array methods
- Apply the split → manipulate → join pipeline to transform strings
- Debug common pitfalls like `indexOf` returning -1

---

## Part 1: String Methods (15 min)

### The Problem
You're building a feature where users submit their names through a form. Users type inconsistently—some use ALL CAPS, extra spaces, different formats. Your job is to clean and standardize this data.

**Example:**
```javascript
Input:  "  MAYA   Rodriguez  "
Output: "Maya Rodriguez"
```

### Code Along: Cleaning User Input

**Starting point:**
```javascript
const userName = "  MAYA   Rodriguez  ";
console.log(userName);
```

**Step 1: Remove extra whitespace from the ends**
```javascript
const trimmed = userName.trim();
console.log(trimmed); // "MAYA   Rodriguez"
```

**Step 2: Normalize case**
```javascript
const lower = trimmed.toLowerCase();
console.log(lower); // "maya   rodriguez"
```

**Step 3: Handle the spaces between names**
```javascript
const parts = lower.split(' ');
console.log(parts); // ["maya", "", "", "rodriguez"]
```

❓ **Question:** Why did we get empty strings in the array?

**Step 4: Filter out empty strings**
```javascript
const cleanParts = [];
for (let i = 0; i < parts.length; i++) {
  if (parts[i] !== '') {
    cleanParts.push(parts[i]);
  }
}
console.log(cleanParts); // ["maya", "rodriguez"]
```

**Step 5: Capitalize first letter of each word**
```javascript
for (let i = 0; i < cleanParts.length; i++) {
  const word = cleanParts[i];
  const firstLetter = word[0].toUpperCase();
  const restOfWord = word.slice(1);
  cleanParts[i] = firstLetter + restOfWord;
}
console.log(cleanParts); // ["Maya", "Rodriguez"]
```

**Step 6: Join back together**
```javascript
const formatted = cleanParts.join(' ');
console.log(formatted); // "Maya Rodriguez"
```

### Key String Methods Reference

| Method | What It Does | Example |
|--------|--------------|---------|
| `.trim()` | Removes whitespace from both ends | `"  hi  ".trim()` → `"hi"` |
| `.toLowerCase()` | Converts all letters to lowercase | `"HELLO".toLowerCase()` → `"hello"` |
| `.toUpperCase()` | Converts all letters to uppercase | `"hello".toUpperCase()` → `"HELLO"` |
| `.split(delimiter)` | Splits string into array | `"a-b-c".split('-')` → `["a", "b", "c"]` |
| `.slice(start, end)` | Extracts portion of string | `"hello".slice(0, 2)` → `"he"` |
| `str[index]` | Gets character at position | `"hello"[0]` → `"h"` |

**Array method:**
| Method | What It Does | Example |
|--------|--------------|---------|
| `.join(delimiter)` | Joins array into string | `["a", "b"].join('-')` → `"a-b"` |

---

## Practice Problem 1: Email Validator (20 min)

### Problem
Write a function that checks if an email is valid.

**Valid email requirements:**
- Contains exactly one `@`
- Has text before the `@`
- The text after `@` has exactly two parts separated by a `.` (like `example.com`)
- Ignore whitespace and case

### Example Usage
```javascript
const isValidEmail = (email) => {
  // Your code here
}

console.log(isValidEmail("  Maya@Example.com  ")); // true
console.log(isValidEmail("invalid.email")); // false - no @
console.log(isValidEmail("@example.com")); // false - nothing before @
console.log(isValidEmail("abc@examplecom")); // false - no dot after @
console.log(isValidEmail("abc@example.test.com")); // false - too many dots after @
```

### Hints
- Start by trimming whitespace
- Use `indexOf('@')` to check if `@` exists and where it is
- Use `slice()` to get the text before and after `@`
- Use `split('.')` on the part after `@` to count dots

### Your Solution
```javascript
const isValidEmail = (email) => {
  // Step 1: Clean the email


  // Step 2: Find the @ symbol


  // Step 3: Check if @ exists


  // Step 4: Get text before and after @


  // Step 5: Validate the parts


};
```

---

## Part 2: Array Methods (15 min)

### The Problem
You have an array of phone numbers. You need to find a specific number and remove it.

### Code Along: Finding and Removing Items

```javascript
const phoneNumbers = [
  "(555) 123-4567",
  "555-234-5678",
  "(555) 345-6789",
  "555-456-7890"
];

const searchFor = "(555) 345-6789";
```

**Task 1: Find if a number exists**
```javascript
const foundIndex = phoneNumbers.indexOf(searchFor);
console.log(foundIndex); // 2
```

**Task 2: Remove the number**
```javascript
phoneNumbers.splice(foundIndex, 1);
console.log(phoneNumbers); // number at index 2 is gone
```

**⚠️ Common Bug: What if it doesn't exist?**
```javascript
const notFoundIndex = phoneNumbers.indexOf("(999) 999-9999");
console.log(notFoundIndex); // -1

phoneNumbers.splice(notFoundIndex, 1); // ❌ This removes the LAST item!
```

**✅ Solution: Always check first**
```javascript
const position = phoneNumbers.indexOf(searchFor);
if (position >= 0) {
  phoneNumbers.splice(position, 1);
}
```

### Key Array Methods Reference

| Method | Mutates? | What It Does | Example |
|--------|----------|--------------|---------|
| `.indexOf(value)` | No | Returns index or -1 if not found | `[1,2,3].indexOf(2)` → `1` |
| `.includes(value)` | No | Returns true/false | `[1,2,3].includes(2)` → `true` |
| `.push(value)` | **Yes** | Add to end | `arr.push(4)` |
| `.pop()` | **Yes** | Remove from end | `arr.pop()` |
| `.shift()` | **Yes** | Remove from beginning | `arr.shift()` |
| `.unshift(value)` | **Yes** | Add to beginning | `arr.unshift(0)` |
| `.splice(index, count)` | **Yes** | Remove items at index | `arr.splice(1, 2)` |
| `.slice(start, end)` | No | Copy portion | `[1,2,3,4].slice(1,3)` → `[2,3]` |

**⚠️ Important:** Methods that mutate change the original array. Methods that don't mutate return a new array.

---

## Practice Problem 2: Remove Without Mutating (20 min)

### Problem
Write a function `removeFromArray(arr, target)` that removes the given `target` from the array **WITHOUT mutating** the original array. Return a new array with the `target` removed.

**Constraint:** You cannot use `.splice()` or `.filter()`. Use only `.indexOf()` and `.slice()`.

### Example Usage
```javascript
const removeFromArray = (arr, target) => {
  // Your solution here
}

const letters = ['a', 'b', 'c', 'd'];
console.log(removeFromArray(letters, 'c')); // ['a', 'b', 'd']
console.log(letters); // ['a', 'b', 'c', 'd'] <-- unchanged!
```

### Hints
- Use `.indexOf()` to find where the target is
- If the target isn't found, return the original array
- Use `.slice()` to get the parts before and after the target
- Use the spread operator `...` to combine the parts: `[...part1, ...part2]`

### Your Solution
```javascript
const removeFromArray = (arr, target) => {
  // Step 1: Find the target


  // Step 2: If not found, return original


  // Step 3: Get everything before the target


  // Step 4: Get everything after the target


  // Step 5: Combine and return


};
```

---

## Challenge Problem (If Time): Parse Student Data (10 min)

### Problem
Parse a CSV-style string of student data. Each field might have extra whitespace and inconsistent capitalization.

**Format:** `"name,age,cohort"`

### Example Usage
```javascript
const parseStudentData = (csvString) => {
  // Your code here
  // Return an object with name, age, cohort
}

const data = "  maya rodriguez , 22,  fall 2024  ";
console.log(parseStudentData(data));
// { name: "Maya Rodriguez", age: "22", cohort: "Fall 2024" }
```

### Requirements
- Trim whitespace from each field
- Capitalize the first letter of each word in the name
- Capitalize the first letter of each word in the cohort

### Your Solution
```javascript
const parseStudentData = (csvString) => {
  // Your code here
};
```

---

## Key Takeaways

1. **String methods don't mutate** - they always return new strings
2. **Be careful with `.indexOf()`** - it returns -1 when not found, which can cause bugs
3. **The split → manipulate → join pattern** is powerful for transforming strings
4. **Know which array methods mutate** - `.splice()`, `.push()`, `.pop()`, `.shift()`, `.unshift()` all change the original array
5. **Use `.slice()` to create new arrays** - it doesn't mutate and is useful for copying parts of arrays

---

## Common Bugs to Watch For

❌ **Using `.indexOf()` directly in a condition**
```javascript
if (arr.indexOf('x')) { } // WRONG - this is true even when indexOf returns -1!
```

✅ **Check explicitly**
```javascript
if (arr.indexOf('x') !== -1) { } // CORRECT
// OR
if (arr.includes('x')) { } // CORRECT (easier)
```

❌ **Forgetting strings are immutable**
```javascript
let str = "hello";
str[0] = "H"; // Doesn't work!
console.log(str); // still "hello"
```

✅ **Create a new string**
```javascript
let str = "hello";
str = str[0].toUpperCase() + str.slice(1); // "Hello"
```

❌ **Not handling empty strings after split**
```javascript
"a  b".split(' '); // ["a", "", "b"] - the empty string is there!
```

✅ **Filter them out**
```javascript
const parts = "a  b".split(' ').filter(part => part !== '');
// OR use a loop to skip empty strings
```