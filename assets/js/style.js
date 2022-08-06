const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")
// fix this code
const shuffledQuestions, currentQuestion

startButton.addEventListener("click", startGame)

function startGame() {
    console.log("started")
    startButton.classList.add("hide")
    questionContainerElement.classList.remove("hide")
    setNextQUestion()
}

function selectAnswer() {


}

const questions = [
    {
        question: "which ohio state legend is the only 2 time Heisman Trophy Winner?",
        answers: [
            {text: "troy smith", correct: false}, 
            {text: "archie griffin", correct: true}
        ]
    }
]