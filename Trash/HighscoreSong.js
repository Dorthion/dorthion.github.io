//Dane wejsciowe
let background = new Image ('PandaHighscore.jpg');
let button = document.createElement('button');
let button2 = document.getElementById('Przycisk');
let body = document.querySelector("body");
let dl1=window.screen.availHeight;
let dl2=window.screen.availWidth;
document.getElementById('foo').appendChild(button);
button.innerText="Start";

function backgrounds(){
	document.getElementById("backk").style.background = "url('SongBackground/PandaHighscore.jpg')";
	document.getElementById("pudlo").style.display = "none";
	document.getElementById("index").style.display = "none";
}

function resizeDivs() {
		let main = document.getElementById('backk').offsetHeight;
		let sidebar = document.getElementById('body').offsetHeight;
		//console.log(main);		
		//console.log(sidebar);
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
let gra = document.createElement('div');
gra.innerHTML += '<img id="llicznikhp2" src="Cookiezi/button-middle.png"/>';
let licznik=0;
		let startTime2 = Date.now();
		let interval2 = setInterval(function() {
			let elapsedTime2 = Date.now() - startTime2;
			let k=999-elapsedTime2;
			if(parseInt(k)>500)
			{
				document.getElementById("backk").style.opacity="0."+(k);
				clearInterval(elapsedTime2); 
				clearInterval(startTime2); 
				//console.log(k);
			}
		}, 1);
		
function giereczka(){
		document.body.style.backgroundImage = background;
		document.getElementById("pudlo").style.display = "none";
		
		
		
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