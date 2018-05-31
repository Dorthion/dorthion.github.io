var logo1= new Image(100,100);
	logo1.src = 'MusicIcons/1.png';
	//document.body.appendChild(logo1);
function random(min,max){
	return Math.random()*(max-min)+min;
}
var menuimage = "url('MenuBackground/Background"+parseInt(random(1,12))+".jpg'";
document.getElementById("backk").style.background = menuimage;
function resizeDivs2() {
		var dlug1=window.screen.availHeight;
		var dlug2=window.screen.availWidth;
		document.getElementById("backk").style.backgroundSize = dlug2+"px "+dlug1+"px";
}
resizeDivs2();
var audio2 = new Audio('Rumors.mp3');
var audio3 = new Audio('Teo.mp3');

	var mainlogo = new Image(500,500);    //OSU!JS LOGO
	mainlogo.src = 'MenuBackground/OsuWow.png';
	document.getElementById("logoosu").appendChild(mainlogo);
	
	var startTime = Date.now();
	var interval = setInterval(function() {
    var elapsedTime = Date.now() - startTime;
    document.getElementById("timer").innerHTML = (elapsedTime / 1);
}, 1);
	
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