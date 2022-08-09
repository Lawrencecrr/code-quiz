const questionBank = [

    {
        question: 'Who is Ohio States career leader in rushing yards?',
        answersArray: [
            { answer: 'Archie Griffin', correct: true },  // Correct
            { answer: 'Ezekiel Elliott', correct: false },
            { answer: 'Eddie George', correct: false },
            { answer: 'J.K. Dobbins', correct: false }]
    },

    {// Updated 1/30/21
        question: 'Who was the two time Heisman Trophy winner at Ohio State?',
        answersArray: [
            { answer: 'Archie Griffin', correct: true }, // Correct
            { answer: 'Woody Hayes', correct: false },
            { answer: 'Eddie George', correct: false },
            { answer: 'Aubry Taylor', correct: false }]
    },

    { // Updated 1/30/21
        question: 'Who was the Buckeyes coach in 2007?',
        answersArray: [
            { answer: 'Jim Tressel', correct: true },  // Correct
            { answer: 'John Cooper', correct: false },
            { answer: 'Woody Hayes', correct: false },
            { answer: 'Urban Meyer', correct: false }]
    },

    {
        question: 'What is the capacity of Ohio Stadium?',
        answersArray: [
            { answer: '102,780', correct: true },  // Correct
            { answer: '99,015', correct: false },
            { answer: '107,602', correct: false },
            { answer: '110,100', correct: false }]
    },

    {
        question: 'Who was Ohio States opponent when they won their first Rose Bowl in 1950?',
        answersArray: [
            { answer: 'california', correct: true },  // Correct
            { answer: 'oregon', correct: false },
            { answer: 'usc', correct: false },
            { answer: 'Washington', correct: false }]
    }

];

function shuffleQB() {
    // clone questionBank
    let questionBankClone = questionBank;
    // For each question, shuffle answer order
    for (let i = 0; i < questionBankClone.length; i++) {

        let answersArray = questionBankClone[i].answersArray;
        answersArray.sort(() => {
            return (Math.floor(Math.random() * 3) - 1);
        });
    }
    // Shuffle question order
    questionBankClone = questionBankClone.sort(() => {
        return (Math.floor(Math.random() * 3) - 1);
    });
    return questionBankClone;
};