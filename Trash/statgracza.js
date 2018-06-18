//Wczytanie statystyk gracza
let wgracz = document.createElement('div');
let performance="Score of all games: ";
let accuracy="Accuracy of last game: ";
let wpoints=0;
let wpp=wpoints+" pp";
let wacc=0;
let waccur=wacc+" %";
let nick="Guest";
var wstats = document.createElement('p');
wgracz.setAttribute("id","wgracz");
let SumaPoints=wpoints;
let SumaCelnosci=wacc;
if (typeof(Storage) !== "undefined") {
    if (localStorage.getItem('SScore') != null) {
        SumaPoints=localStorage.getItem('SScore') + wpoints;
		SumaCelnosci=localStorage.getItem('SAcc');
    }
}
else{
	SumaPoints=wpoints;
	SumaCelnosci=wacc;
}

//localStorage.getItem('myElement');

wgracz.innerHTML += '<img class="wgracz" src="Icons/avatar-guest.png" />';
wstats.innerHTML="<strong>"+nick+"</strong><br>"+performance+SumaPoints+"<br>"+accuracy+SumaCelnosci;

document.getElementById('index').appendChild(wgracz);
document.getElementById('wgracz').appendChild(wstats);