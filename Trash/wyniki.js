//Wyniki
//Usuwanie nie potrzebnych elementów
gra.style.display="none";
//Zmiana tła
document.getElementById("backk").style.opacity="1.0";
document.getElementById("backk").style.background = "url('Cookiezi/ranking-panel.png')";
//Zmiana pozycji combo, acc, score
document.getElementById("llicznikcombo").style.left="50px";
document.getElementById("llicznikcombo").style.bottom="40px";
document.getElementById("llicznikacc").style.top="420px";
document.getElementById("llicznikacc").style.right="700px";
document.getElementById("llicznikpkt").style.right="950px";
document.getElementById("llicznikpkt").style.top="20px";

//Zmiana pozycji pkt
document.getElementById("llicznikpkt300").style.left="350px";
document.getElementById("llicznikpkt300").style.top="120px";
document.getElementById("llicznikpkt100").style.left="350px";
document.getElementById("llicznikpkt100").style.top="220px";
document.getElementById("llicznikpkt50").style.left="150px";
document.getElementById("llicznikpkt50").style.top="315px";
document.getElementById("llicznikpkt0").style.left="410px";
document.getElementById("llicznikpkt0").style.top="315px";

//Zmiana wielkości
document.getElementById("llicznikacc").style.fontSize="45px";
document.getElementById("llicznikpkt300").style.fontSize="45px";
document.getElementById("llicznikpkt100").style.fontSize="45px";
document.getElementById("llicznikpkt50").style.fontSize="45px";
document.getElementById("llicznikpkt0").style.fontSize="45px";

//Dzwiek wygranej
let WinSong = new Audio('Cookiezi/applause.mp3');
WinSong.play();

//Zapis pliku Storage
if (localStorage.getItem('SScore') != null) {
		let SumaPoints2=points;
		let SumaCelnosci2=celnosc;
        SumaPoints2=parseInt(localStorage.getItem('SScore')) + parseInt(points);
		SumaCelnosci2=SumaPoints2=parseInt(localStorage.getItem('SAcc')) + parseInt(celnosc);
		localStorage.setItem('SScore', SumaPoints2);
		localStorage.setItem('SAcc', SumaCelnosci2);
}
else{
	SumaPoints2=parseInt(points);
	localStorage.setItem('SScore', SumaPoints2);
	SumaCelnosci2=parseInt(celnosc);
	localStorage.setItem('SAcc', SumaCelnosci2);
}
//Ocena - Czy automatyczna gra to była
if(drugi1==2){
let locena = new Image(400,500);    //Ocena
locena.setAttribute("id","locena");
locena.src = 'Cookiezi/ranking-X.png';
document.getElementById('MainMenu').appendChild(locena);
}

let l300 = new Image(110,110);    //Licznik 300
l300.setAttribute("id","l300");
l300.src = 'Cookiezi/hit300.png';
document.getElementById('MainMenu').appendChild(l300);

let l100 = new Image(110,110);    //Licznik 100
l100.setAttribute("id","l100");
l100.src = 'Cookiezi/hit100.png';
document.getElementById('MainMenu').appendChild(l100);

let l50 = new Image(110,110);    //Liocznik 50
l50.setAttribute("id","l50");
l50.src = 'Cookiezi/hit50.png';
document.getElementById('MainMenu').appendChild(l50);

let lmiss = new Image(110,110);    //Licznik miss
lmiss.setAttribute("id","lmiss");
lmiss.src = 'Cookiezi/hit0.png';
document.getElementById('MainMenu').appendChild(lmiss);

let quitt = new Image(110,110);    //Wyjscie
quitt.setAttribute("id","quitt");
quitt.src = 'Cookiezi/menu-back.png';
document.getElementById('MainMenu').appendChild(quitt);

//TEKST KONCOWY WYNIKU
//Dla oceny D
if(miss>10){
		if(drugi1==1){
			let locena = new Image(400,500);    //Ocena
			locena.setAttribute("id","locena");
			locena.src = 'Cookiezi/ranking-D.png';
			document.getElementById('MainMenu').appendChild(locena);
		}
		let TekstKon = document.createElement('p');	
		TekstKon.setAttribute("id","TekstKon");	
		let textnode9 ="Bad";
		TekstKon.innerHTML=textnode9;
		Menug.appendChild(TekstKon);
}
//Dla oceny A
if(miss<=10){
		if(miss!=0)
		{
			if(drugi1==1){
			let locena = new Image(400,500);    //Ocena
			locena.setAttribute("id","locena");
			locena.src = 'Cookiezi/ranking-A.png';
			document.getElementById('MainMenu').appendChild(locena);
		}
			let TekstKon = document.createElement('p');	
			TekstKon.setAttribute("id","TekstKon");	
			let textnode9 ="Good";
			TekstKon.innerHTML=textnode9;
			Menug.appendChild(TekstKon);
		}
}
//Dla oceny S
if(miss==0){
		if(drugi1==1){
			let locena = new Image(400,500);    //Ocena
			locena.setAttribute("id","locena");
			locena.src = 'Cookiezi/ranking-S.png';
			document.getElementById('MainMenu').appendChild(locena);
		}
		let TekstKon = document.createElement('p');	
		TekstKon.setAttribute("id","TekstKon");	
		let textnode9 ="Perfect";
		TekstKon.innerHTML=textnode9;
		Menug.appendChild(TekstKon);
}
//Przycisk - Wyjście
quitt.addEventListener("mousedown", function(){
		location.reload();
});