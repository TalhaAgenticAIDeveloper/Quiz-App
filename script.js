const questions = [
    {
        question: "What is Machine Learning?",
        answers: [
            {text: "A type of washing machine", correct: false},
            {text: "A method to program computers manually", correct: false},
            {text: "A field of study that gives computers the ability to learn without being explicitly programmed", correct: true},
            {text: "A type of artificial intelligence focused on games", correct: false},
        ]
    },
    {
        question: "Which of the following is a type of Machine Learning?",
        answers: [
            {text: "Supervised Learning", correct: true},
            {text: "Unobserved Learning", correct: false},
            {text: "Hardcoded Learning", correct: false},
            {text: "Robotic Learning", correct: false},
        ]
    },
    {
        question: "Which algorithm is used for classification problems?",
        answers: [
            {text: "Linear Regression", correct: false},
            {text: "K-Means", correct: false},
            {text: "Logistic Regression", correct: true},
            {text: "Apriori", correct: false},
        ]
    },
    {
        question: "Which of these is an unsupervised learning algorithm?",
        answers: [
            {text: "Decision Trees", correct: false},
            {text: "K-Means Clustering", correct: true},
            {text: "Random Forest", correct: false},
            {text: "Naive Bayes", correct: false},
        ]
    },
    {
        question: "What is overfitting in Machine Learning?",
        answers: [
            {text: "Model performs well on training data but poorly on new data", correct: true},
            {text: "Model performs poorly on both training and testing data", correct: false},
            {text: "Model performs well on all datasets", correct: false},
            {text: "Model is unable to learn from data", correct: false},
        ]
    },
    {
        question: "Which metric is used to evaluate classification models?",
        answers: [
            {text: "Mean Squared Error", correct: false},
            {text: "Accuracy", correct: true},
            {text: "R-squared", correct: false},
            {text: "RMSE", correct: false},
        ]
    },
    {
        question: "What does a confusion matrix show?",
        answers: [
            {text: "Confused data", correct: false},
            {text: "Performance of a classification model", correct: true},
            {text: "Number of neurons in a neural network", correct: false},
            {text: "Size of training dataset", correct: false},
        ]
    },
    {
        question: "Which library is commonly used for Machine Learning in Python?",
        answers: [
            {text: "NumPy", correct: false},
            {text: "Scikit-learn", correct: true},
            {text: "Matplotlib", correct: false},
            {text: "Requests", correct: false},
        ]
    },
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
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
    questionElement.innerHTML = questionNo + ": " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}


function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
})


showQuestion();