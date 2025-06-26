/*
let x = Math.floor(Math.random()*101);
let y = Math.floor(Math.random()*101);

let count = 0;


//question01
let question1 = `${x} + ${y} = `;
let quiz1 =prompt (question1);
let ans1 = x + y;

document.getElementById("question1").innerHTML = question1 ;
document.getElementById("answer1").innerHTML = quiz1 ;

if(parseInt(quiz1) === ans1){
	document.getElementById("feedback1").innerHTML = "&checkmark;"
	document.getElementById("feedback1").classList.add("correct")
    count++;
}else{
	let feedback = "The correct answer is " + ans1;
	document.getElementById("feedback1").innerHTML = "&cross;" + feedback;
	document.getElementById("feedback1").classList.add("incorrect")
}


//question02
let question2 = `${x} - ${y} = `;
let quiz2 =prompt (question2);
let ans2 = x - y;

document.getElementById("question2").innerHTML = question2 ;
document.getElementById("answer2").innerHTML = quiz2 ;

if(parseInt(quiz2) === ans2){
	document.getElementById("feedback2").innerHTML = "&checkmark;"
	document.getElementById("feedback2").classList.add("correct")
    count++;
}else{
	let feedback = " The correct answer is " + ans2;
	document.getElementById("feedback2").innerHTML = "&cross;" + feedback;
	document.getElementById("feedback2").classList.add("incorrect")
}


let score = count * 10;

if(score<20){
    document.body.style.backgroundColor="#FAA0A0"
}*/


//additional questions
function startQuestion(){
	alert("Quiz started!");
	
	const questions = [];
	const answers = [];
	const correctAnswers = [];
	const operators = [ "+" , "-" , "*" ];
	let count = 0;


	const questionElements = document.getElementsByClassName("question");
	const answerElements = document.getElementsByClassName("answer");
	const feedbackElements = document.getElementsByClassName("feedback");

	for(let i=0 ;i<10; i++){
    	let x = Math.floor(Math.random()*101);
    	let y = Math.floor(Math.random()*101);
    	let operator = operators[Math.floor(Math.random()*operators.length)];
    
    	let displayQuestion = `${x} ${operator} ${y} = `;
    	let userAnswer =parseInt(prompt(displayQuestion));
	
		let correctAnswer;
		switch(operator){
			case "+":
				correctAnswer = x + y;
				break;
			case "-":
				correctAnswer = x - y;
				break;
			case "*":
				correctAnswer = x * y;
				break;
			}
    
		questions.push(displayQuestion);	
		correctAnswers.push(correctAnswer);
		answers.push(userAnswer);

		if (questionElements[i]) {
            questionElements[i].textContent = displayQuestion;
            answerElements[i].textContent = userAnswer;
        }

    	if(userAnswer === correctAnswers[i]){
	    	feedbackElements[i].innerHTML = "&checkmark;"
	    	feedbackElements[i].classList.add("correct")
        	count++;
    	}else{
	    	let feedback = "The correct answer is " + correctAnswers[i];
	    	feedbackElements[i].innerHTML = "&cross;" + feedback;
	    	feedbackElements[i].classList.add("incorrect")
    	}
	}
	alert(`Your final score is ${count * 10}`);
}

document.querySelector("#button").addEventListener("click", startQuestion);