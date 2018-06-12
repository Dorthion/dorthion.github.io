//Wczytanie stylu kółek
		let licznik3=0;
		let combo=0;
		let points=0;
		let p300=0;
		let p100=0;
		let p50=0;
		let miss=0;
		let mnoznik=1;
		let celnosc=100.00;
		let hp=100;
		let cyfra=1;
		let nrkolka=1;
		let nrkolka2=0;
		let wcisniecie=0;
		let g=0;
		//var apcircle = new Image ('Cookiezi/approachcircle.png');
		var gra = document.createElement('div');
		gra.setAttribute("id","gra");
		document.getElementById('MainMenu').appendChild(gra);
		var startTime3 = Date.now();
		var interval3 = setInterval(function() {
			var elapsedTime3 = Date.now() - startTime3;
			if(parseInt(song[2+licznik3])<elapsedTime3)
			{
				console.log(song[2+licznik3]);
				console.log(elapsedTime3);
				console.log("woot");
				let reszta=licznik3%8;
				//gra.innerHTML += '<img id="apcircle'+reszta+'" src="Cookiezi/approachcircle.png"/>';
				
				//gra.innerHTML += '<img id="n'+reszta+'" src="Cookiezi/hitcircle3.png" />';
				//gra.innerHTML += '<img id="o'+reszta+'" src="Cookiezi/hitcircleoverlay.png" />';
				if(g<=7){
				gra.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
				gra.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
				gra.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
				
				g++;
				}
				nrkolka2=nrkolka2+1;
				if(g>7){
					document.getElementById("apcircle"+cyfra).style.display = "inline";
					document.getElementById("o"+cyfra).style.display = "inline";
					document.getElementById("c"+cyfra).style.display = "inline";
				}
				
				var usuwanie = document.getElementById('c'+nrkolka);
				/*var usuwanie2 = document.getElementById('o'+nrkolka);
				var usuwanie3 = document.getElementById('apcircle'+nrkolka);*/
				usuwanie.addEventListener("mousedown", function(){  //BŁĄD
					/*gra.removeChild(usuwanie);
					gra.removeChild(usuwanie2);
					gra.removeChild(usuwanie3);*/
					document.getElementById('c'+nrkolka).style.display = "none"; //BŁĄD
					document.getElementById('o'+nrkolka).style.display = "none";
					document.getElementById('apcircle'+nrkolka).style.display = "none";
					nrkolka=nrkolka+1;
					if(nrkolka==8)
					{
						nrkolka=1;
					}
					wcisniecie=wcisniecie+1;
				});
				
				
				
				
				//TIMER
				var Aptiming = Date.now();
				var Aptimer = setInterval(function() {
					let Apcirtimer = Date.now() - Aptiming;
					if(nrkolka2>wcisniecie){
						var usuwanie4 = document.getElementById('c'+wcisniecie);
						/*var usuwanie5 = document.getElementById('o'+wcisniecie);
						var usuwanie6 = document.getElementById('apcircle'+wcisniecie);*/
						usuwanie4.addEventListener("mousedown", function(){
							document.getElementById('c'+nrkolka).style.display = "none"; //BŁĄD
							document.getElementById('o'+nrkolka).style.display = "none";
							document.getElementById('apcircle'+nrkolka).style.display = "none";
							//nrkolka=nrkolka+1;
							wcisniecie=wcisniecie+1;
						});
					}
				}, 1000);
					//document.getElementById("timer").innerHTML = (elapsedTime / 1);
				
				
					/*var usuwanie = document.getElementById('c'+nrkolka);
					var usuwanie2 = document.getElementById('o'+nrkolka);
					var usuwanie3 = document.getElementById('apcircle'+nrkolka);
					usuwanie.addEventListener("mousedown", function(){
						gra.removeChild(usuwanie);
						gra.removeChild(usuwanie2);
						gra.removeChild(usuwanie3);
						nrkolka=nrkolka+1;
					});
					
					if(nrkolka==9)
					{
						nrkolka=1;
						console.log("zmiaanaaaa");
					}*/
					/*if(licznik3>4){
					if(cyfra==0){
						g=8;
					}
					if(cyfra==1){
						g=0;
					}
					var usuwanie4 = document.getElementById('c'+g);
					var usuwanie5 = document.getElementById('o'+g);
					var usuwanie6 = document.getElementById('apcircle'+g);
					usuwanie4.addEventListener("mousedown", function(){
						gra.removeChild(usuwanie4);
						gra.removeChild(usuwanie5);
						gra.removeChild(usuwanie6);
						nrkolka=nrkolka+1;
					});
					}
					if(licznik3>9){
					if(cyfra==0){
						g=7;
					}
					if(cyfra==1){
						g=8;
					}
					if(cyfra==2){
						g=0;
					}
					var usuwanie7 = document.getElementById('c'+g);
					var usuwanie8 = document.getElementById('o'+g);
					var usuwanie9 = document.getElementById('apcircle'+g);
					usuwanie7.addEventListener("mousedown", function(){
						gra.removeChild(usuwanie7);
						gra.removeChild(usuwanie8);
						gra.removeChild(usuwanie9);
						nrkolka=nrkolka+1;
					});
			}*/
				function cirlees(x_pos, y_pos) {
					console.log("KOLECZKO: "+cyfra);
					console.log("NUMEEER KOLECZKA: "+nrkolka);
					var ciircle = document.getElementById('apcircle'+cyfra);
					//var clickcircles = document.getElementById('n'+reszta);
					var overcircles = document.getElementById('o'+cyfra);
					var numerek = document.getElementById('c'+cyfra);
					//clickcircles.style.left = x_pos+5+'px';
					//clickcircles.style.top = y_pos+5+'px';
					ciircle.style.left = x_pos-75+'px';
					ciircle.style.top = y_pos-75+'px';
					overcircles.style.left = x_pos+'px';
					overcircles.style.top = y_pos+'px';
					numerek.style.left = x_pos+25+'px';
					numerek.style.top = y_pos+25+'px';
					/*if(nrkolka==nrkolka2-3)
					{
						var usuwanie = document.getElementById('c'+cyfra);
						var usuwanie2 = document.getElementById('o'+reszta);
						var usuwanie3 = document.getElementById('apcircle'+reszta);
						gra.removeChild(usuwanie);
						gra.removeChild(usuwanie2);
						gra.removeChild(usuwanie3);
					}*/
					//console.log("CYFRAAAAAA: "+cyfra);
				}
				cirlees(song[0+licznik3],song[1+licznik3]);
				if(cyfra==8)
				{
					cyfra=0;
				}
				
				
				cyfra=cyfra+1;
				//nrkolka2=nrkolka2+1;
				licznik3=licznik3+3;
			}
}, 1);