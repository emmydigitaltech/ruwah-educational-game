const song = new Audio();
song.src = "../sounds/song.mp3";
const fail = new Audio();
fail.src = "../sounds/fail.mp3";
const splash = document.querySelector("#splash");
const ratEl = document.getElementById("rat");
const catEl = document.getElementById("cat");



document.addEventListener("DOMContentLoaded", (e)=>{
    setTimeout(()=>{
        splash.classList.add("display-none");
    }, 7000); 
})
const selectLevel = document.querySelector(".select-level")
const instructions = document.querySelector(".instructions");

function lvl(){
    selectLevel.classList.toggle("hidden");
}

function instruct(){
    instructions.classList.toggle("hidden");
}

const quizData = [
  {
    question: 'What is a budget?',
    a: 'A plan for spending all your money impulsively',
    b: 'Allocating funds wisely', 
    c: 'Document for favorite video games',
    correct: "b"

  },
  {
    question: 'What are the three main elements of a budget?',
    a: 'Income, expenses, and investments',
    b: 'Income, toys, and pets', 
    c: 'Income, expenses, and savings',
    correct: "c"
  },
  {
    question: 'Where does income come from?',
    a: 'Outer space',
    b: 'Any money you earn from a range of sources', 
    c: 'A secret treasure chest',
    correct: "b"

  },
  {
    question: 'What are expenses in a budget?',
    a: 'Fun adventures',
    b: 'Dreams and wishes', 
    c: 'Outgoing funds you pay to others',
    correct: "c"

  },
  {
    question: 'What is savings in a budget?',
    a: 'Money for buying candy',
    b: 'Dreams and wishes', 
    c: 'What you have left over after paying your expenses',
    correct: "c"

  },
  {
    question: 'What are the benefits of budgeting?',
    a: 'Gives you control over your money',
    b: 'Having a pet dinosaur',
    c: 'Sleeping all day',
    correct: "a"

  },
  {
    question: 'What does a budget help you save for?',
    a: 'The latest video game',
    b: 'A spaceship',
    c: 'Expected and unexpected costs',
    correct: "c"

  },
  {
    question: 'What is the first stage of successful budgeting?',
    a: 'Understand your money and how you are spending it',
    b: 'Building a spaceship',
    c: 'Going on a magical adventure',
    correct: "a"

  } 
];

const quiz = document.getElementById("quiz")
const answerEls = document.querySelectorAll(".answer")
const questionEl = document.getElementById("question")
const a_text = document.getElementById("a_text")
const b_text = document.getElementById("b_text")
const c_text = document.getElementById("c_text")
const submitBtn = document.getElementById("submit")
const footerEl = document.querySelector("footer")


let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {

  setInterval(() =>{
    song.play()
  }, 133000)

  setTimeout(() =>{
    song.play()
  }, 8000)



  footerShow()

  deselectAnswers();

  const currentQuizData = quizData[currentQuiz]

  questionEl.innerText = currentQuizData.question
  a_text.innerText = currentQuizData.a
  b_text.innerText = currentQuizData.b
  c_text.innerText = currentQuizData.c
}

function deselectAnswers() {
  answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
  let answer
  answerEls.forEach(answerEl => {
    if(answerEl.checked) {
      answer = answerEl.id
    }
  })
  return answer
}


submitBtn.addEventListener("click", () => {
  const answer = getSelected()
  if(answer) {
    if(answer === quizData[currentQuiz].correct) {
      score++
    }

    currentQuiz++

    if(currentQuiz < quizData.length) {
      loadQuiz()
    } else if(score >= quizData.length * 0.7){
      ratEl.style.animationName = "rat-move-forward"
  
      setTimeout(() => {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload</button>`
      }, 3500);
    } 
    else if (score < quizData.length * 0.7) {
      ratEl.style.animationTimingFunction = "5s !important"
      ratEl.style.animationName = "rat-run-back"
      cat.style.animationName = "cat-up"
  
  
      setTimeout(() => {
        fail.play()
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload</button>`
      }, 3500);
    } else {
      setTimeout(() => {
        quiz.innerHTML = `
        <h2>You answered ${score}/${quizData.length} questions correctly</h2>
        
        <button onclick="location.reload()">Reload</button>`
      }, 3500);
    }
  }
});

function footerShow() {
  setInterval(() => {
    footerEl.classList.toggle("footer-active")
  }, 20000);
}