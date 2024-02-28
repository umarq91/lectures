let container = document.querySelector(".container")
let question = document.getElementById("question")
let options = document.querySelector(".options")
let submit = document.getElementById("submit")
let questionNumber = document.getElementById("questionNo")
let score = 0
const questions = [
    {
      question: "What is the syntax to declare an array of objects in JavaScript?",
      options: [
        "var myArray = [];",
        "var myArray = {};",
        "var myArray = [{}];",
        "var myArray = [{}, {}];"
      ],
      answer: "var myArray = [{}, {}];"
    }, {
        question: "How do you access the value of a specific property in an object within an array?",
        options: [
          "myArray[property];",
          "myArray[index].property;",
          "myArray[index]['property'];",
          "myArray.property;"
        ],
        answer: "myArray[index]['property'];"
      },
      {
        question: "How can you add a new object to an existing array of objects?",
        options: [
          "myArray.push({});",
          "myArray.add({});",
          "myArray.insert({});",
          "myArray.append({});"
        ],
        answer: "myArray.push({});"
      },
      {
        question: "What method is used to remove the last object from an array of objects?",
        options: [
          "myArray.pop();",
          "myArray.removeLast();",
          "myArray.deleteLast();",
          "myArray.splice(-1, 1);"
        ],
        answer: "myArray.pop();"
      },
      {
        question: "Which method is used to find the index of a specific object in an array of objects based on a property value?",
        options: [
          "findIndex()",
          "indexOf()",
          "search()",
          "getPropertyIndex()"
        ],
        answer: "findIndex()"
      }
   
  ];


  let currentQuestion = 0 ;

function startQuiz(){
    currentQuestion = 0
    questionNumber.innerText = "Question No  " + Number(currentQuestion + 1)

    loadQuestion()
}

function loadQuestion(){
    questionNumber.innerText = "Question No  " + Number(currentQuestion + 1)
question.innerText = "Q. "+ questions[currentQuestion].question
options.innerHTML = "";// for debugging purpose or cleanup 
questions[currentQuestion].options.forEach((option)=>{
    // making button
let choice = document.createElement("button")
choice.innerText = option
options.appendChild(choice)


choice.addEventListener("click",()=>checkAnswer(option))
})
}


function checkAnswer(userSelected){

if(userSelected === questions[currentQuestion].answer){
    score++
}   
// 0 
currentQuestion++  

if(currentQuestion < questions.length){
    loadQuestion()
}else{
   endGame()
}


}

function endGame(){
    container.innerHTML = `
    <h1> You Scored ${score} out of ${questions.length} </h1>
    
    `
}

submit.onclick = endGame

startQuiz()
