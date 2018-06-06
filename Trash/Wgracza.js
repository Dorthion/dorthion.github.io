//Wczytanie statystyk gracza
let wgracz = document.createElement('div');
let performance="Performance: ";
let accuracy="Accuracy: ";
let wpoints=0;
let wpp=wpoints+" pp";
let wacc=0;
let waccur=wacc+" %";
let nick="Guest";
var wstats = document.createElement('p');
wgracz.setAttribute("id","wgracz");

wgracz.innerHTML += '<img class="wgracz" src="Icons/avatar-guest.png" />';
wstats.innerHTML="<strong>"+nick+"</strong><br>"+performance+wpp+"<br>"+accuracy+waccur;
//.appendChild(authorst);

document.getElementById('index').appendChild(wgracz);
document.getElementById('wgracz').appendChild(wstats);
