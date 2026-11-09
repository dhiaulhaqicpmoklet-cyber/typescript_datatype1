/**
 * An LMS stores assignment submission data at following array.
 * Business Rules
 * - Passing score = 75
 * - Students who do not submit receive 0
 * - Submitted assignments below 75 require revision.
 * 
 * The principal requests a report showing:
 * - Total students
 * - Submitted assignments
 * - Missing assignments
 * - Passed students
 * - Students requiring revision
 * - Average score
 * - Highest score
 * - Lowest score
 * 
 * Student Tasks
 * 1. Design your own functions.
 * At minimum, your solution must contain:
 * - 7 non-void functions
 * - 1 void function to display the report.
 * 
 */
const submissions = [
    { student: "Alya", submitted: true, score: 90 },
    { student: "Budi", submitted: false, score: 0 },
    { student: "Citra", submitted: true, score: 84 },
    { student: "Dimas", submitted: true, score: 72 },
    { student: "Eka", submitted: false, score: 0 },
    { student: "Fajar", submitted: true, score: 96 }
];

const PASSING_SCORE = 75;

function getTotalStudents(): number {
    return submissions.length;
}

function getSubmittedCount(): number {
    let count = 0;

    for (const item of submissions) {
        if (item.submitted) {
            count++;
        }
    }

    return count;
}

function getMissingCount(): number {
    let count = 0;

    for (const item of submissions) {
        if (!item.submitted) {
            count++;
        }
    }

    return count;
}

function getPassedCount(): number {
    let count = 0;

    for (const item of submissions) {
        if (item.submitted && item.score >= PASSING_SCORE) {
            count++;
        }
    }

    return count;
}

function getRevisionCount(): number {
    let count = 0;

    for (const item of submissions) {
        if (item.submitted && item.score < PASSING_SCORE) {
            count++;
        }
    }

    return count;
}

function getAverageScore(): number {
    let total = 0;

    for (const item of submissions) {
        total += item.score;
    }

    return total / submissions.length;
}

function getHighestScore(): number {
    let highest = submissions[0].score;

    for (const item of submissions) {
        if (item.score > highest) {
            highest = item.score;
        }
    }

    return highest;
}

function getLowestScore(): number {
    let lowest = submissions[0].score;

    for (const item of submissions) {
        if (item.score < lowest) {
            lowest = item.score;
        }
    }

    return lowest;
}

function displayReport(): void {
    console.log(`Total Students: ${getTotalStudents()}`);
    console.log(`Submitted Assignments: ${getSubmittedCount()}`);
    console.log(`Missing Assignments: ${getMissingCount()}`);
    console.log(`Passed Students: ${getPassedCount()}`);
    console.log(`Students Requiring Revision: ${getRevisionCount()}`);
    console.log(`Average Score: ${getAverageScore().toFixed(2)}`);
    console.log(`Highest Score: ${getHighestScore()}`);
    console.log(`Lowest Score: ${getLowestScore()}`);
}

displayReport();