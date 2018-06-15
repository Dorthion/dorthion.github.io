//Wczytanie wstepnych wartosci
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
//Plansza + wczytanie kółek
		let gra = document.createElement('div');
		gra.setAttribute("id","gra");
		document.getElementById('MainMenu').appendChild(gra);
		let k1 = document.createElement('div');
		k1.setAttribute("id","k1");
		document.getElementById('gra').appendChild(k1);
		let k2 = document.createElement('div');
		k2.setAttribute("id","k2");
		document.getElementById('gra').appendChild(k2);
		let k3 = document.createElement('div');
		k3.setAttribute("id","k3");
		document.getElementById('gra').appendChild(k3);
		let k4 = document.createElement('div');
		k4.setAttribute("id","k4");
		document.getElementById('gra').appendChild(k4);
		let k5 = document.createElement('div');
		k5.setAttribute("id","k5");
		document.getElementById('gra').appendChild(k5);
		let k6 = document.createElement('div');
		k6.setAttribute("id","k6");
		document.getElementById('gra').appendChild(k6);
		let k7 = document.createElement('div');
		k7.setAttribute("id","k7");
		document.getElementById('gra').appendChild(k7);
		let k8 = document.createElement('div');
		k8.setAttribute("id","k8");
		document.getElementById('gra').appendChild(k8);
//Gra
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
					switch(g){
						case 0:{
							k1.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k1.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k1.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 1:{
							k2.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k2.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k2.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 2:{
							k3.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k3.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k3.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 3:{
							k4.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k4.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k4.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 4:{
							k5.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k5.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k5.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 5:{
							k6.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k6.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k6.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 6:{
							k7.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k7.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k7.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
						case 7:{
							k8.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k8.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k8.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							break;
						}
					}
					g++;
				}
				nrkolka2=nrkolka2+1;
				if(g>7){
					document.getElementById("apcircle"+cyfra).style.display = "inline";
					document.getElementById("o"+cyfra).style.display = "inline";
					document.getElementById("c"+cyfra).style.display = "inline";
				}
				
				//var usuwanie = document.getElementById('c'+nrkolka);
				/*var usuwanie2 = document.getElementById('o'+nrkolka);
				var usuwanie3 = document.getElementById('apcircle'+nrkolka);*/
				/*usuwanie.addEventListener("mousedown", function(){  //BŁĄD
					document.getElementById('c'+nrkolka).style.display = "none"; //BŁĄD
					document.getElementById('o'+nrkolka).style.display = "none";
					document.getElementById('apcircle'+nrkolka).style.display = "none";
					nrkolka=nrkolka+1;
					if(nrkolka==8)
					{
						nrkolka=1;
					}
					wcisniecie=wcisniecie+1;
				});*/
				
				
				
				
				//TIMER
				/*var Aptiming = Date.now();
				var Aptimer = setInterval(function() {
					let Apcirtimer = Date.now() - Aptiming;
					if(nrkolka2>wcisniecie){
						var usuwanie4 = document.getElementById('c'+wcisniecie);
						/*var usuwanie5 = document.getElementById('o'+wcisniecie);
						var usuwanie6 = document.getElementById('apcircle'+wcisniecie);
						usuwanie4.addEventListener("mousedown", function(){
							document.getElementById('c'+nrkolka).style.display = "none"; //BŁĄD
							document.getElementById('o'+nrkolka).style.display = "none";
							document.getElementById('apcircle'+nrkolka).style.display = "none";
							//nrkolka=nrkolka+1;
							wcisniecie=wcisniecie+1;
						});
					}
				}, 1000);*/
					
				function cirlees(x_pos, y_pos) {
					console.log("KOLECZKO: "+cyfra);
					console.log("NUMEEER KOLECZKA: "+nrkolka);
					var ciircle = document.getElementById('apcircle'+cyfra);
					var overcircles = document.getElementById('o'+cyfra);
					var numerek = document.getElementById('c'+cyfra);
					ciircle.style.left = x_pos-75+'px';
					ciircle.style.top = y_pos-75+'px';
					overcircles.style.left = x_pos+'px';
					overcircles.style.top = y_pos+'px';
					numerek.style.left = x_pos+25+'px';
					numerek.style.top = y_pos+25+'px';
				}
				cirlees(song[0+licznik3],song[1+licznik3]);
				if(cyfra==8)
				{
					cyfra=0;
				}
				cyfra=cyfra+1;
				licznik3=licznik3+3;
			}
}, 1);