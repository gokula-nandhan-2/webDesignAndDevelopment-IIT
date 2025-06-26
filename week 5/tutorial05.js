let count=0;


//question01
let answer1 = prompt("5 + 5 = ");
let cAnswer1=10;
document.getElementById("question1").innerHTML = "5 + 5 = ";
document.getElementById("answer1").innerHTML = answer1;

if(cAnswer1===parseInt(answer1)){
	document.getElementById("feedback1").innerHTML = "&checkmark;"
	document.getElementById("feedback1").classList.add("correct")
	count+=1;
}else{
	let feedback = "The correct answer is 10";
	document.getElementById("feedback1").innerHTML = `&cross; The correct answer is ${cAnswer1}`;
	document.getElementById("feedback1").classList.add("incorrect")
}



//question02
let answer2 = prompt("5 - 5 = ");
let cAnswer2 = 0;
document.getElementById("question2").innerHTML = "5 - 5 = ";
document.getElementById("answer2").innerHTML = answer2;

if(cAnswer2===parseInt(answer2)){
	document.getElementById("feedback2").innerHTML = "&checkmark;"
	document.getElementById("feedback2").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback2").innerHTML = `&cross; The correct answer is ${cAnswer2}`;
	document.getElementById("feedback2").classList.add("incorrect")
}



//question03
let que03 = "5 * 5 = "
let answer3 = prompt(que03);
let cAnswer3 = 25;
document.getElementById("question3").innerHTML = que03;
document.getElementById("answer3").innerHTML = answer3;

if(cAnswer3===parseInt(answer3)){
	document.getElementById("feedback3").innerHTML = "&checkmark;"
	document.getElementById("feedback3").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback3").innerHTML = `&cross; The correct answer is ${cAnswer3}`;
	document.getElementById("feedback3").classList.add("incorrect")
}



//question04
let que04 = "5 / 5 = "
let answer4 = prompt(que04);
let cAnswer4 = 1;
document.getElementById("question4").innerHTML = que04;
document.getElementById("answer4").innerHTML = answer4;

if(cAnswer4===parseInt(answer4)){
	document.getElementById("feedback4").innerHTML = "&checkmark;"
	document.getElementById("feedback4").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback4").innerHTML = `&cross; The correct answer is ${cAnswer4}`;
	document.getElementById("feedback4").classList.add("incorrect")
}



//question05
let que05 = "50 + 50 = "
let answer5 = prompt(que05);
let cAnswer5 = 100;
document.getElementById("question5").innerHTML = que05;
document.getElementById("answer5").innerHTML = answer5;

if(cAnswer5===parseInt(answer5)){
	document.getElementById("feedback5").innerHTML = "&checkmark;"
	document.getElementById("feedback5").classList.add("correct")
	count+=1;
	
}else{
	document.getElementById("feedback5").innerHTML = `&cross; The correct answer is ${cAnswer5}`;
	document.getElementById("feedback5").classList.add("incorrect")
}


//question06
let que06 = "50 - 50 = "
let answer6 = prompt(que06);
let cAnswer6 = 0;
document.getElementById("question6").innerHTML = que06;
document.getElementById("answer6").innerHTML = answer6;

if(cAnswer6===parseInt(answer6)){
	document.getElementById("feedback6").innerHTML = "&checkmark;"
	document.getElementById("feedback6").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback6").innerHTML = `&cross; The correct answer is ${cAnswer6}`;
	document.getElementById("feedback6").classList.add("incorrect")
}



//question07
let que07 = "50 * 50 = "
let answer7 = prompt(que07);
let cAnswer7 = 2500;
document.getElementById("question7").innerHTML = que07;
document.getElementById("answer7").innerHTML = answer7;

if(cAnswer7===parseInt(answer7)){
	document.getElementById("feedback7").innerHTML = "&checkmark;"
	document.getElementById("feedback7").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback7").innerHTML = `&cross; The correct answer is ${cAnswer7}`;
	document.getElementById("feedback7").classList.add("incorrect")
}



//question08
let que08 = "50 / 50 = "
let answer8 = prompt(que08);
let cAnswer8 = 1;
document.getElementById("question8").innerHTML = que08;
document.getElementById("answer8").innerHTML = answer8;

if(cAnswer8===parseInt(answer8)){
	document.getElementById("feedback8").innerHTML = "&checkmark;"
	document.getElementById("feedback8").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback8").innerHTML = `&cross; The correct answer is ${cAnswer8}`;
	document.getElementById("feedback8").classList.add("incorrect")
}



//question09
let que09 = "50 * 0 = "
let answer9 = prompt(que09);
let cAnswer9 = 0;
document.getElementById("question9").innerHTML = que04;
document.getElementById("answer9").innerHTML = answer4;

if(cAnswer9===parseInt(answer9)){
	document.getElementById("feedback9").innerHTML = "&checkmark;"
	document.getElementById("feedback9").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback9").innerHTML = `&cross; The correct answer is ${cAnswer9}`;
	document.getElementById("feedback9").classList.add("incorrect")
}



//question10
let que10 = "0 / 5 = "
let answer10 = prompt(que10);
let cAnswer10 = 0;
document.getElementById("question10").innerHTML = que10;
document.getElementById("answer10").innerHTML = answer10;

if(cAnswer10===parseInt(answer10)){
	document.getElementById("feedback10").innerHTML = "&checkmark;"
	document.getElementById("feedback10").classList.add("correct")
	count+=1;
}else{
	document.getElementById("feedback10").innerHTML = `&cross; The correct answer is ${cAnswer10}`;
	document.getElementById("feedback10").classList.add("incorrect")
}



//score
document.getElementById("score").innerHTML = (count * 10);



