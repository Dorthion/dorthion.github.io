//Wczytanie statystyk gracza
//Dane wejsciowe
let wgracz = document.createElement('div');
let performance="Score of last game: ";
let accuracy="Accuracy of last game: ";
let wpoints=0;
let wpp=wpoints+" pp";
let wacc=0;
let waccur=wacc+" %";
let nick="Rafis";
var wstats = document.createElement('p');
wgracz.setAttribute("id","wgracz");
let SumaPoints=wpoints;
let SumaCelnosci=wacc;
//PLIKI STORAGE (Wartości dla ostatniej gry)
if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem('SScore') != null) {
        SumaPoints=localStorage.getItem('SScore') + wpoints;
		SumaCelnosci=localStorage.getItem('SAcc');
		localStorage.removeItem('SScore');
		localStorage.removeItem('SAcc');
    }
}
else{
	SumaPoints=wpoints;
	SumaCelnosci=wacc;
	localStorage.removeItem('SScore');
	localStorage.removeItem('SAcc');
}
//Dodawanie wartości do ekranu
wgracz.innerHTML += '<img class="wgracz" src="Icons/avatar.jpg" />';
wstats.innerHTML="<strong>"+nick+"</strong><br>"+performance+SumaPoints+"<br>"+accuracy+SumaCelnosci;
document.getElementById('index').appendChild(wgracz);
document.getElementById('wgracz').appendChild(wstats);