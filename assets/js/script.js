let QIndex = 0;
let time = 60;
let score = 0;
let clockId;

const startTimer = () => {
    time--;

    if(time < 1) {
        clearInterval(clockId);
        time = 0;
        endQuiz();
    }
    clock.innerHTML = time;
};

let questions = [
    {
        Q: 'What is the key word to create a variable?',
        A: ['const', 'let', 'var', 'all the above'],
        C: 'all the above',
    },
    {
        Q: 'Which coding language is considered the foundation/structure of a webpage?',
        A: ['HTML', 'CSS', 'JavaScript', 'Python'],
        C: 'HTML',
    }, 
    {
        Q: 'A container object that holds a fixed number of values of a single type is?',
        A: ['array', 'object', 'string', 'boolean'],
        C: 'array',
    }, 
    {
        Q: 'Which primitive type is an expression that evaluates to be either true or false?',
        A: ['number', 'string', 'boolean', 'undefined'],
        C: 'boolean',
    }
    ];





const handleCorrect = () => {
    correct.style.display = 'block';
    setTimeout(()=>correct.style.display = 'none', 1000);
}

const handleIncorrect = () => {
    time -=10;
    clock.innerHTML = time;
    incorrect.style.display = 'block'; 
    setTimeout(()=>incorrect.style.display = 'none', 1000);
};

const handleAnswers = answer => {
    answer==questions[QIndex].C ? handleCorrect() : handleIncorrect();
    QIndex++;
    handleQuestions();
};

const handleQuestions = () => {
    if (QIndex == questions.length)
        return endQuiz();

    let { Q, A } = questions[QIndex];
    card.innerHTML = `<h1>${Q}</h1><div id="answers"></div>`;

    A.forEach(ans => {
        answers.innerHTML += `<button onclick = "handleAnswers('${ans}')" class="answers">${ans}</button>`
    });

}

const endQuiz = () => {
    clearInterval(clockId);
    main.innerHTML = `
        <div id="initialsDiv">
            <h1>All Done!!!</h1>
            <h4>Your score: ${time}</h4>
            <h4>Enter your initials:</h4> 
            <input id='initials' placeholder="AAA"></input>
            <br>
            <button onclick="handleInitials()">Done</button>
        </div>
    `;
    console.log('end of quiz')
}

const beginQuiz = () => {
    handleQuestions();
    clockId = setInterval(startTimer, 1000)

}



begin.addEventListener('click', beginQuiz)