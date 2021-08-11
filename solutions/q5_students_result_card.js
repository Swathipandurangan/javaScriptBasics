// Write a program to display one result card of 100 students
// with their name and percentage
// Out of 100 students, 50 has subjects - Grammer and Accounts
// and other 50 has subjects -  Grammer and Physics

// Hint : You need to calculate percentage of 100 students having different set of subjects.
//        You can assume their scores on their respective subjects.


// Write your code here
class Student {
    constructor(name, scores) {
        this.name = name;
        this.scores = scores;
        this.average = 0;
        this.calculateAverage();
    }
    calculateAverage() {
        if (this.scores && typeof this.scores === 'object') {
            for (let key in this.scores) {
                if (this.scores.hasOwnProperty(key)) {
                    this.average = this.average + this.scores[key];
                }
            }
            this.average = this.average > 0 ? this.average / Object.keys(this.scores).length : 0;
        }
    }
    getName() {
        return this.name;
    }
    getAverage() {
        return this.average;
    }
}

let studentsList = [];
function feedStudentsData() {
    for (let i = 1; i <= 100; i = i + 1) {
        if (i <= 50) {
            studentsList.push(new Student('name' + i, { Grammer: 35 + i, Accounts: 35 + i}));
        } else {
            studentsList.push(
                new Student('name' + i, { Grammer: 20 + i / 2, Physics: 30 + i / 2 }));
        }
    }
}

function getStudentsMarksCard() {
    feedStudentsData();
    for (let i = 0; i < studentsList.length; i = i + 1) {
        console.log(`Student with Name ${studentsList[i].getName()} scored an average of ${studentsList[i].getAverage()}`);
    }
}

getStudentsMarksCard();

