var logo1= new Image(100,100);
	logo1.src = 'MusicIcons/1.png';
	//document.body.appendChild(logo1);
function random(min,max){
	return Math.random()*(max-min)+min;
}
var menuimage = "url('MenuBackground/Background"+parseInt(random(1,17))+".jpg'";
document.getElementById("backk").style.background = menuimage;

var dlug1=window.screen.availHeight;
var dlug2=window.screen.availWidth;
document.getElementById("backk").style.backgroundSize = dlug2+"px "+dlug1+"px";
//function resizeDivs2() {} Moze sie przydac pozniej
//resizeDivs2();
function addDiv() {
	var DownMenu = document.getElementById("dol");
	var authors = document.createElement('div');
	var authorst = document.createElement('p');	
	var textnode ="Game idea and resources from Osu! by Ppy";
	var lol="Remake by NightmareYandere";
	authorst.innerHTML=textnode+"<br>"+lol;
	DownMenu.appendChild(authorst);
}
addDiv();
var audio2 = new Audio('Rumors.mp3');
var audio3 = new Audio('Teo.mp3');

	let mainlogo = new Image(500,500);    //OSU!JS LOGO
	mainlogo.src = 'MenuBackground/OsuWow.png';
	document.getElementById("logoosu").appendChild(mainlogo);
	/*button.addEventListener("mouseover", function(){
		this.classList.add('mouse-over');
	});*/
	//TIMER
		var startTime = Date.now();
		var interval = setInterval(function() {
		var elapsedTime = Date.now() - startTime;
		document.getElementById("timer").innerHTML = (elapsedTime / 1);
	}, 1);
	let czyruszony = 0;
	//Automatyczne zamkniecie
	function auto(czyruszony){
		if(parseInt(czyruszony)==1){
		czyruszony="-5000";
		var logoTime = Date.now();
		var logointerval = setInterval(function() {
			let elapsedTimeXD = Date.now() - logoTime;
			console.log("tak");
			if(elapsedTimeXD>5000 && elapsedTimeXD<6000){
				czyruszony=0;
				document.getElementById("logoosu2").setAttribute("id", "logoosu3");
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
	});

	mainlogo.addEventListener("mouseup", function(){
		czyruszony++;
		document.getElementById("logoosu").setAttribute("id", "logoosu2");
		console.log("I bardzo dobrze");
	});
	
	load('wgracza.js');

//REMEMBER TO DELETE THIS LATER
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  //alert('keydown event\n\n' + 'key: ' + keyName);
  switch (keyName){
  case 's':
	{	
		audio2.pause();
		audio3.pause();
		break;
	}
  case 'd':
	{
		audio3.pause();
		audio2.play();
		break;
	}
	case 'w': 
	{
		audio2.pause();
		audio3.play();
		break;
	}
  }
});