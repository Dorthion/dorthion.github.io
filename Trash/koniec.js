//Porażka
//Wczytywanie wartości
gra.style.display="none";
document.getElementById("backk").style.opacity="1.0";
document.getElementById("backk").style.background = "url('Cookiezi/fail-background.png')";
audio1.pause();
document.getElementById("llicznikcombo").style.display="none";
document.getElementById("llicznikacc").style.display="none";
document.getElementById("llicznikpkt").style.display="none";
document.getElementById("llicznikpkt300").style.display="none";
document.getElementById("llicznikpkt100").style.display="none";
document.getElementById("llicznikpkt50").style.display="none";
document.getElementById("llicznikpkt0").style.display="none";
//Muzyka
let Sadsong = new Audio('Cookiezi/failsound.mp3');
Sadsong.play();
//Przycisk wyjścia
let quittt = new Image(398,116);
quittt.setAttribute("id","quittt");
quittt.src = 'Cookiezi/pause-back.png';
document.getElementById('MainMenu').appendChild(quittt);
//Uruchomienie przycisku wyjścia
quittt.addEventListener("mousedown", function(){
		location.reload();
});