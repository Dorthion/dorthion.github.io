//Dane wejsciowe
var background = new Image ('PandaHighscore.jpg');
var button = document.createElement('button');
var button2 = document.getElementById('Przycisk');
var body = document.querySelector("body");
var dl1=window.screen.availHeight;
var dl2=window.screen.availWidth;
document.getElementById('foo').appendChild(button);
button.innerText="Start";

function backgrounds(){
	document.getElementById("backk").style.background = "url('SongBackground/PandaHighscore.jpg')";
	document.getElementById("pudlo").style.display = "none";
	document.getElementById("index").style.display = "none";
}

function resizeDivs() {
		var main = document.getElementById('backk').offsetHeight;
		var sidebar = document.getElementById('body').offsetHeight;
		console.log(main);		
		console.log(sidebar);
		if (sidebar > main) {
			main = sidebar;
			document.getElementById('backk').style.height = document.getElementById('body').style.height = dl1 + 'px';
		} else {
			sidebar = main;
			document.getElementById('body').style.height = document.getElementById('backk').style.height = dl1 + 'px' - main;
		}
	}
//Uruchamianie funckji:
backgrounds();
resizeDivs();

function giereczka(){
	//console.log("LOOOL");
		document.body.style.backgroundImage = background;
		//document.getElementById("backk").style.background = "url('SongBackground/PandaHighscore.jpg')";
		document.getElementById("pudlo").style.display = "none";
		//console.log(dl1);		
		//console.log(dl2);
		let licznik=0;
		var startTime2 = Date.now();
		var interval2 = setInterval(function() {
			var elapsedTime2 = Date.now() - startTime2;
			//document.getElementById("timer").innerHTML = (elapsedTime / 1);	
			//console.log(elapsedTime2);
			var k=999-elapsedTime2;
			if(parseInt(k)>500)
			{
				document.getElementById("backk").style.opacity="0."+(k);
				clearInterval(elapsedTime2); 
				clearInterval(startTime2); 
				console.log(k);
			}
		}, 1);
		
		let audio1 = new Audio('empe.mp3');
		audio1.play();
		
		document.addEventListener('keydown', (event) => {
			const keyName2 = event.key;
			if(keyName2=='s')
				{
					audio1.pause();
				}
		})
		load('HighscoreSong3.js');
}

button.onclick=()=>{
		giereczka();
}