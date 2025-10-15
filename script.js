// --- 1. DATA STRUCTURE ---
const QUIZ_QUESTIONS =[
    {
        "id": 1,
        "question": "What is the largest organ in the human body?",
        "options": ["Heart", "Brain", "Skin", "Liver"],
        "answer": "Skin"
    },
    {
        "id": 2,
        "question": "Which planet is known as the 'Red Planet'?",
        "options": ["Jupiter", "Mars", "Venus", "Saturn"],
        "answer": "Mars"
    },
    {
        "id": 3,
        "question": "Who painted the Mona Lisa?",
        "options": ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        "answer": "Leonardo da Vinci"
    },
    {
        "id": 4,
        "question": "What is the chemical symbol for water?",
        "options": ["O2", "H2O", "CO2", "NaCl"],
        "answer": "H2O"
    },
    {
        "id": 5,
        "question": "Which country is home to the Great Barrier Reef?",
        "options": ["Brazil", "Mexico", "Australia", "South Africa"],
        "answer": "Australia"
    }
];

// --- 2. STATE VARIABLES ---
let currentQuestionIndex = 0;
let score = 0;
const totalQuestions = QUIZ_QUESTIONS.length;

// --- 3. DOM REFERENCES ---
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const statusElement = document.getElementById('question-status');
const questionTextElement = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const finalScoreElement = document.getElementById('final-score');
const quizForm = document.getElementById('quiz-form');


// --- 4. CORE LOGIC FUNCTIONS ---

/**
 * Initializes or resets the quiz state and starts the game.
 */
function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    quizScreen.style.display = 'block';
    resultsScreen.style.display = 'none';
    loadQuestion();
}

/**
 * Loads the current question from the array into the HTML DOM.
 */
function loadQuestion() {
    // Check for quiz end condition
    if (currentQuestionIndex >= totalQuestions) {
        showResults();
        return;
    }

    const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
    
    // Update status and question text
    statusElement.textContent = `Question ${currentQuestionIndex + 1} of ${totalQuestions}`;
    questionTextElement.textContent = currentQ.question;

    // Clear previous options
    optionsContainer.innerHTML = '';

    // Generate new options HTML
    currentQ.options.forEach((option, index) => {
        const optionHtml = `
            <div class="option-container">
                <input type="radio" id="option_${index}" name="option" value="${option}" required>
                <label for="option_${index}">${option}</label>
            </div>
        `;
        optionsContainer.innerHTML += optionHtml;
    });
}

/**
 * Handles the form submission, checks the answer, updates the score, and advances to the next question.
 * @param {Event} event The submission event.
 */
function checkAnswer(event) {
    event.preventDefault(); // Stop the form from refreshing the page

    const formData = new FormData(quizForm);
    const selectedAnswer = formData.get('option');

    if (!selectedAnswer) {
        // Simple console message if no option is selected
        console.log("Please select an answer.");
        return;
    }

    const currentQ = QUIZ_QUESTIONS[currentQuestionIndex];
    
    // Check if the selected answer is correct and update score
    if (selectedAnswer === currentQ.answer) {
        score++;
    }
    
    // Move to the next question
    currentQuestionIndex++;
    loadQuestion();
}

/**
 * Displays the final results screen with the score.
 */
function showResults() {
    quizScreen.style.display = 'none';
    resultsScreen.style.display = 'block';
    finalScoreElement.textContent = `You scored ${score} out of ${totalQuestions}.`;
    
}


// --- 5. INITIALIZATION ---

// Attach the event listener to the form submission
quizForm.addEventListener('submit', checkAnswer);

// Start the quiz when the page loads
document.addEventListener('DOMContentLoaded', startQuiz);
