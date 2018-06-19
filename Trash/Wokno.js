//Wybor piosenki
//Dane
let Wokno=document.getElementById("Wokno");
//Dzwiek
let GrajSong = new Audio('Cookiezi/normal-hitwhistle1.wav');
//Wyjscie z okna
Wokno.addEventListener("mousedown", function(){
	location.reload();
});
//Dane2
let graj=document.querySelector('#graj');
let pierwszy1=document.querySelector('#pierwszy');
let drugi1=document.querySelector('#drugi');
//Funkcja sprawdzajaca dane z listy
function Rozpocznij(nato){
	if(nato==1){
		load('HighscoreSong1.js');
	}
	if(nato==2){
		load('HighscoreSong2.js');
	}
}
//Przycisk od listy
graj.onclick=()=>{
		GrajSong.play();
		pierwszy1=pierwszy1.value;
		drugi1=drugi1.value;
		Rozpocznij(drugi1);
		document.getElementById("wybor").style.display = "none";
}