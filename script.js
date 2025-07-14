const val = parseInt(Math.floor(1 + Math.random() * 11));


Topic = document.getElementById("Topic");
if (val == 1) {
    Topic.innerHTML = "Machine Learning";
    const questions = [
        {
            question: "What is Machine Learning?",
            answers: [
                { text: "A type of washing machine", correct: false },
                { text: "A method to program computers manually", correct: false },
                { text: "A field of study that gives computers the ability to learn without being explicitly programmed", correct: true },
                { text: "A type of artificial intelligence focused on games", correct: false },
            ]
        },
        {
            question: "Which of the following is a type of Machine Learning?",
            answers: [
                { text: "Supervised Learning", correct: true },
                { text: "Unobserved Learning", correct: false },
                { text: "Hardcoded Learning", correct: false },
                { text: "Robotic Learning", correct: false },
            ]
        },
        {
            question: "Which algorithm is used for classification problems?",
            answers: [
                { text: "Linear Regression", correct: false },
                { text: "K-Means", correct: false },
                { text: "Logistic Regression", correct: true },
                { text: "Apriori", correct: false },
            ]
        },
        {
            question: "Which of these is an unsupervised learning algorithm?",
            answers: [
                { text: "Decision Trees", correct: false },
                { text: "Random Forest", correct: false },
                { text: "Naive Bayes", correct: false },
                { text: "K-Means Clustering", correct: true },
            ]
        },
        {
            question: "What is overfitting in Machine Learning?",
            answers: [
                { text: "Model performs well on training data but poorly on new data", correct: true },
                { text: "Model performs poorly on both training and testing data", correct: false },
                { text: "Model performs well on all datasets", correct: false },
                { text: "Model is unable to learn from data", correct: false },
            ]
        },
        {
            question: "Which metric is used to evaluate classification models?",
            answers: [
                { text: "Mean Squared Error", correct: false },
                { text: "Accuracy", correct: true },
                { text: "R-squared", correct: false },
                { text: "RMSE", correct: false },
            ]
        },
        {
            question: "What does a confusion matrix show?",
            answers: [
                { text: "Confused data", correct: false },
                { text: "Number of neurons in a neural network", correct: false },
                { text: "Size of training dataset", correct: false },
                { text: "Performance of a classification model", correct: true },
            ]
        },
        {
            question: "Which library is commonly used for Machine Learning in Python?",
            answers: [
                { text: "NumPy", correct: false },
                { text: "Scikit-learn", correct: true },
                { text: "Matplotlib", correct: false },
                { text: "Requests", correct: false },
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 2) {
    Topic.innerHTML = "Web Development";

    const questions = [
        {
            question: "What does HTML stand for?",
            answers: [
                { text: "Hyper Trainer Marking Language", correct: false },
                { text: "Hyper Text Markup Language", correct: true },
                { text: "Hyper Text Marketing Language", correct: false },
                { text: "High Text Markup Language", correct: false },
            ]
        },
        {
            question: "Which CSS property is used to change text color?",
            answers: [
                { text: "font-color", correct: false },
                { text: "text-style", correct: false },
                { text: "color", correct: true },
                { text: "text-color", correct: false },
            ]
        },
        {
            question: "Which HTML tag is used to create a hyperlink?",
            answers: [
                { text: "&lt;a&gt;", correct: true },
                { text: "&lt;link&gt;", correct: false },
                { text: "&lt;href&gt;", correct: false },
                { text: "&lt;url&gt;", correct: false },
            ]
        },
        {
            question: "Which language runs in the browser?",
            answers: [
                { text: "Python", correct: false },
                { text: "C++", correct: false },
                { text: "Java", correct: false },
                { text: "JavaScript", correct: true },
            ]
        },
        {
            question: "What does CSS stand for?",
            answers: [
                { text: "Cascading Style Sheets", correct: true },
                { text: "Computer Style Sheets", correct: false },
                { text: "Creative Style Sheets", correct: false },
                { text: "Colorful Style Sheets", correct: false },
            ]
        },
        {
            question: "What is the correct HTML element for inserting a line break?",
            answers: [
                { text: "&lt;lb&gt;", correct: false },
                { text: "&lt;break&gt;", correct: false },
                { text: "&lt;newline&gt;", correct: false },
                { text: "&lt;br&gt;", correct: true },
            ]
        },
        {
            question: "Which tag is used to include JavaScript in HTML?",
            answers: [
                { text: "&lt;javascript&gt;", correct: false },
                { text: "&lt;js&gt;", correct: false },
                { text: "&lt;script&gt;", correct: true },
                { text: "&lt;code&gt;", correct: false },
            ]
        },
        {
            question: "Which HTML attribute is used to define inline styles?",
            answers: [
                { text: "class", correct: false },
                { text: "style", correct: true },
                { text: "font", correct: false },
                { text: "css", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 3) {
    Topic.innerHTML = "Data Structures";

    const questions = [
        {
            question: "Which data structure uses FIFO (First In, First Out)?",
            answers: [
                { text: "Stack", correct: false },
                { text: "Queue", correct: true },
                { text: "Tree", correct: false },
                { text: "Graph", correct: false },
            ]
        },
        {
            question: "What is the time complexity of binary search on a sorted array?",
            answers: [
                { text: "O(n)", correct: false },
                { text: "O(n^2)", correct: false },
                { text: "O(1)", correct: false },
                { text: "O(log n)", correct: true },
            ]
        },
        {
            question: "Which data structure uses LIFO (Last In, First Out)?",
            answers: [
                { text: "Queue", correct: false },
                { text: "Array", correct: false },
                { text: "Stack", correct: true },
                { text: "Linked List", correct: false },
            ]
        },
        {
            question: "Which of the following is a non-linear data structure?",
            answers: [
                { text: "Array", correct: false },
                { text: "Tree", correct: true },
                { text: "Linked List", correct: false },
                { text: "Queue", correct: false },
            ]
        },
        {
            question: "What is the worst-case time complexity of quicksort?",
            answers: [
                { text: "O(n log n)", correct: false },
                { text: "O(log n)", correct: false },
                { text: "O(n)", correct: false },
                { text: "O(n^2)", correct: true },
            ]
        },
        {
            question: "Which algorithm is used to find the shortest path in a weighted graph?",
            answers: [
                { text: "Binary Search", correct: false },
                { text: "Depth-First Search", correct: false },
                { text: "Dijkstra's Algorithm", correct: true },
                { text: "Merge Sort", correct: false },
            ]
        },
        {
            question: "What is a hash table used for?",
            answers: [
                { text: "Fast data retrieval using keys", correct: true },
                { text: "Storing data in order", correct: false },
                { text: "Compressing data", correct: false },
                { text: "Sorting elements", correct: false },
            ]
        },
        {
            question: "Which traversal method is used to visit all nodes of a binary tree in sorted order?",
            answers: [
                { text: "Preorder", correct: false },
                { text: "Inorder", correct: true },
                { text: "Postorder", correct: false },
                { text: "Level-order", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 4) {
    Topic.innerHTML = "General Knowledge";

    const questions = [
        {
            question: "What is the largest continent in the world?",
            answers: [
                { text: "Africa", correct: false },
                { text: "Asia", correct: true },
                { text: "Europe", correct: false },
                { text: "North America", correct: false },
            ]
        },
        {
            question: "Who wrote the play 'Romeo and Juliet'?",
            answers: [
                { text: "Leo Tolstoy", correct: false },
                { text: "Charles Dickens", correct: false },
                { text: "William Shakespeare", correct: true },
                { text: "Jane Austen", correct: false },
            ]
        },
        {
            question: "What is the capital city of Japan?",
            answers: [
                { text: "Tokyo", correct: true },
                { text: "Beijing", correct: false },
                { text: "Seoul", correct: false },
                { text: "Bangkok", correct: false },
            ]
        },
        {
            question: "Which planet is known as the Red Planet?",
            answers: [
                { text: "Venus", correct: false },
                { text: "Jupiter", correct: false },
                { text: "Saturn", correct: false },
                { text: "Mars", correct: true },
            ]
        },
        {
            question: "How many players are there in a football (soccer) team on the field?",
            answers: [
                { text: "9", correct: false },
                { text: "10", correct: false },
                { text: "11", correct: true },
                { text: "12", correct: false },
            ]
        },
        {
            question: "What is the national language of Pakistan?",
            answers: [
                { text: "Punjabi", correct: false },
                { text: "Urdu", correct: true },
                { text: "Sindhi", correct: false },
                { text: "Pashto", correct: false },
            ]
        },
        {
            question: "Which ocean is the largest?",
            answers: [
                { text: "Atlantic Ocean", correct: false },
                { text: "Indian Ocean", correct: false },
                { text: "Arctic Ocean", correct: false },
                { text: "Pacific Ocean", correct: true },
            ]
        },
        {
            question: "What is the currency of the United Kingdom?",
            answers: [
                { text: "Pound Sterling", correct: true },
                { text: "Euro", correct: false },
                { text: "Dollar", correct: false },
                { text: "Franc", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 5) {

    Topic.innerHTML = "Python Programming";

    const questions = [
        {
            question: "Which keyword is used to define a function in Python?",
            answers: [
                { text: "def", correct: true },
                { text: "function", correct: false },
                { text: "fun", correct: false },
                { text: "define", correct: false },
            ]
        },
        {

            question: "What is the output of: print(type([]))?",
            answers: [
                { text: "&lt;class 'list'&gt;", correct: true },
                { text: "&lt;class 'tuple'&gt;", correct: false },
                { text: "&lt;class 'dict'&gt;", correct: false },
                { text: "&lt;class 'set'&gt;", correct: false },
            ]


        },
        {
            question: "How do you insert comments in Python code?",
            answers: [
                { text: "// This is a comment", correct: false },
                { text: "/* This is a comment */", correct: false },
                { text: "# This is a comment", correct: true },
                { text: "&lt;!-- This is a comment --&gt;", correct: false },
            ]
        },
        {
            question: "Which of these is not a Python data type?",
            answers: [
                { text: "list", correct: false },
                { text: "tuple", correct: false },
                { text: "set", correct: false },
                { text: "array", correct: true },
            ]
        },
        {
            question: "Which function is used to get input from the user?",
            answers: [
                { text: "input()", correct: true },
                { text: "scan()", correct: false },
                { text: "get()", correct: false },
                { text: "read()", correct: false },
            ]
        },
        {
            question: "What is the correct file extension for Python files?",
            answers: [
                { text: ".pt", correct: false },
                { text: ".pyt", correct: false },
                { text: ".python", correct: false },
                { text: ".py", correct: true },
            ]
        },
        {
            question: "How do you start a for loop in Python?",
            answers: [
                { text: "for i in range(5):", correct: true },
                { text: "for(i = 0; i < 5; i++)", correct: false },
                { text: "foreach i in range(5)", correct: false },
                { text: "loop i from 1 to 5", correct: false },
            ]
        },
        {
            question: "Which keyword is used for exception handling in Python?",
            answers: [
                { text: "catch", correct: false },
                { text: "handle", correct: false },
                { text: "try", correct: true },
                { text: "error", correct: false },
            ]
        },
        {
            question: "Which method adds an item to the end of a list?",
            answers: [
                { text: "add()", correct: false },
                { text: "append()", correct: true },
                { text: "insert()", correct: false },
                { text: "extend()", correct: false },
            ]
        },
        {
            question: "What is the output of: bool('False')?",
            answers: [
                { text: "False", correct: false },
                { text: "None", correct: false },
                { text: "Error", correct: false },
                { text: "True", correct: true },
            ]
        },
        {
            question: "How do you create a dictionary in Python?",
            answers: [
                { text: "{}", correct: true },
                { text: "[]", correct: false },
                { text: "<>", correct: false },
                { text: "()", correct: false },
            ]
        },
        {
            question: "What does the 'len()' function do?",
            answers: [
                { text: "Returns the size of memory", correct: false },
                { text: "Returns the length of an object", correct: true },
                { text: "Returns type of object", correct: false },
                { text: "Returns error type", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 6) {

    Topic.innerHTML = "Computer Networks";

    const questions = [
        {
            question: "What does IP stand for in networking?",
            answers: [
                { text: "Internet Protocol", correct: true },
                { text: "Internal Path", correct: false },
                { text: "Internet Port", correct: false },
                { text: "Information Protocol", correct: false },
            ]
        },
        {
            question: "Which device forwards data packets between networks?",
            answers: [
                { text: "Switch", correct: false },
                { text: "Modem", correct: false },
                { text: "Router", correct: true },
                { text: "Repeater", correct: false },
            ]
        },
        {
            question: "Which layer of the OSI model is responsible for end-to-end communication?",
            answers: [
                { text: "Network layer", correct: false },
                { text: "Session layer", correct: false },
                { text: "Data link layer", correct: false },
                { text: "Transport layer", correct: true },
            ]
        },
        {
            question: "Which protocol is used to send emails?",
            answers: [
                { text: "HTTP", correct: false },
                { text: "SMTP", correct: true },
                { text: "FTP", correct: false },
                { text: "SNMP", correct: false },
            ]
        },
        {
            question: "What is the default port number for HTTP?",
            answers: [
                { text: "443", correct: false },
                { text: "21", correct: false },
                { text: "25", correct: false },
                { text: "80", correct: true },
            ]
        },
        {
            question: "Which protocol is used to assign IP addresses automatically?",
            answers: [
                { text: "DHCP", correct: true },
                { text: "DNS", correct: false },
                { text: "ARP", correct: false },
                { text: "ICMP", correct: false },
            ]
        },
        {
            question: "Which of the following is a private IP address?",
            answers: [
                { text: "8.8.8.8", correct: false },
                { text: "172.0.0.1", correct: false },
                { text: "192.168.1.1", correct: true },
                { text: "203.0.113.1", correct: false },
            ]
        },
        {
            question: "What does DNS stand for?",
            answers: [
                { text: "Domain Name System", correct: true },
                { text: "Data Network Service", correct: false },
                { text: "Domain Network Setup", correct: false },
                { text: "Digital Name Server", correct: false },
            ]
        },
        {
            question: "Which network topology has a central hub?",
            answers: [
                { text: "Mesh", correct: false },
                { text: "Ring", correct: false },
                { text: "Bus", correct: false },
                { text: "Star", correct: true },
            ]
        },
        {
            question: "What is the function of a switch in networking?",
            answers: [
                { text: "Provides internet connection", correct: false },
                { text: "Transfers data between devices within the same network", correct: true },
                { text: "Connects different networks", correct: false },
                { text: "Amplifies network signal", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 7) {

    Topic.innerHTML = "Cybersecurity";


    const questions = [
        {
            question: "What does 'cybersecurity' primarily protect?",
            answers: [
                { text: "Physical buildings", correct: false },
                { text: "Wires and cables", correct: false },
                { text: "Office furniture", correct: false },
                { text: "Computer systems and data", correct: true },
            ]
        },
        {
            question: "What is a strong password made of?",
            answers: [
                { text: "Only lowercase letters", correct: false },
                { text: "Your birthdate", correct: false },
                { text: "A mix of letters, numbers, and symbols", correct: true },
                { text: "Simple dictionary words", correct: false },
            ]
        },
        {
            question: "What is phishing?",
            answers: [
                { text: "A hacking tool", correct: false },
                { text: "A type of firewall", correct: false },
                { text: "Tricking users into revealing personal information", correct: true },
                { text: "Blocking malware", correct: false },
            ]
        },
        {
            question: "What does a firewall do?",
            answers: [
                { text: "Blocks unauthorized access to a network", correct: true },
                { text: "Detects hard drive errors", correct: false },
                { text: "Speeds up your internet", correct: false },
                { text: "Creates backups", correct: false },
            ]
        },
        {
            question: "What is malware?",
            answers: [
                { text: "A secure software", correct: false },
                { text: "A type of antivirus", correct: false },
                { text: "A backup tool", correct: false },
                { text: "Malicious software designed to harm", correct: true },
            ]
        },
        {
            question: "Which of the following is a type of malware?",
            answers: [
                { text: "Firewall", correct: false },
                { text: "Trojan Horse", correct: true },
                { text: "VPN", correct: false },
                { text: "Cloud Storage", correct: false },
            ]
        },
        {
            question: "What is two-factor authentication (2FA)?",
            answers: [
                { text: "Using a strong password", correct: false },
                { text: "Using two devices at once", correct: false },
                { text: "Changing passwords monthly", correct: false },
                { text: "A second layer of security like OTP or biometric", correct: true },
            ]
        },
        {
            question: "What does VPN stand for?",
            answers: [
                { text: "Virtual Private Network", correct: true },
                { text: "Verified Personal Node", correct: false },
                { text: "Virtual Protocol Network", correct: false },
                { text: "Visual Protection Number", correct: false },
            ]
        },
        {
            question: "What is ransomware?",
            answers: [
                { text: "A virus that deletes files", correct: false },
                { text: "Software that slows down your PC", correct: false },
                { text: "Malware that locks data until payment is made", correct: true },
                { text: "A type of antivirus software", correct: false },
            ]
        },
        {
            question: "How often should you update your software to stay secure?",
            answers: [
                { text: "Only when the computer crashes", correct: false },
                { text: "As soon as updates are available", correct: true },
                { text: "Never", correct: false },
                { text: "Once a year", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 8) {

    Topic.innerHTML = "Artificial Intelligence (AI)";

    const questions = [
        {
            question: "What is Artificial Intelligence (AI)?",
            answers: [
                { text: "Simulating human intelligence using machines", correct: true },
                { text: "Programming with HTML and CSS", correct: false },
                { text: "Building robots only", correct: false },
                { text: "An advanced video game", correct: false },
            ]
        },
        {
            question: "Which of the following is an application of AI?",
            answers: [
                { text: "Air conditioners", correct: false },
                { text: "Microwave ovens", correct: false },
                { text: "Voice Assistants", correct: true },
                { text: "Electric bulbs", correct: false },
            ]
        },
        {
            question: "Which programming language is most commonly used in AI development?",
            answers: [
                { text: "HTML", correct: false },
                { text: "Python", correct: true },
                { text: "CSS", correct: false },
                { text: "SQL", correct: false },
            ]
        },
        {
            question: "What is a neural network?",
            answers: [
                { text: "A social network", correct: false },
                { text: "A network of physical wires", correct: false },
                { text: "A computer virus", correct: false },
                { text: "A model inspired by the human brain", correct: true },
            ]
        },
        {
            question: "What is the purpose of training data in AI?",
            answers: [
                { text: "To connect to the internet", correct: false },
                { text: "To clean the hard disk", correct: false },
                { text: "To build websites", correct: false },
                { text: "To teach models to make predictions", correct: true },
            ]
        },
        {
            question: "Which of these is an AI technique that mimics human decision-making?",
            answers: [
                { text: "Wi-Fi routers", correct: false },
                { text: "Decision Trees", correct: true },
                { text: "Web scraping", correct: false },
                { text: "Cloud storage", correct: false },
            ]
        },
        {
            question: "What is reinforcement learning?",
            answers: [
                { text: "Learning by watching videos", correct: false },
                { text: "Memorizing answers", correct: false },
                { text: "Learning from rewards and punishments", correct: true },
                { text: "Copying another AI model", correct: false },
            ]
        },
        {
            question: "What is the full form of NLP in AI?",
            answers: [
                { text: "Natural Language Processing", correct: true },
                { text: "New Learning Protocol", correct: false },
                { text: "Non-Linear Programming", correct: false },
                { text: "Neural Link Processor", correct: false },
            ]
        },
        {
            question: "Which of these is an example of computer vision?",
            answers: [
                { text: "Playing music", correct: false },
                { text: "Browsing the internet", correct: false },
                { text: "Typing a document", correct: false },
                { text: "Recognizing faces in images", correct: true },
            ]
        },
        {
            question: "Which of the following is a real AI framework or library?",
            answers: [
                { text: "TensorFlow", correct: true },
                { text: "PhotoShop", correct: false },
                { text: "WinRAR", correct: false },
                { text: "Excel", correct: false },
            ]
        },
        {
            question: "What is the difference between AI and Machine Learning?",
            answers: [
                { text: "AI is a subset of ML", correct: false },
                { text: "They are the same", correct: false },
                { text: "ML is a subset of AI", correct: true },
                { text: "ML is used only in robotics", correct: false },
            ]
        },
        {
            question: "Which company developed ChatGPT?",
            answers: [
                { text: "Google", correct: false },
                { text: "Microsoft", correct: false },
                { text: "Amazon", correct: false },
                { text: "OpenAI", correct: true },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 9) {

    Topic.innerHTML = "Mathematics";

    const questions = [
        {
            question: "What is the value of π (pi) approximately?",
            answers: [
                { text: "2.14", correct: false },
                { text: "4.13", correct: false },
                { text: "3.14", correct: true },
                { text: "1.41", correct: false },
            ]
        },
        {
            question: "What is 7 × 8?",
            answers: [
                { text: "56", correct: true },
                { text: "48", correct: false },
                { text: "64", correct: false },
                { text: "58", correct: false },
            ]
        },
        {
            question: "What is the square root of 144?",
            answers: [
                { text: "10", correct: false },
                { text: "11", correct: false },
                { text: "12", correct: true },
                { text: "13", correct: false },
            ]
        },
        {
            question: "What is the area of a circle with radius 3?",
            answers: [
                { text: "6π", correct: false },
                { text: "9π", correct: true },
                { text: "3π", correct: false },
                { text: "12π", correct: false },
            ]
        },
        {
            question: "What is the solution to the equation: x + 5 = 12?",
            answers: [
                { text: "x = 6", correct: false },
                { text: "x = 8", correct: false },
                { text: "x = 9", correct: false },
                { text: "x = 7", correct: true },
            ]
        },
        {
            question: "What is 25% of 200?",
            answers: [
                { text: "25", correct: false },
                { text: "75", correct: false },
                { text: "50", correct: true },
                { text: "100", correct: false },
            ]
        },
        {
            question: "What is the probability of getting a head in a fair coin toss?",
            answers: [
                { text: "1", correct: false },
                { text: "0.25", correct: false },
                { text: "2", correct: false },
                { text: "0.5", correct: true },
            ]
        },
        {
            question: "What is the derivative of x²?",
            answers: [
                { text: "2x", correct: true },
                { text: "x", correct: false },
                { text: "x²", correct: false },
                { text: "2", correct: false },
            ]
        },
        {
            question: "What is the value of 2⁴?",
            answers: [
                { text: "6", correct: false },
                { text: "16", correct: true },
                { text: "8", correct: false },
                { text: "14", correct: false },
            ]
        },
        {
            question: "What shape has 3 sides?",
            answers: [
                { text: "Square", correct: false },
                { text: "Rectangle", correct: false },
                { text: "Circle", correct: false },
                { text: "Triangle", correct: true },
            ]
        },
        {
            question: "If a triangle has angles 90°, 45°, and 45°, what type of triangle is it?",
            answers: [
                { text: "Isosceles Right Triangle", correct: true },
                { text: "Equilateral", correct: false },
                { text: "Scalene", correct: false },
                { text: "Acute", correct: false },
            ]
        },
        {
            question: "What is 3! (3 factorial)?",
            answers: [
                { text: "3", correct: false },
                { text: "9", correct: false },
                { text: "12", correct: false },
                { text: "6", correct: true },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else if (val == 10) {

    Topic.innerHTML = "Operating Systems";

    const questions = [
        {
            question: "What is an Operating System?",
            answers: [
                { text: "A hardware device", correct: false },
                { text: "A programming language", correct: false },
                { text: "A web browser", correct: false },
                { text: "A type of software that manages hardware and software resources", correct: true },
            ]
        },
        {
            question: "Which of the following is **not** an operating system?",
            answers: [
                { text: "Windows", correct: false },
                { text: "Oracle", correct: true },
                { text: "Linux", correct: false },
                { text: "macOS", correct: false },
            ]
        },
        {
            question: "Which part of the OS is responsible for managing processes?",
            answers: [
                { text: "Kernel", correct: true },
                { text: "Shell", correct: false },
                { text: "Hardware", correct: false },
                { text: "BIOS", correct: false },
            ]
        },
        {
            question: "What is the purpose of a scheduler in an operating system?",
            answers: [
                { text: "To manage RAM", correct: false },
                { text: "To control device drivers", correct: false },
                { text: "To decide which process runs next", correct: true },
                { text: "To manage system files", correct: false },
            ]
        },
        {
            question: "What is a deadlock?",
            answers: [
                { text: "A program that runs forever", correct: false },
                { text: "A condition where processes wait forever for resources", correct: true },
                { text: "A type of malware", correct: false },
                { text: "A system crash", correct: false },
            ]
        },
        {
            question: "What does a file system do?",
            answers: [
                { text: "Deletes files", correct: false },
                { text: "Organizes and manages files on a storage device", correct: true },
                { text: "Monitors internet speed", correct: false },
                { text: "Updates the OS", correct: false },
            ]
        },
        {
            question: "Which of the following is a Linux command to list files?",
            answers: [
                { text: "dir", correct: false },
                { text: "list", correct: false },
                { text: "ls", correct: true },
                { text: "show", correct: false },
            ]
        },
        {
            question: "What is virtual memory?",
            answers: [
                { text: "A portion of the hard disk used as RAM", correct: true },
                { text: "A flash drive", correct: false },
                { text: "Memory on the graphics card", correct: false },
                { text: "ROM memory used for booting", correct: false },
            ]
        },
        {
            question: "Which of the following is used for multitasking?",
            answers: [
                { text: "Compilers", correct: false },
                { text: "Formatting", correct: false },
                { text: "Data structures", correct: false },
                { text: "Threading", correct: true },
            ]
        },
        {
            question: "Which operating system is open-source?",
            answers: [
                { text: "Windows", correct: false },
                { text: "macOS", correct: false },
                { text: "Linux", correct: true },
                { text: "DOS", correct: false },
            ]
        },
        {
            question: "What is the function of BIOS?",
            answers: [
                { text: "Runs internet", correct: false },
                { text: "Manages virtual machines", correct: false },
                { text: "Performs hardware initialization during booting", correct: true },
                { text: "Manages apps", correct: false },
            ]
        },
        {
            question: "Which command is used to shut down a Windows computer from the command line?",
            answers: [
                { text: "exit", correct: false },
                { text: "shutdown /s", correct: true },
                { text: "poweroff", correct: false },
                { text: "halt", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();


} else {

    Topic.innerHTML = "Cloud Computing";

    const questions = [
        {
            question: "What is cloud computing?",
            answers: [
                { text: "Storing data on local devices", correct: false },
                { text: "Computing on satellite systems", correct: false },
                { text: "Delivering computing services over the internet", correct: true },
                { text: "Sending emails using the cloud", correct: false },
            ]
        },
        {
            question: "Which of the following is a cloud service model?",
            answers: [
                { text: "IaaS", correct: true },
                { text: "HTTP", correct: false },
                { text: "SMTP", correct: false },
                { text: "SQL", correct: false },
            ]
        },
        {
            question: "What does SaaS stand for?",
            answers: [
                { text: "Storage as a Software", correct: false },
                { text: "Server as a Software", correct: false },
                { text: "System as a Server", correct: false },
                { text: "Software as a Service", correct: true },
            ]
        },
        {
            question: "Which of these is a popular cloud platform?",
            answers: [
                { text: "Ubuntu", correct: false },
                { text: "AWS", correct: true },
                { text: "Firefox", correct: false },
                { text: "MySQL", correct: false },
            ]
        },
        {
            question: "What does PaaS provide?",
            answers: [
                { text: "Platform to build and deploy applications", correct: true },
                { text: "Virtual machines only", correct: false },
                { text: "Networking devices", correct: false },
                { text: "Operating systems only", correct: false },
            ]
        },
        {
            question: "What is a benefit of cloud computing?",
            answers: [
                { text: "Higher electricity costs", correct: false },
                { text: "Manual software installation", correct: false },
                { text: "Data loss guarantee", correct: false },
                { text: "Scalability and flexibility", correct: true },
            ]
        },
        {
            question: "Which company provides Azure cloud services?",
            answers: [
                { text: "Amazon", correct: false },
                { text: "Google", correct: false },
                { text: "Microsoft", correct: true },
                { text: "IBM", correct: false },
            ]
        },
        {
            question: "What does 'public cloud' mean?",
            answers: [
                { text: "Cloud inside your PC", correct: false },
                { text: "Cloud resources shared over the internet", correct: true },
                { text: "Cloud for one organization only", correct: false },
                { text: "Cloud you buy at a store", correct: false },
            ]
        },
        {
            question: "What is cloud storage?",
            answers: [
                { text: "Storage accessible over the internet", correct: true },
                { text: "Storage in a physical hard disk", correct: false },
                { text: "Storage in CDs", correct: false },
                { text: "RAM storage", correct: false },
            ]
        },
        {
            question: "Which service is used for storing files in Google Cloud?",
            answers: [
                { text: "Google Docs", correct: false },
                { text: "Google Maps", correct: false },
                { text: "Google Chrome", correct: false },
                { text: "Google Cloud Storage", correct: true },
            ]
        },
        {
            question: "Which cloud model gives users control over infrastructure?",
            answers: [
                { text: "IaaS", correct: true },
                { text: "PaaS", correct: false },
                { text: "SaaS", correct: false },
                { text: "FaaS", correct: false },
            ]
        },
        {
            question: "Which of the following is **not** a benefit of cloud computing?",
            answers: [
                { text: "Pay-as-you-go pricing", correct: false },
                { text: "Global accessibility", correct: false },
                { text: "Limited scalability", correct: true },
                { text: "Disaster recovery", correct: false },
            ]
        }
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

    nextButton.addEventListener("click", () => {
        if (currentQuestionIndex < questions.length) {
            handleNextButton();
        } else {
            startQuiz();
        }
    })


    showQuestion();

}
