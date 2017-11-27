const QandA = [
    ['Who is the Pesident?', 'donald trump'],
    ['What year is it?', '2017'],
    ['What is my favorite food?', 'steak'],
    ['What is my favorite footbal team?', 'dallas cowboys'];
    ['What is my favorite color?', 'grey']
]
let totalCorrect = 0;
let totalWrong = 0;
let correct = [];
let wrong = [];
let question;
let answer;
let response;
let html;

const print = (message) => document.write(message);

const buildHTML = (arr) => {
    let list = `<ol>`;
    for (let i = 0; i < arr.length; i++) {
        list += `<li> ${arr[i]} </li>`;
    }
    list += `</ol>`;
    return list;
};

let name = prompt('Before we start the quiz will you enter you name');

for (let i = 0; i < QandA.length; i++) {
    question = QandA[i][0];
    answer = QandA[i][1];
    response = prompt(question + '  Enter "Q" to quit');
    if (response === 'Q') {
        break;
    }
    if (response.toLowerCase() === answer) {
        correct.push(question);
        totalCorrect++;
    } else {
        wrong.push(question);
        totalWrong++;
    }
}

html = `<h2>Hello ${name}, here are the results of your quiz!</h2>`
print(html);
html = `<h3>You got ${totalCorrect} questions correct:</h3> ${buildHTML(correct)}`;
print(html);
html = `<h3>You got ${totalWrong} questions wrong:</h3> ${buildHTML(wrong)}`;
print(html);
