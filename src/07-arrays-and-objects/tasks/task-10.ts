/**
 * An online exam has students and questions.
 * Tasks:
 * 1. Calculate each student's score (each correct answer get 25 points)
 * 2. Determine each student's correct answer, exp: [{student:"Andi", correct:0, wrong: 4}]
 * 3. Calculate the average score for each category.
 * 4. Generate final exam analytics
 * expeced result: {
        totalStudents: 3,
        averageScore: 66.67,
        highestScore: 100,
        lowestScore: 50,
        passedStudents: 1,
        failedStudents: 2,
        passRate: 33.33
    }
 */
const questions = [
    {
        id: 1,
        question: "What is TypeScript?",
        correctAnswer: "A",
        category: "TypeScript",
    },
    {
        id: 2,
        question: "Which method transforms an array?",
        correctAnswer: "B",
        category: "Array",
    },
    {
        id: 3,
        question: "Which method filters an array?",
        correctAnswer: "C",
        category: "Array",
    },
    {
        id: 4,
        question: "What does reduce() do?",
        correctAnswer: "D",
        category: "Array",
    },
];

const submissions = [
    {
        student: "Andi",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Budi",
        answers: [
            { questionId: 1, answer: "B" },
            { questionId: 2, answer: "B" },
            { questionId: 3, answer: "A" },
            { questionId: 4, answer: "D" },
        ],
    },
    {
        student: "Citra",
        answers: [
            { questionId: 1, answer: "A" },
            { questionId: 2, answer: "C" },
            { questionId: 3, answer: "C" },
            { questionId: 4, answer: "B" },
        ],
    },
];

const studentScores = submissions.map(submission => {
    const correct = submission.answers.filter(answer =>
        questions.some(question =>
            question.id === answer.questionId &&
            question.correctAnswer === answer.answer
        )
    ).length;

    return {
        student: submission.student,
        score: correct * 25,
    };
});

const answerResults = submissions.map(submission => {
    const correct = submission.answers.filter(answer =>
        questions.some(question =>
            question.id === answer.questionId &&
            question.correctAnswer === answer.answer
        )
    ).length;

    return {
        student: submission.student,
        correct,
        wrong: questions.length - correct,
    };
});

const categories = questions
    .map(question => question.category)
    .filter((category, index, categories) => categories.indexOf(category) === index);

const categoryAverages = categories.map(category => {
    const categoryQuestions = questions.filter(question => question.category === category);

    const totalScore = submissions.reduce((total, submission) => {
        const correct = submission.answers.filter(answer =>
            categoryQuestions.some(question =>
                question.id === answer.questionId &&
                question.correctAnswer === answer.answer
            )
        ).length;

        return total + correct * 25;
    }, 0);

    return {
        category,
        averageScore: Number((totalScore / submissions.length).toFixed(2)),
    };
});

const scores = studentScores.map(student => student.score);
const totalStudents = studentScores.length;
const averageScore = scores.reduce((total, score) => total + score, 0) / totalStudents;
const highestScore = Math.max(...scores);
const lowestScore = Math.min(...scores);
const passedStudents = studentScores.filter(student => student.score >= 75).length;
const failedStudents = totalStudents - passedStudents;
const passRate = (passedStudents / totalStudents) * 100;

const examAnalytics = {
    totalStudents,
    averageScore: Number(averageScore.toFixed(2)),
    highestScore,
    lowestScore,
    passedStudents,
    failedStudents,
    passRate: Number(passRate.toFixed(2)),
};

console.log(`Student Scores: ${JSON.stringify(studentScores, null, 2)}`);
console.log(`Answer Results: ${JSON.stringify(answerResults, null, 2)}`);
console.log(`Category Averages: ${JSON.stringify(categoryAverages, null, 2)}`);
console.log(`Final Exam Analytics: ${JSON.stringify(examAnalytics, null, 2)}`);