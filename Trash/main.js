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
	
	mainlogo.addEventListener("mouseout", function(){
		console.log("XD");
	});
	

	mainlogo.addEventListener("mousedown", function(){
		
	});

	mainlogo.addEventListener("mouseup", function(){
		//document.getElementById("logoosu").style.left="-150px";
		document.getElementById("logoosu").style.transition="none";
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