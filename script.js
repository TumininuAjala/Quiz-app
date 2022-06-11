// https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple

const _question= document.getElementById('question')
const _options=document.querySelector('.quiz-options');

async function loadQuestion(){
    const APIUrl=' https://opentdb.com/api.php?amount=20&difficulty=medium&type=multiple';
    const result = await fetch('${APIUrl}');
    const data = await result.json();
    // console.log(data);
    showQuestion(data.results[0])
}

function showQuestion(data){
    let correctAnswer = data.correct_answer;
    let incorrectAnswer = data.incorrect_answers;
    let optionList = incorrectAnswer;
    optionList.splice(Math.floor(Math.random()*(incorrectAnswer.length +1)), 0, correctAnswer);
    console.log(optionList)

}

loadQuestion();