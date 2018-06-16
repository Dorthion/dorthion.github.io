//Funkcja losująca
function random(min,max){
	return Math.random()*(max-min)+min;
}

function menu(){
//Losowanie tła
let menuimage = "url('MenuBackground/Background"+parseInt(random(1,17))+".jpg'";
document.getElementById("backk").style.background = menuimage;

//Obliczanie wielkości przeglądarki
let dlug1=window.screen.availHeight;
let dlug2=window.screen.availWidth;
document.getElementById("backk").style.backgroundSize = dlug2+"px "+dlug1+"px";

//Index dolny
function addDiv() {
	let DownMenu = document.getElementById("dol");
	let authors = document.createElement('div');
	let authorst = document.createElement('p');	
	let textnode ="Game idea and resources from Osu! by Ppy";
	let lol="Remake by NightmareYandere";
	authorst.innerHTML=textnode+"<br>"+lol;
	DownMenu.appendChild(authorst);
}
addDiv();

//Logo i jego ustawienia przycisków
	let k=0;
	for(k=0; k<180; k++){
		let bary = document.createElement('div');
		bary.setAttribute("class","bar");
		document.getElementsByClassName('bars')[0].appendChild(bary);
	}
	
	let liczniklogo = 1;
	let menuprzyciski1 = document.createElement('div');  //PLAY
	menuprzyciski1.setAttribute("id","BUTTON"+liczniklogo);
	document.getElementsByClassName('bars')[0].appendChild(menuprzyciski1);
	liczniklogo++;
	let menuprzyciski2 = document.createElement('div');  //EDIT
	menuprzyciski2.setAttribute("id","BUTTON"+liczniklogo);
	document.getElementsByClassName('bars')[0].appendChild(menuprzyciski2);
	liczniklogo++;
	let menuprzyciski3 = document.createElement('div');  //OPTIONS
	menuprzyciski3.setAttribute("id","BUTTON"+liczniklogo);
	document.getElementsByClassName('bars')[0].appendChild(menuprzyciski3);
	liczniklogo++;
	let menuprzyciski4 = document.createElement('div'); //EXIT
	menuprzyciski4.setAttribute("id","BUTTON"+liczniklogo);
	document.getElementsByClassName('bars')[0].appendChild(menuprzyciski4);
	liczniklogo = 1;
	
	let menulogoo = document.createElement('div'); //LOGO
	menulogoo.setAttribute("id","menulogoo");
	document.getElementsByClassName('bars')[0].appendChild(menulogoo);
	load2('style5.css');
	//----------------------------------------------------------------------
	let playy = new Image(423,87);    //PLAY
	playy.src = 'Icons/playy.png';
	document.getElementById("BUTTON"+liczniklogo).appendChild(playy);
	liczniklogo++;
	let edit = new Image(365,87);    //EDIT
	edit.src = 'Icons/Edit.png';
	document.getElementById("BUTTON"+liczniklogo).appendChild(edit);
	liczniklogo++;
	let options = new Image(365,87);    //OPTIONS
	options.src = 'Icons/options.png';
	document.getElementById("BUTTON"+liczniklogo).appendChild(options);
	liczniklogo++;
	let exit = new Image(423,87);    //EXIT
	exit.src = 'Icons/exit.png';
	document.getElementById("BUTTON"+liczniklogo).appendChild(exit);
	let mainlogo = new Image(550,550);    //OSU!JS LOGO
	mainlogo.src = 'MenuBackground/OsuWow.png';
	document.getElementById("menulogoo").appendChild(mainlogo);
	
	//TIMER
	/*	let startTime = Date.now();
		let interval = setInterval(function() {
		let elapsedTime = Date.now() - startTime;
		document.getElementById("timer").innerHTML = (elapsedTime / 1);
	}, 1);*/
	
	let czyruszony = 0;
	
	//Automatyczne zamkniecie
	function auto(czyruszony){
		if(parseInt(czyruszony)==1){
		czyruszony="-5000";
		let logoTime = Date.now();
		let logointerval = setInterval(function() {
			let elapsedTimeXD = Date.now() - logoTime;
			//console.log("tak");
			if(elapsedTimeXD>5000 && elapsedTimeXD<6000){
				czyruszony=0;
				document.getElementById("logoosu2").setAttribute("id", "logoosu3");
				document.getElementById("BUTTON1").style.display = "none";
				document.getElementById("BUTTON2").style.display = "none";
				document.getElementById("BUTTON3").style.display = "none";
				document.getElementById("BUTTON4").style.display = "none";
			}
			if(elapsedTimeXD>6000 && elapsedTimeXD<7000){
				document.getElementById("logoosu3").setAttribute("id", "logoosu4");
			}
			if(elapsedTimeXD>7000){
				clearInterval(logointerval);
				document.getElementById("logoosu4").setAttribute("id", "logoosu");
			}
		}, 999); 
		}
	}
	
	//Bawienie się z logiem
	mainlogo.addEventListener("mouseout", function(){
		
		auto(czyruszony);
		czyruszony=5000;
		console.log("XD");
	});
	
	/*mainlogo.addEventListener("mousein", function(){
		auto();
		console.log("XD");
	});*/
	
	mainlogo.addEventListener("mousedown", function(){
		if(czyruszony>=1)
		{
			czyruszony=0;
		}
		czyruszony++;
		document.getElementById("logoosu").setAttribute("id", "logoosu2");
		document.getElementById("BUTTON1").style.display = "inline";
		document.getElementById("BUTTON2").style.display = "inline";
		document.getElementById("BUTTON3").style.display = "inline";
		document.getElementById("BUTTON4").style.display = "inline";
		console.log("I bardzo dobrze");
	});

	mainlogo.addEventListener("mouseup", function(){
		
	});
	
	playy.addEventListener("mousedown", function(){
		load('Emp.js');
		load('HighscoreSong.js');
		//clearInterval(logointerval);
		//giereczka();
	});
	
	exit.addEventListener("mousedown", function(){
		close();
	});
	//Wczytywanie dodatków
	load('trail.js');
	load('statgracza.js');
}
menu();