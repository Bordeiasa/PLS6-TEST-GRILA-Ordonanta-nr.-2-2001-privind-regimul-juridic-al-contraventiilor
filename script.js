//Bordeiasa Open Source License Probono NOT MY CODE BRO 
//References
let timeLeft = document.querySelector(".time-left");
let quizContainer = document.getElementById("container");
let nextBtn = document.getElementById("next-button");
let countOfQuestion = document.querySelector(".number-of-question");
let displayContainer = document.getElementById("display-container");
let scoreContainer = document.querySelector(".score-container");
let restart = document.getElementById("restart");
let userScore = document.getElementById("user-score");
let startScreen = document.querySelector(".start-screen");
let startButton = document.getElementById("start-button");
let questionCount;
let scoreCount = 0;
let count = 11;
let countdown;
//Bordeiasa Open Source License Probono NOT MY CODE BRO 
//Questions and Options array
//Bordeiasa Open Source License Probono NOT MY CODE BRO 
const quizArray = [
    {
        id: "0",
        question: "Este sancţiune contravenţională principală:",
        options: ["confiscarea bunurilor destinate, folosite sau rezultate din contravenţii;", "prestarea unei activităţi în folosul comunităţii;", "închiderea unităţii;", "Dl. Tufan number 1;"],
        correct: "prestarea unei activităţi în folosul comunităţii;",
    },
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    {
        id: "1",
        question: "Pentru una şi aceeaşi contravenţie se poate aplica:",
        options: ["numai o sancţiune contravenţională principală şi o sancţiune complementară;", "o sancţiune complementară şi mai multe sancţiuni contravenţionale principale;", "numai o sancţiune contravenţională principală şi una sau mai multe sancţiuni complementare;", "Dl. Tufan best dl dir;"],
        correct: "numai o sancţiune contravenţională principală şi una sau mai multe sancţiuni complementare;",
    },
    {
        id: "2",
        question: "Care din următoarele sancţiuni contravenţionale se poate aplica şi în cazul în care actul normativde stabilire şi sancţionare a contravenţiei nu o prevede în mod expres?",
        options: ["amenda contravenţională;", "avertismentul;", "confiscarea bunurilor destinate, folosite sau rezultate din contravenţii;", "daca nu era dl. Tufan se alegea praful de pls6;"],
        correct: "avertismentul;",
    },
    {
        id: "3",
        question: "Aplicarea sancţiunii amenzii contravenţionale se prescrie în termen de:",
        options: ["6 luni de la data constatării faptei;", "6 luni de la data săvârşirii faptei;", "6 luni de la data încetării săvârşirii faptei, în cazul contravenţiilor continue;", "dl. Tufan best director sa moara sindicatul de ciuda;"],
        correct: "6 luni de la data săvârşirii faptei;",
    },
    {
        id: "4",
        question: "Care dintre următoarele sancţiuni contravenţionale se poate aplica numai contravenienţilorpersoane fizice?",
        options: ["avertismentul;", "prestarea unei activităţi în folosul comunităţii;", "amenda contravenţională;", "dl. Tufan best lider;"],
        correct: "prestarea unei activităţi în folosul comunităţii;",
    },
    {
        id: "5",
        question: "Este sancţiune contravenţională complementară:",
        options: ["prestarea unei activităţi în folosul comunităţii;", "avertismentul;", "confiscarea bunurilor destinate, folosite sau rezultate din contravenţii;", "blocarea contului bancar;"],
        correct: ["confiscarea bunurilor destinate, folosite sau rezultate din contravenţii;", "blocarea contului bancar;"],
    }, {
        id: "6",
        question: "Prestarea unei activităţi în folosul comunităţii poate fi stabilită:",
        options: ["prin hotărâre a consiliului general sau local;", "prin lege şi prin hotărâre a consiliului general sau local;", "numai prin lege;", "Dl. Tufan Best director;"],
        correct: "numai prin lege;",
    },
    {
        id: "7",
        question: "Sancţiunea prestării unei activităţi în folosul comunităţii se stabileşte alternativ cu:",
        options: ["avertismentul;", "amenda;", "cu nici o altă sancţiune contravenţională", "Sa moara sindicatul de ciuda;"],
        correct: "amenda;",
    },
    {
        id: "8",
        question: "În cazul contravenţiilor stabilite prin hotărâri ale consiliilor locale, limita maximă a amenziicontravenţionale poate fi:",
        options: ["50.000 lei;", "5.000 lei;", "2.500 lei;", "Un sindicat in slujba cetateanului;"],
        correct: "2.500 lei;",
    },
    {
        id: "9",
        question: "Cauzele care înlătură caracterul contravenţional al faptei, se constată de:",
        options: ["conducătorul instituţiei din care face parte agentul constatator;", "instanţa de judecată;", "din oficiu;", "Dl Tufan salvatorul pls6;"],
        correct: "instanţa de judecată;",
    },
];

//Restart Quiz
restart.addEventListener("click", () => {
    initial();
    displayContainer.classList.remove("hide");
    scoreContainer.classList.add("hide");
});

//Next Button
nextBtn.addEventListener(
    "click",
    (displayNext = () => {
        //increment questionCount
        questionCount += 1;
        //if last question
        if (questionCount == quizArray.length) {
            //hide question container and display score
            displayContainer.classList.add("hide");
            scoreContainer.classList.remove("hide");
            //user score
            userScore.innerHTML =
                "Your score is " + scoreCount + " out of " + questionCount;
        } else {
            //display questionCount
            countOfQuestion.innerHTML =
                questionCount + 1 + " of " + quizArray.length + " Question";
            //display quiz
            quizDisplay(questionCount);
            count = 11;
            clearInterval(countdown);
            timerDisplay();
        }
    })
);

//Timer
const timerDisplay = () => {
    countdown = setInterval(() => {
        count--;
        timeLeft.innerHTML = `${count}s`;
        if (count == 0) {
            clearInterval(countdown);
            displayNext();
        }
    }, 1000);
};

//Display quiz
const quizDisplay = (questionCount) => {
    let quizCards = document.querySelectorAll(".container-mid");
    //Hide other cards
    quizCards.forEach((card) => {
        card.classList.add("hide");
    });
    //display current question card
    quizCards[questionCount].classList.remove("hide");
};

//Quiz Creation
function quizCreator() {
    //randomly sort questions
    quizArray.sort(() => Math.random() - 0.5);
    //generate quiz
    for (let i of quizArray) {
        //randomly sort options
        i.options.sort(() => Math.random() - 0.5);
        //quiz card creation
        let div = document.createElement("div");
        div.classList.add("container-mid", "hide");
        //question number
        countOfQuestion.innerHTML = 1 + " of " + quizArray.length + " Question";
        //question
        let question_DIV = document.createElement("p");
        question_DIV.classList.add("question");
        question_DIV.innerHTML = i.question;
        div.appendChild(question_DIV);
        //options
        div.innerHTML += `
    <button class="option-div" onclick="checker(this)">${i.options[0]}</button>
     <button class="option-div" onclick="checker(this)">${i.options[1]}</button>
      <button class="option-div" onclick="checker(this)">${i.options[2]}</button>
       <button class="option-div" onclick="checker(this)">${i.options[3]}</button>
    `;
        quizContainer.appendChild(div);
    }
}

//Checker Function to check if option is correct or not
function checker(userOption) {
    let userSolution = userOption.innerText;
    let question =
        document.getElementsByClassName("container-mid")[questionCount];
    let options = question.querySelectorAll(".option-div");

    //if user clicked answer == correct option stored in object
    if (userSolution === quizArray[questionCount].correct) {
        userOption.classList.add("correct");
        scoreCount++;
    } else {
        userOption.classList.add("incorrect");
        //For marking the correct option
        options.forEach((element) => {
            if (element.innerText == quizArray[questionCount].correct) {
                element.classList.add("correct");
            }
        });
    }

    //clear interval(stop timer)
    clearInterval(countdown);
    //disable all options
    options.forEach((element) => {
        element.disabled = true;
    });
}

//initial setup
function initial() {
    quizContainer.innerHTML = "";
    questionCount = 0;
    scoreCount = 0;
    count = 11;
    clearInterval(countdown);
    timerDisplay();
    quizCreator();
    quizDisplay(questionCount);
}

//when user click on start button
startButton.addEventListener("click", () => {
    startScreen.classList.add("hide");
    displayContainer.classList.remove("hide");
    initial();
});

//hide quiz and display start screen
window.onload = () => {
    startScreen.classList.remove("hide");
    displayContainer.classList.add("hide");
};
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 
    //Bordeiasa Open Source License Probono NOT MY CODE BRO 