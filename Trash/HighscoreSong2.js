//Dane wejsciowe
let background = new Image ('Songs/'+pierwszy1+'/bg.jpg');
let button = document.createElement('button');
let button2 = document.getElementById('Przycisk');
let button3 = document.createElement('button');
let button4 = document.createElement('button');
let button5 = document.createElement('button');
let button6 = document.createElement('button');
let button7 = document.createElement('button');
let body = document.querySelector("body");
let dl1=window.screen.availHeight;
let dl2=window.screen.availWidth;
document.getElementById('foo').appendChild(button);
document.getElementById('foo').appendChild(button3);
document.getElementById('foo').appendChild(button4);
document.getElementById('foo').appendChild(button5);
document.getElementById('foo').appendChild(button6);
document.getElementById('foo').appendChild(button7);
button.innerText="Start";
button3.innerText="Opacity: 0%";
button4.innerText="Opacity: 25%";
button5.innerText="Opacity: 50%";
button6.innerText="Opacity: 75%";
button7.innerText="Opacity: 100%";

//Funkcje: Tło, rozmiar tła
function backgrounds(){
	document.getElementById("backk").style.background = "url('Songs/"+pierwszy1+"/bg.jpg')";
	document.getElementById("pudlo").style.display = "none";
	document.getElementById("index").style.display = "none";
}

function resizeDivs() {
		let main = document.getElementById('backk').offsetHeight;
		let sidebar = document.getElementById('body').offsetHeight;
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
			}
		}, 1);
		
function giereczka(){
		document.body.style.backgroundImage = background;
		document.getElementById("pudlo").style.display = "none";
		let audio1 = new Audio('Songs/'+pierwszy1+'/audio.mp3');
		audio1.play();
		load('GraAuto.js');
}
button3.onclick=()=>{
		document.getElementById("backk").style.opacity="0.0";
}
button4.onclick=()=>{
		document.getElementById("backk").style.opacity="0.25";
}
button5.onclick=()=>{
		document.getElementById("backk").style.opacity="0.5";
}
button6.onclick=()=>{
		document.getElementById("backk").style.opacity="0.75";
}
button7.onclick=()=>{
		document.getElementById("backk").style.opacity="1.0";
}
button.onclick=()=>{
		giereczka();
		button.style.display="none";
		button3.style.display="none";
		button4.style.display="none";
		button5.style.display="none";
		button6.style.display="none";
		button7.style.display="none";
}