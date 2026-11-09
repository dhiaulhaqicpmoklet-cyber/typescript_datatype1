/**
 * A university stores the final grades of students enrolled in the Backend Development course at array below.
 * Grade Categories
 * - A : 90–100
 * - B : 80–89
 * - C : 70–79
 * - D : below 70
 * 
 * Student Task Calculate:
 * - Number of A students
 * - Number of B students
 * - Number of C students
 * - Number of D students
 * - Highest score
 * - Lowest score
 * - Average score
 */

const students: { name: string; score: number }[] = [
    { name: "Alya", score: 88 },
    { name: "Budi", score: 71 },
    { name: "Citra", score: 95 },
    { name: "Dimas", score: 63 },
    { name: "Eka", score: 84 },
    { name: "Fajar", score: 79 },
    { name: "Gita", score: 92 },
    { name: "Hana", score: 67 }
];


let countA:number = 0;
let countB:number = 0;
let countC:number = 0;
let countD:number = 0;

let totlScore:number = 0;
let highestScore:number = students[0].score;
let lowestScore:number = students[0].score;

for (let i:number = 0; i < students.length; i++) {
  const score:number = students[i].score;

  totlScore += score;

  if (score >= 90) {
    countA++;
  } else if (score >= 80) {
    countB++;
  } else if (score >= 70) {
    countC++;
  } else {
    countD++;
  }

  if (score > highestScore) {
    highestScore = score;
  }

  if (score < lowestScore) {
    lowestScore = score;
  }
}

const aveageScore:number = totlScore / students.length;

console.log("Number of A Students:", countA);
console.log("Number of B Students:", countB);
console.log("Number of C Students:", countC);
console.log("Number of D Students:", countD);
console.log("Highest Score:", highestScore);
console.log("Lowest Score:", lowestScore);
console.log("Average Score:", aveageScore.toFixed(2));
