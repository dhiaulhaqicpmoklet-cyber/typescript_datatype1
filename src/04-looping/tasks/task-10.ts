/**
 * An LMS stores assignment submission information on array below.
 * Business Rules
 * - Students who do not submit automatically receive a score of 0.
 * - A passing score is 75.
 * - Submitted assignments with a score below 75 require revision.
 * 
 * Student Tasks using a loop for:
 * - Count students who submitted their assignment.
 * - Count students who did not submit.
 * - Count students who passed.
 * - Count students who must revise their assignment.
 * - Display the names of students who did not submit.
 * - Display the names of students who must revise.
 * - Calculate the class average score.
 */

const submissions: {
  student: string;
  submitted: boolean;
  score: number;
}[] = [
  { student: "Alya", submitted: true, score: 92 },
  { student: "Budi", submitted: false, score: 0 },
  { student: "Citra", submitted: true, score: 78 },
  { student: "Dimas", submitted: true, score: 65 },
  { student: "Eka", submitted: false, score: 0 },
  { student: "Fajar", submitted: true, score: 84 },
  { student: "Gita", submitted: true, score: 90 },
  { student: "Hana", submitted: true, score: 73 }
];

const passingScore:number = 75;

let submittedCount:number = 0;
let notSubmittedCount:number = 0;
let passedCount:number = 0;
let revisionCount:number = 0;
let totalScore:number = 0;

const notSubmittedNames:string[] = [];
const revisionNames:string[] = [];

for (let i: number = 0; i < submissions.length; i++) {
  const submission = submissions[i];

  totalScore += submission.score;

  if (!submission.submitted) {
    notSubmittedCount++;
    notSubmittedNames.push(submission.student);
  } else {
    submittedCount++;

    if (submission.score >= passingScore) {
      passedCount++;
    } else {
      revisionCount++;
      revisionNames.push(submission.student);
    }
  }
}

const averageScore:number = totalScore / submissions.length;

console.log("Students Who Submitted:", submittedCount);
console.log("Students Who Did Not Submit:", notSubmittedCount);
console.log("Students Who Passed:", passedCount);
console.log("Students Who Must Revise:", revisionCount);
console.log("Names Who Did Not Submit:", notSubmittedNames.join(", "));
console.log("Names Who Must Revise:", revisionNames.join(", "));
console.log("Class Average Score:", averageScore.toFixed(2));
