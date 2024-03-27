let grades: number[] = [55, 62, 71, 89, 68, 97];

let averageGrades = grades.reduce((total, grade) => total + grade, 0) / grades.length;

console.log(averageGrades);

