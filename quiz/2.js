var questions = [

   {
    "question": 'Cầu thủ nào có biệt danh là người không phổi?',
    "option1":'ronaldo',
    "option2": 'lampard',
    "option3": 'catona',
    "option4": 'david beckam',
    "answer":"2",
    },

  {
    "question": 'Đội bóng nào vô địch Premier league 2001-2002?',
    "option1":'Manutd',
    "option2": 'Chelsea',
    "option3": 'Livepool',
    "option4": 'Arsenal',
    "answer":"4",
    },

  {
    "question": 'Quốc gia có số lần vô địch World cup nhiều thứ 2?',
    "option1":'Argentina',
    "option2": 'Đức',
    "option3": 'Brazil',
    "option4": 'Pháp',
    "answer":"2",
    },

  {
    "question": 'Câu lạc bộ nào vô địch giải đấu Champion league nhiều nhất?',
    "option1":'Real Madrid',
    "option2": 'Barcelona',
    "option3": 'Ac Milan',
    "option4": 'Bayern Munich',
    "answer":"1",
    },
     {
    "question": 'Trên sân bóng vị trí nào được phép dùng tay chơi bóng?',
    "option1":'tiền đạo',
    "option2": 'thủ môn',
    "option3": 'tiền vệ',
    "option4": 'hậu về',
    "answer":"2",
    }

];




		var currentQuestion = 0;
		var score = 0;
		var toQuestions = questions.length;

		var container = document.getElementById('quizContainer');
		var questionEl = document.getElementById('question');
		var opt1 = document.getElementById('opt1');
		var opt2 = document.getElementById('opt2');
		var opt3 = document.getElementById('opt3');
		var opt4 = document.getElementById('opt4');
		var nextButton = document.getElementById('nextButton');
		var resultCont = document.getElementById('result');
		var selectedOption = document.querySelector('input[type=radio]:checked');
		var trangthai ="lan1";
		var chucmung = document.getElementById('chucmung');
		
		function loadQuestion(questionIndex) {
			var q = questions[questionIndex];
			questionEl.textContent = (questionIndex + 1) + '. '+ q.question;
			opt1.textContent = q.option1;
			opt2.textContent = q.option2;
			opt3.textContent = q.option3;
			opt4.textContent = q.option4;
		};

		function loadNextQuestion (){
			var selectedOption = document.querySelector('input[type=radio]:checked');
			

		if(trangthai == "lan1")
		{
		trangthai ="lan2";
		container.classList.remove('cauthu1');
		container.classList.add('cauthu2');
		
		}
		else if(trangthai== "lan2"){
		trangthai = "lan3";
		container.classList.remove('cauthu2');
		container.classList.add('cauthu3');
		}	
		else if(trangthai== "lan3"){
		trangthai = "lan4";
		container.classList.remove('cauthu3');
		container.classList.add('cauthu4');
		}
		else if(trangthai== "lan4"){
		trangthai = "lan5";
		container.classList.remove('cauthu4');
		container.classList.add('cauthu5');
		}	
			if(!selectedOption){
				alert('Dien');
				return;
			}
			var answer = selectedOption.value;
			if(questions[currentQuestion].answer== answer){
				score +=10;
			}
			selectedOption.checked= false;
			currentQuestion++;
			if(currentQuestion == toQuestions-1){
				nextButton.textContent='Ketthuc';
			}
			if(currentQuestion==toQuestions){
				container.style.display = 'none';
				resultCont.style.display = "";
				resultCont.textContent = 'Diem '+score;
				
				
			}
			if(score==50){
					window.location.href="7.html";
			}
			loadQuestion(currentQuestion);
		}

		loadQuestion(currentQuestion);
