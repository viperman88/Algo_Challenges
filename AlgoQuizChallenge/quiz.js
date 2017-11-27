const QandA = [
    ['Who is the Pesident?', 'donald trump'],
    ['What year is it?', '2017'],
    ['What is my favorite food?', 'steak'],
    ['What is my favorite footbal team?', 'dallas cowboys']
]
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

for (let i = 0; i < QandA.length; i++) {
    question = QandA[i][0];
    answer = QandA[i][1];
    response = prompt(question);
    if (response.toLowerCase() === answer) {
        correct.push(question);
    } else {
        wrong.push(question);
    }
}

html = `<h3>These are the questions you got correct:</h3> ${buildHTML(correct)}`;
print(html);
html = `<h3>These are the questions you got wrong:</h3> ${buildHTML(wrong)}`;
print(html);
