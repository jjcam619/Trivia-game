$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 30,
		reset: function() {
			this.time = 30;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
//				$('.timer').html(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : 'Which Seinfeld writer voiced George Steinbrenner on and off from seasons five through nine?',
	possibleAnswers : ['A. Larry Charles',
				 'B. Peter Mehlman',
				 'C. Larry David',
				 'D. Spike Feresten'],
	flags : [false, false, true, false],
	answer : 'C. Larry David'
};

var q2 = {
	question: 'What Manhattan neighborhood did Jerry reside in?',
	possibleAnswers: ['A. Upper East Side',
				 'B. Upper West Side',
				 'C. Lower East Side',
				 'D. Soho'],
	flags : [false, true, false, false],
	answer : 'B. Upper West Side'
};

var q3 = {
	question : 'Who was Kramers attorney who parodied a member of the O.J. Simpson defense team?',
	possibleAnswers : ['A. Robert Kardashian',
				 'B. Johnnie Cochran',
				 'C. Lee Bailey',
				 'D. Alan Dershowitz'],
	flags : [false, true, false, false],
	answer : 'B. Johnnie Cochran'
};

var q4 = {
	question : 'In season eight, Kramer lost plenty of sleep thanks to what fast-food chains giant neon sign?',
	possibleAnswers : ['A. McDonalds',
				 'B. Boston Market',
				 'C. Dunkin Donuts',
				 'D. Kenny Rogers Roasters'],
	flags : [false, false, false, true],
	answer : 'D. Kenny Rogers Roasters'
};

var q5 = {
	question : 'What activity did Keith Hernandez ask Jerry to do that was over the line?',
	possibleAnswers : ['A. Watch his dog',
				 'B. Go to a wedding',
				 'C. Pick up his laundry',
				 'D. Help him move'],
	flags : [false, false, false, true],
	answer : 'D. Help him move'
};

var q6 = {
	question : 'What does Jerry stand for?',
	possibleAnswers : ['A. Jereth',
				 'B. Jerelyn',
				 'C. Jerald',
				 'D. Jerome'],
	flags : [false, false, false, true],
	answer : 'D. Jerome'
};

var q7 = {
	question : 'Hear ye, hear ye! Its a Festivus for?',
	possibleAnswers : ['A. All eternity',
				 'B. The rest of us!',
				 'C. The ages!',
				 'D. The pair of us!'],
	flags : [false, true, false, false],
	answer : 'B. The rest of us!'
};

var q8 = {
	question : 'George got fired from Pendant Publishing for sleeping with his...?',
	possibleAnswers : ['A. Cleaning lady',
				 'B. Receptionist',
				 'C. Mail lady',
				 'D. Boss'],
	flags : [true, false, false, false],
	answer : 'A. Cleaning lady'
};

var q9 = {
	question : 'Which of Jerrys relatives never appears on-screen?',
	possibleAnswers : ['A. Cousin Jeffrey',
				 'B. Uncle Leo',
				 'C. Nana',
				 'D. Manya'],
	flags : [true, false, false, false],
	answer : 'A. Cousin Jeffrey'
};

var q10 = {
	question : 'Calvin Klein stole Kramers idea for The Beach cologne and renamed it?',
	possibleAnswers : ['A. Hawaii',
				  'B. The Shore',
				  'C. Waves',
				  'D. The Ocean'],
	flags : [false, false, false, true],
	answer : 'D. The Ocean'
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
//  getAnswer();  
//  nextQuestion(index);
}

//function nextQuestion() {
//	index = index++;
//	console.log(index);
//}

function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {

//  nextQuestion();
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();

}


//}
setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});


});