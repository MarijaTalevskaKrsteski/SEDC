// One student has 5 exams in the first semester. His/Her grades for all of the exams are 10, 6, 8, 9, 6 respectively. The professor told the students that for passing the first semester they must have average of 8. The student needs to know whether they have passed the semester or not. Alert on screen if the student pass or not!

let grades = [10,6,8,9,6];
let totalSum=0;

for(i=0; i<grades.length; i++) {
    totalSum += grades[i];
}

let averageSum = totalSum / grades.length;

if(averageSum >= 8) {
    console.log(`The avarage grade from: ${grades} is: ${averageSum}. The student has passed.`);
} else {
    console.log(`The avarage grade from: ${grades} is: ${averageSum}. The student has failed.`);
}