window.onload = function() {

	var chat = document.createElement('div');
	chat.setAttribute('id', 'chat');
	document.body.appendChild(chat);
	var chatBody = document.createElement('div');
	chatBody.setAttribute('id', 'chatBody');
	
	var preChatContainer = document.createElement('div');
	preChatContainer.setAttribute('id', 'preChatContainer');
	preChatContainer.style.opacity = 0;
	preChatContainer.style.display = 'none';
	preChatContainer.style.transition = 'opacity 0.7s, bottom 0.7s';
	document.body.appendChild(preChatContainer);

	var preChatneWen = document.createElement('img');
	preChatneWen.setAttribute('src', '/images/face.png');
	preChatneWen.setAttribute('id', 'preChatneWen');
	chat.appendChild(preChatneWen);
	
	var preChatBubble = document.createElement('div');
	preChatBubble.setAttribute('id', 'preChatBubble');
	preChatBubble.innerHTML = "Bonjour, je suis ne"+"W".bold()+"en!<br> Posez-moi une question!";
	preChatContainer.appendChild(preChatBubble);

	var link = document.createElement('link');
	link.rel = 'stylesheet';
	link.type = 'text/css';    
	link.href = "https://fonts.googleapis.com/css?family=Open+Sans:400italic,600italic,700italic,400,600,700";
	document.getElementsByTagName('head')[0].appendChild(link);

	var firstExpand = true;
	var expanded = false;
	var asked = false;
	var poped = false;
	
	var chatItems = ['chatForm', 'chatContainer', 'chatWelcome'];
	var chatTags = ['form', 'div', 'div'];
	
	var chatWelcomeItems = ['welcomeMessage', 'neWenFaceContainer'];
	var chatWelcomeTags = ['div', 'div'];

	var chatFormGroup = ['chatSend', 'chatInput'];
	var chatFormTags = ['button', 'input'];
	
	var eMailForm = ['chatClientEmail', 'chatEmailBody', 'chatEmailButton'];
	var eMailFormTags = ['input', 'textarea', 'button'];

	var chatOptions = ['Autre', 'Un robot, moi aussi', 'Une institution', 'Une entreprise'];

	var chatChildren;

	setTimeout(function() {
		if (!expanded) {	
			preChatContainer.style.display = 'block';
			setTimeout(function() {
				preChatContainer.style.opacity = 1;
				preChatContainer.style.bottom = '150px';
			}, 1000);
		}
	}, 3500);
	
	function expandChat() {
		'use strict';
		preChatContainer.style.display = 'none';
		!expanded ? expand() : '';
		expanded = true;
	}

	function closeChat() {
		'use strict';
		chat.removeEventListener("click", closeChat);
		chat.addEventListener('click', expandChat);
		expanded ? close() : '';
	}

	function animateWelcome() {
		'use strict';
		chatBody.removeEventListener("click", animateWelcome);
		var chatWelcome = document.getElementById('chatWelcome');
		chatWelcome.style.width = '150%';
		chatWelcome.style.height = '20%';
		chatWelcome.style.top = '0';
		chatWelcome.style.left = '-25%';
		chatWelcome.style.webkitBorderRadius = "0 0 1000px 1000px / 0 0 250px 250px";
		chatWelcome.style.MozBorderRadius = "0 0 1000px 1000px / 0 0 250px 250px";
		chatWelcome.style.BorderRadius = "0 0 1000px 1000px / 0 0 250px 250px";
		var neWenFaceContainer = document.getElementById('neWenFaceContainer');
		neWenFaceContainer.style.top = '18%';	
		neWenFaceContainer.style.left = '-100%';
		var welcomeMessage = document.getElementById('welcomeMessage');
		welcomeMessage.style.fontSize = '14px';
		welcomeMessage.style.width = '50%';
		welcomeMessage.style.margin = '3% 3% 3% 43%';
		welcomeMessage.innerHTML = 
		"Bonjour, je suis ne"+"W".bold()+"en!<br><br> Je vous "
		+"accompagne dans vos "
		+"recherches<br> de données ".bold()
		+"sur les portails Rte et GRT gaz.<br>"
		+"<button id=\"knowMore\">En savoir plus</button>";

		setTimeout(function() {
			botMessage("Bonjour, je m'appelle neWen!");
			setTimeout(function() {
				botMessage("Et vous, qui êtes-vous ?", chatOptions);
				answersListeners();
			}, 800);
		}, 800);
		welcomeMessage.style.opacity = 0;
		setTimeout(function() {
			document.getElementById('knowMore').style.opacity = 1;
			welcomeMessage.style.opacity = 1;
		neWenFaceContainer.style.width = '10%';	
		neWenFaceContainer.style.height = '82.5px';
			neWenFaceContainer.style.left = '25%';
		}, 500);	
	}

	chat.addEventListener('click', expandChat);

	function expand() {

		chat.removeEventListener("click", expandChat);

		document.body.appendChild(chatBody);
		chatBody.style.transition = "right 0.7s";
		chatBody.style.display = 'block';

		if(firstExpand) {

			for (var i = chatItems.length - 1; i >= 0; i--) {
				var item = document.createElement(chatTags[i]);
				item.setAttribute('id', chatItems[i]);	
				chatBody.appendChild(item);
			}
		}

		setTimeout(function() {

			chatBody.style.right = "20px";
			chatChildren = chatBody.children; 
			for (var i = chatChildren.length - 1; i >= 0; i--) {
				chatChildren[i].style.display = "block";
			}

			if(firstExpand) {

				chatBody.addEventListener('click', animateWelcome);
				var chatWelcome = document.getElementById('chatWelcome');
				for (var y = chatWelcomeItems.length - 1; y >= 0; y--) {
					var item = document.createElement(chatWelcomeTags[y]);
					item.setAttribute('id', chatWelcomeItems[y]);
					chatWelcome.appendChild(item);
				}

				document.getElementById('welcomeMessage').innerHTML = 
				"Bonjour, je suis ne"+"W".bold()+"en!<br><br> Je vous "
				+"accompagne dans<br> vos "
				+"recherches de données ".bold()
				+"sur les portails Rte et GRT gaz.<br><br> Je répond aussi à vos questions sur "
				+"le traitement<br> et l'utilisation des données,<br>".bold()
				+"et vous recommande du <br>contenu adapté à vos usages.<br>";
			}
			chat.addEventListener('click', closeChat);
		}, 500);
	}

	function formListener() {
		chatForm.addEventListener("submit", function(event) {
			event.preventDefault();

			var text = document.getElementById('chatInput').value;

			if(text !== '') {

				var chatContainer = document.getElementById('chatContainer');

				var messageContainer = document.createElement('div');
				messageContainer.setAttribute('class', 'clientMessage');
				chatContainer.appendChild(messageContainer);

				var messageText = document.createElement('div');
				messageText.setAttribute('class', 'clientText');
				messageText.innerText = text;
				messageContainer.appendChild(messageText);

				chatContainer.scrollTop = chatContainer.scrollHeight;

				document.getElementById('chatForm').reset();
			}
		});
	}

	function botMessage(message, options) {

		var chatContainer = document.getElementById('chatContainer');
		var messageContainer = document.createElement('div');
		var messageText = document.createElement('div');		
		messageContainer.setAttribute('class', 'botMessage');
		messageText.setAttribute('class', 'botText');
		messageText.innerText = message;
		chatContainer.appendChild(messageContainer);
		messageContainer.appendChild(messageText);

		if(typeof options !== "undefined") {
			for (var i = options.length - 1; i >= 0; i--) {
				var answerContainer = document.createElement('div');		
				answerContainer.setAttribute('class', 'answerContainer');
				chatContainer.appendChild(answerContainer);
				var item = document.createElement('button');
				item.setAttribute('class', 'answers');
				item.innerText = options[i];
				item.style.transition = 'opacity 1s';
				item.style.opacity = 0;
				answerContainer.appendChild(item);
			}
		}
		setTimeout(function() {
			messageContainer.style.left = "6%";
		}, 500);
		
		if (chatContainer.scrollTop == chatContainer.scrollHeight) chatContainer.scrollTop = chatContainer.scrollHeight;
	}

	function answersListeners() {
		var answers = document.getElementsByClassName("answerContainer");
		setTimeout(function() {

			for (var i = 0; i < answers.length; i++) {
				answers[i].firstChild.style.backgroundColor = 'white';
				answers[i].firstChild.style.opacity = 1;
				answers[i].firstChild.addEventListener('click', function(event) {
					for (var y = 0; y < answers.length; y++) {
						if(event.target.innerText !== answers[y].firstChild.innerText) {
							answers[y].parentNode.removeChild(answers[y]);
							y--;
						}
					}
					event.target.style.borderTopRightRadius = "0px";
					event.target.parentNode.style.cssFloat = 'none';
					event.target.style.margin = "10px 10px 10px 270px";
					setTimeout(function() {
						!asked ? askEmail() : '';
						asked = true;
					}, 1500);
				}, false);
			}
		}, 800);
	}

	function askEmail() {

		var chatContainer = document.getElementById('chatContainer');
		var messageContainer = document.createElement('div');
		var messageForm = document.createElement('form');
		messageForm.setAttribute('id', 'askingForm');		
		messageForm.setAttribute('method', 'post');
		messageForm.innerHTML = "<div id='emailText'>Nous ne sommes disponibles immédiatement.<br>Laissez-nous un message!</div>";
		messageContainer.setAttribute('class', 'botMessage');
		chatContainer.appendChild(messageContainer);
		messageContainer.appendChild(messageForm);

		setTimeout(function() {
			setTimeout(function() {
				messageContainer.style.left = "6%";
			}, 500);
			for (var i = 0; i < eMailForm.length; i++) {
				var item = document.createElement(eMailFormTags[i]);
				item.setAttribute('id', eMailForm[i]);
				item.setAttribute('name', eMailForm[i]);
				item.setAttribute('class', 'chatMailInput');
				item.setAttribute('required', true);
				if(eMailForm[i] === "chatClientEmail") {
					item.setAttribute('placeholder', 'Votre adresse email');
					item.setAttribute('type', 'email');
					item.setAttribute('autocomplete', 'off');
				}
				if(eMailForm[i] === "chatEmailButton") item.innerText = "Envoyer";
				if(eMailForm[i] === "chatEmailBody") item.setAttribute('placeholder', 'Laissez-nous votre message...');
				messageForm.appendChild(item);
			}
			messageForm.appendChild(chatEmailButton);
			var chatButtonArrow = document.createElement('img');
			chatButtonArrow.setAttribute("src", "/images/arrowreverse.png");
			chatButtonArrow.setAttribute("id", "chatButtonArrow");
			messageForm.appendChild(chatButtonArrow);
			chatContainer.scrollTop = chatContainer.scrollHeight;
			messageForm.addEventListener('submit', function(event){
				event.preventDefault();
			});

			setTimeout(function() {
				!poped ? popForm() : '';
				formListener();
				poped = true;
			}, 200);
		}, 200);
	}

	function popForm() {

		var chatForm = document.getElementById('chatForm');
		for (var i = chatFormGroup.length - 1; i >= 0; i--) {
			var item = document.createElement(chatFormTags[i]);
			item.setAttribute('id', chatFormGroup[i]);
			console.log('quack');
			if (chatFormGroup[i] == 'chatSend') item.style.backgroundImage = 'url("/images/arrow.png")';
			if (chatFormGroup[i] == 'chatInput') {
				item.setAttribute('autocomplete',"off"); 
				item.setAttribute('placeholder', 'Écrivez votre message ici...');
			}
			chatForm.appendChild(item);
		}
	}

	function removeElement(elementId) {
		var element = document.getElementById(elementId);
		element !== null ? element.parentNode.removeChild(element) : '';
	}

	function close() {
		chatBody.style.right = "-80%";
		setTimeout(function() {	

			chatBody.style.display = "none";
			firstExpand = false;
			expanded = false;
			poped = false;

		}, 700);
	}
};