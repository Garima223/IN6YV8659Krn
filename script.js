const questions = [{
    question: "Which is the biggest Continent in the world?",

    answers: [
        {
            text: "North-America", correct: false
        },
        {
            text: "Asia", correct: true
        },
        {
            text: "Africa", correct: false
        },
        {
            text: "Australia", correct: false
        }
    ]
}, {
    question: "Which is the longest river in the world?",

    answers: [
        {
            text: "Great Ganga", correct: false
        },
        {
            text: "Nile", correct: true
        },
        {
            text: "Amazon", correct: false
        },
        {
            text: "Niger", correct: false
        }
    ]
},
{
    question: "Which is the largest ocean in the world?",

    answers: [
        {
            text: "India Ocean", correct: false
        },
        {
            text: "Pacific Ocean", correct: true
        },
        {
            text: "Arctic Ocean", correct: false
        },
        {
            text: "Atlantic Ocean", correct: false
        }
    ]
},
{
    question: "Which is India’s first super computer?",

    answers: [
        {
            text: "Param8000", correct: true
        },
        {
            text: "Param80000", correct: false
        },
        {
            text: "Param800", correct: false
        },
        {
            text: "Param8", correct: false
        }
    ]
}, {
    question: "Which bank is called bankers Bank of India? ",

    answers: [
        {
            text: "Reserve Bank Of India", correct: true
        },
        {
            text: "Punjab National Bank", correct: false
        },
        {
            text: "State  Bank Of India", correct: false
        },
        {
            text: "ICICI Bank", correct: false
        }
    ]
},]
const questionElement = document.getElementById("question");
const answerButton = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
let currentQuestionIndex = 0;
let score = 0;
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    showQuestion();

}
function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.
        question;
    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add('btn');
        answerButton.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
    function resetState() {
        nextButton.style.display = "none";
        while (answerButton.firstChild) {
            answerButton.removeChild(answerButton.firstChild)
        }
    }
}
function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    }
    else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButton.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");

        }
        button.disabled = true;
    });
    nextButton.style.display = "block";

}
function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.
    length}!`;
    nextButton.innerHTML = "Start Again";
    nextButton.style.display = "block";
}
function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    }
    else {
        showScore();
    }
}
nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    }
    else {
        startQuiz();
    }
})


startQuiz();
showScore();



