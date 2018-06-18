let Wokno=document.getElementById("Wokno");
let GrajSong = new Audio('Cookiezi/normal-hitwhistle1.wav');
Wokno.addEventListener("mousedown", function(){
	location.reload();
});
let graj=document.querySelector('#graj');
let pierwszy1=document.querySelector('#pierwszy');
let drugi1=document.querySelector('#drugi');
function Rozpocznij(nato){
	if(nato==1){
		load('HighscoreSong1.js');
	}
	if(nato==2){
		load('HighscoreSong2.js');
	}
}
graj.onclick=()=>{
		GrajSong.play();
		pierwszy1=pierwszy1.value;
		drugi1=drugi1.value;
		Rozpocznij(drugi1);
		document.getElementById("wybor").style.display = "none";
}