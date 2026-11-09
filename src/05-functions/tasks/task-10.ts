/**
 * An online learning platform stores course completion information.
 * The academy director wants a dashboard containing:
 * Completion Statistics:
 * - Total enrollments
 * - Completed enrollments
 * - Incomplete enrollments
 * - Completion percentage
 * 
 * Academic Statistics:
 * - Highest score
 * - Lowest score
 * - Average score
 * - Students with passing scores (≥ 75)
 * 
 * Course Statistics:
 * - Number of students enrolled in each course
 * - Average score for each course
 * 
 * Learning Statistics:
 * - Total learning hours
 * - Average learning duration
 * 
 * Student Tasks:
 * You must design your own program architecture.
 * Requirements
 * Your solution must contain:
 * - At least 10 non-void functions
 * - At least 2 void functions
 * - No duplicated calculations
 * - Each function must have one responsibility
 * - Every printed value must come from another function
 * - Use meaningful function names and parameters
 * Reuse existing functions whenever possible
 */

type Enrollment = {
    student: string;
    course: string;
    completed: boolean;
    score: number;
    duration: number;
};

const enrollments: Enrollment[] = [
    { student: "Alya", course: "TypeScript", completed: true, score: 91, duration: 38 },
    { student: "Budi", course: "TypeScript", completed: false, score: 45, duration: 12 },
    { student: "Citra", course: "Database", completed: true, score: 87, duration: 42 },
    { student: "Dimas", course: "Backend", completed: true, score: 96, duration: 40 },
    { student: "Eka", course: "Database", completed: false, score: 60, duration: 18 },
    { student: "Fajar", course: "Backend", completed: true, score: 82, duration: 35 },
    { student: "Gita", course: "TypeScript", completed: true, score: 88, duration: 36 },
    { student: "Hana", course: "Backend", completed: false, score: 70, duration: 20 }
];

function countTotalEnrollments(data: Enrollment[]): number {
    return data.length;
}

function countCompletedEnrollments(data: Enrollment[]): number {
    let total = 0;

    for (const enrollment of data) {
        if (enrollment.completed) {
            total++;
        }
    }

    return total;
}

function countIncompleteEnrollments(data: Enrollment[]): number {
    return countTotalEnrollments(data) - countCompletedEnrollments(data);
}

function calculateCompletionPercentage(data: Enrollment[]): number {
    if (countTotalEnrollments(data) === 0) {
        return 0;
    }

    return (countCompletedEnrollments(data) / countTotalEnrollments(data)) * 100;
}

function findHighestScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;

    let highest = data[0].score;

    for (const enrollment of data) {
        if (enrollment.score > highest) {
            highest = enrollment.score;
        }
    }

    return highest;
}

function findLowestScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;

    let lowest = data[0].score;

    for (const enrollment of data) {
        if (enrollment.score < lowest) {
            lowest = enrollment.score;
        }
    }

    return lowest;
}

function calculateAverageScore(data: Enrollment[]): number {
    if (data.length === 0) return 0;

    let total = 0;

    for (const enrollment of data) {
        total += enrollment.score;
    }

    return total / data.length;
}

function countPassingStudents(data: Enrollment[]): number {
    let total = 0;

    for (const enrollment of data) {
        if (enrollment.score >= 75) {
            total++;
        }
    }

    return total;
}

function getCourseNames(data: Enrollment[]): string[] {
    const courses: string[] = [];

    for (const enrollment of data) {
        if (!courses.includes(enrollment.course)) {
            courses.push(enrollment.course);
        }
    }

    return courses;
}

function getEnrollmentsByCourse(
    data: Enrollment[],
    courseName: string
): Enrollment[] {
    const result: Enrollment[] = [];

    for (const enrollment of data) {
        if (enrollment.course === courseName) {
            result.push(enrollment);
        }
    }

    return result;
}

function countCourseEnrollments(
    data: Enrollment[],
    courseName: string
): number {
    return getEnrollmentsByCourse(data, courseName).length;
}

function calculateCourseAverageScore(
    data: Enrollment[],
    courseName: string
): number {
    return calculateAverageScore(getEnrollmentsByCourse(data, courseName));
}

function calculateTotalLearningHours(data: Enrollment[]): number {
    let total = 0;

    for (const enrollment of data) {
        total += enrollment.duration;
    }

    return total;
}

function calculateAverageLearningDuration(data: Enrollment[]): number {
    if (countTotalEnrollments(data) === 0) return 0;

    return calculateTotalLearningHours(data) / countTotalEnrollments(data);
}

function printCompletionStatistics(data: Enrollment[]): void {
    console.log(`Total enrollments: ${countTotalEnrollments(data)}`);
    console.log(`Completed enrollments: ${countCompletedEnrollments(data)}`);
    console.log(`Incomplete enrollments: ${countIncompleteEnrollments(data)}`);
    console.log(`Completion percentage: ${calculateCompletionPercentage(data).toFixed(2)}%`);
}

function printAcademicStatistics(data: Enrollment[]): void {
    console.log(`Highest score: ${findHighestScore(data)}`);
    console.log(`Lowest score: ${findLowestScore(data)}`);
    console.log(`Average score: ${calculateAverageScore(data).toFixed(2)}`);
    console.log(`Students with passing scores: ${countPassingStudents(data)}`);
}

function printCourseStatistics(data: Enrollment[]): void {

    for (const course of getCourseNames(data)) {
        console.log(`Course: ${course}`);
        console.log(`Number of students: ${countCourseEnrollments(data, course)}`);
        console.log(`Average score: ${calculateCourseAverageScore(data, course).toFixed(2)}`);
    }
}

function printLearningStatistics(data: Enrollment[]): void {
    console.log(`Total learning hours: ${calculateTotalLearningHours(data)}`);
    console.log(`Average learning duration: ${calculateAverageLearningDuration(data).toFixed(2)} hours`);
}

function printLearningDashboard(data: Enrollment[]): void {
    printCompletionStatistics(data);
    printAcademicStatistics(data);
    printCourseStatistics(data);
    printLearningStatistics(data);
}

printLearningDashboard(enrollments);