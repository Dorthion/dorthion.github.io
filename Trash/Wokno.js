let Wokno=document.getElementById("Wokno");
Wokno.addEventListener("mousedown", function(){
	location.reload();
});
let graj=document.querySelector('#graj');
let pierwszy1=document.querySelector('#pierwszy');
let drugi1=document.querySelector('#drugi');
function Rozpocznij(nato){
	if(nato==1){
		load('HighscoreSong1.js');
		//load('GraNorm.js');
	}
	if(nato==2){
		load('HighscoreSong2.js');
		//load('GraAuto.js');
	}
}
graj.onclick=()=>{
		pierwszy1=pierwszy1.value;
		drugi1=drugi1.value;
		//var wynik=przelicz(waluta,pierwszy1,drugi1);
		Rozpocznij(drugi1);
		document.getElementById("wybor").style.display = "none";
		
	}