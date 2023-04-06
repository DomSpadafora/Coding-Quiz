let QIndex = 0;
let time = 60;
let score = 0;


const startTimer = () => {
    time--;

    if(time < 1) {
        clearInterval(clockId);
        time = 0;
        endQuiz();
    }
};