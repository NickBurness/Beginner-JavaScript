const startButton = document.querySelector('.start-button');
const nextButton = document.querySelector('.next-button');
const questionContainerElement = document.querySelector('#question-container');
const questionElement = document.querySelector('#question');
const answerButtonsElement = document.querySelector('#answer-buttons');

let shuffledQuestions, currentQuestionIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    setNextQuestion();
})

function startGame() {
    // console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionIndex]);
}

function showQuestion(question) {
    questionElement.innerHTML = question.question;
    question.answers.forEach(answer => {
        const button = document.createElement('button');
        button.innerText = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct);
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct');
    } else {
        element.classList.add('wrong');
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
}

const questions = [{
        question: 'The song \'An Englishman in New York\' was about which man?',
        answers: [{
                text: 'Quentin Crisp',
                correct: true
            },
            {
                text: 'Sting',
                correct: false
            },
            {
                text: 'John Lennon',
                correct: false
            },
            {
                text: 'David Beckham',
                correct: false
            }
        ]
    },
    {
        question: 'For how long is a dog pregnant?',
        answers: [{
                text: '9 Weeks',
                correct: true
            },
            {
                text: '9 Days',
                correct: false
            },
            {
                text: '9 Months',
                correct: false
            },
            {
                text: '9 Fortnights',
                correct: false
            }
        ]
    },
    {
        question: 'Entomology is the science that studies what?',
        answers: [{
                text: 'Behavior of human beings',
                correct: false
            },
            {
                text: 'Insects',
                correct: true
            },
            {
                text: 'The origin and history of technical and scientific terms',
                correct: false
            },
            {
                text: 'The formation of rocks',
                correct: false
            }
        ]
    }
]