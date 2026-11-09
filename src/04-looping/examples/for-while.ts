/**
 * Module 04: Looping — Examples
 *
 * Run: npm run example src/04-looping/examples/for-while.ts
 */

// for loop
console.log("=== for loop ===");
for (let i = 1; i <= 5; i++) {
  console.log(`Count: ${i}`);
}

// while loop
console.log("\n=== while loop ===");
let count = 1;
while (count <= 3) {
  console.log(`While count: ${count}`);
  count++;
}

// do...while loop
console.log("\n=== do...while loop ===");
let num = 0;
do {
  console.log(`do...while num: ${num}`);
  num++;
} while (num < 3);

// for...of — iterate over array values
console.log("\n=== for...of ===");
const fruits = ["apple", "banana", "cherry"];
for (const fruit of fruits) {
  console.log(fruit);
}

// for...in — iterate over object keys
console.log("\n=== for...in ===");
const student = { name: "Alice", age: 20, major: "CS" };
for (const key in student) {
  console.log(`${key}: ${student[key as keyof typeof student]}`);
}

// break and continue
console.log("\n=== break & continue ===");
for (let i = 1; i <= 10; i++) {
  if (i === 3) continue; // skip 3
  if (i === 8) break; // stop at 8
  console.log(i);
}

console.log("1")
for (let i = 0; i <= 4; i++){
  for(let j = 0; j <= i; j++){
    process.stdout.write("*");
  }
  process.stdout.write("\n")
}

console.log("2")
for (let i = 4; i >= 0; i--){
  for(let j = 0; j <= i; j++){
    process.stdout.write("*");
  }
  process.stdout.write("\n")
}

console.log("3")
for (let i = 0; i <= 4; i++){
  for(let j = 0; j <= i; j++){
    process.stdout.write("*");
  }
  process.stdout.write("\n")
}
for (let i = 3; i >= 0; i--){
  for(let j = 0; j <= i; j++){
    process.stdout.write("*");
  }
  process.stdout.write("\n")
}

console.log("4")
for (let i = 0; i <= 4; i++){
  for(let j = 0; j <= i; j++){
    process.stdout.write("*");
  }
  process.stdout.write("\n")
}
// for (let i = 0; i <= 5; i++){
//   for(let j = 0; j <= i; j++){
//     console.log("*")
//   }
// }
