let QIndex = 0;
let time = 60;
let score = 0;

let questions = [
    {
        Q: 'What is the key word to create a variable?',
        A: ['HTML', 'CSS', 'var', 'flexbox'],
        C: 'var',
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

const startTimer = () => {
    time--;

    if(time < 1) {
        clearInterval(clockId);
        time = 0;
        endQuiz();
    }
};

const handleQuestions = () => {

}

const beginQuiz = () => {
    console.log('you clicked me')
    questions();
    clockId = setInterval(startTimer, 1000)

}





start.addEventListener('click', beginQuiz)