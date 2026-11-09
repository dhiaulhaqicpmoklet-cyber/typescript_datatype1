const scores = [
  82,
  91,
  76,
  88,
  69,
  94,
  73,
  85,
  79,
  97
];

function Highest(score:number[]):number{
    let highest = scores[0];
    for (let i = 0; i < score.length; i++) {
        if (score[i] > highest) {
            highest = score[i];
        }
    }
    return highest;
}

function Lowest(score: number[]): number {
    let lowest = score[0];
    for (let i = 0; i < score.length; i++) {
        if (score[i] < lowest) {
            lowest = score[i];
        }
    }
    return lowest;
}

function Average(score:number[]):number{
    let total = 0;
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    return total / scores.length;
}

function Passed(score:number[]):number{
    let count = 0;
    for (let i = 0; i < score.length; i++) {
        if (score[i] >= 75) {
            count++;
        }
    }
    return count;
}

function displayReport(score: number[]): void {
    console.log(`Highest Score: ${Highest(score)}`);
    console.log(`Lowest Score: ${Lowest(score)}`);
    console.log(`Average Score: ${Average(score)}`);
    console.log(`Students Passed: ${Passed(score)}`);
}

displayReport(scores);