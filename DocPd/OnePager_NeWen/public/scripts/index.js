window.onload = function() {

	// Questions animate «»

	var styleElem = document.head.appendChild(document.createElement("style"));
	var questionContainers = document.getElementsByClassName('question');
	var questions = [
	"« Où puis-je trouver<br> des données<br> d'Enedis ? »",
	"« Où puis-je trouver<br> des explications sur<br> les données ? »",
	"« Comment suivre les<br> mises à jour d'un jeu<br> de données ? »",
	"« Comment enregistrer<br> un fichier en format<br> CSV en UTF-8 ? »",
	"« Publiez-vous les<br> prix de l'électricité / du gaz ?<br> Où puis-je les trouver ? »",
	"« Publiez-vous des<br> données sans<br> licence ? »",
	"« Est-il possible<br> de récolter vos données<br> via API ? »",
	"« C'est quoi une<br> maille IRIS ? »",
	"« Comment puis-je<br> télécharger vos données ? »",
	"« Est-il possible d'utiliser<br> vos données à des<br> fins commerciales ? »",
	"« Est-il possible pour un tiers<br> de commercialiser un service ou<br> une application qui utilise nos données ? »",
	"« Jusqu'à quelle antériorité<br> puis-je consulter les<br> données exposées ? »",
	"« Qu'est ce<br> qu'une licence ? »",
	"« Est-ce que chaque<br> jeu de données<br> possède ses propres<br> API ? »"
	];
	var popedQuestions = [];
	var QuestionsN = 0;

	for(var i = 0; i < questionContainers.length; i++) {
		if(questionContainers[i].innerHTML == "") {
			questionContainers[i].innerHTML = questions[i];
			popedQuestions.push(questions[i]);
		}
	}
	questionContainers[5].style.backgroundColor = "#4A4A4A";
	questionContainers[5].style.color = "white";
	styleElem.innerHTML = "#question6:after {border-top-color: #4A4A4A;}";

	setInterval(function() {
		for(var i = 0; i < questions.length; i++) {
			if(!popedQuestions.includes(questions[i])) {
				for(var j = 0; j < questionContainers.length; j++) {
					questionContainers[j].style.color = "";	
					questionContainers[j].style.backgroundColor = "";	
				}
				questionContainers[QuestionsN].innerHTML = questions[i];
				questionContainers[QuestionsN].style.color = "white";
				questionContainers[QuestionsN].style.backgroundColor = "#4A4A4A";
				styleElem.innerHTML = "#question" + (QuestionsN + 1) + ":after {border-top-color: #4A4A4A;}";
				popedQuestions.push(questions[i]);
				if(popedQuestions.length == questions.length) popedQuestions.shift();
				QuestionsN == 5 ? QuestionsN = 0 : QuestionsN++;
				return;
			}
		}
	}, 3000);

	// SLider animate
	
	var slider = document.getElementById('slider');
	slider.style.transition = 'left 1s';
	slider.style.left = '0%';

	function slide() {
		for(var i = 0; i < dots.length; i++) {
			dots[i].style.backgroundColor = 'white';
		}
		if(slider.style.left == '-200%') {
			slider.style.left = '0%';
			dots[0].style.backgroundColor = '#555';
		}
		else if(slider.style.left == '-100%') {
			slider.style.left = '-200%';
			dots[2].style.backgroundColor = '#555';
		}
		else {
			slider.style.left = '-100%';
			dots[1].style.backgroundColor = '#555';
		}
	}
	var interval = setInterval(function(){slide();}, 5000);

	var slideLeft = document.getElementById('slideLeft');
	var slideRight = document.getElementById('slideRight');
	var dots = document.getElementsByClassName('dot');
	dots[0].style.backgroundColor = '#555';

	slideLeft.addEventListener('click', function() {
		if(slider.style.left == '0%' || slider.style.left == '-100%' || slider.style.left == '-200%') {
			clearInterval(interval);
			for(var i = 0; i < dots.length; i++) {
				dots[i].style.backgroundColor = 'white';
			}
			if(slider.style.left == '-200%') {
				slider.style.left = '-100%';
				dots[1].style.backgroundColor = '#555';
			}
			else if(slider.style.left == '-100%') {
				dots[0].style.backgroundColor = '#555';
				slider.style.left = '0%';
			}
			else {
				slider.style.left = '-200%';
				dots[2].style.backgroundColor = '#555';
			}
			interval = setInterval(function(){slide();}, 8000);
		}
	});

	slideRight.addEventListener('click', function() {
		if(slider.style.left == '0%' || slider.style.left == '-100%' || slider.style.left == '-200%') {
			clearInterval(interval);
			slide();
			interval = setInterval(function(){slide();}, 8000);
		}
	});

	for(var i = 0; i < dots.length; i++) {
		dots[i].addEventListener('click', function() {
			clearInterval(interval);
			for(var i = 0; i < dots.length; i++) {
				dots[i].style.backgroundColor = 'white';
			}
			if(event.target.getAttribute('name') == 'dot0') {
				slider.style.left = '-0%';
				event.target.style.backgroundColor = '#555';
			}
			else if(event.target.getAttribute('name') == 'dot1') {
				slider.style.left = '-100%';
				event.target.style.backgroundColor = '#555';
			}
			else if(event.target.getAttribute('name') == 'dot2') {
				slider.style.left = '-200%';
				event.target.style.backgroundColor = '#555';
			}
			interval = setInterval(function(){slide();}, 8000);
		});
	}
}