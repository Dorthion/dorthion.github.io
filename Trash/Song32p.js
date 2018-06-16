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
		let k9 = document.createElement('div');
		k9.setAttribute("id","k9");
		document.getElementById('gra').appendChild(k9);
		let k10 = document.createElement('div');
		k10.setAttribute("id","k10");
		document.getElementById('gra').appendChild(k10);
		let k11 = document.createElement('div');
		k11.setAttribute("id","k11");
		document.getElementById('gra').appendChild(k11);
		let k12 = document.createElement('div');
		k12.setAttribute("id","k12");
		document.getElementById('gra').appendChild(k12);
		let k13 = document.createElement('div');
		k13.setAttribute("id","k13");
		document.getElementById('gra').appendChild(k13);
		let k14 = document.createElement('div');
		k14.setAttribute("id","k14");
		document.getElementById('gra').appendChild(k14);
		let k15 = document.createElement('div');
		k15.setAttribute("id","k15");
		document.getElementById('gra').appendChild(k15);
		let k16 = document.createElement('div');
		k16.setAttribute("id","k16");
		document.getElementById('gra').appendChild(k16);
		let k17 = document.createElement('div');
		k17.setAttribute("id","k17");
		document.getElementById('gra').appendChild(k17);
		let k18 = document.createElement('div');
		k18.setAttribute("id","k18");
		document.getElementById('gra').appendChild(k18);
		let k19 = document.createElement('div');
		k19.setAttribute("id","k19");
		document.getElementById('gra').appendChild(k19);
		
		let k20 = document.createElement('div');
		k20.setAttribute("id","k20");
		document.getElementById('gra').appendChild(k20);
		let k21 = document.createElement('div');
		k21.setAttribute("id","k21");
		document.getElementById('gra').appendChild(k21);
		let k22 = document.createElement('div');
		k22.setAttribute("id","k22");
		document.getElementById('gra').appendChild(k22);
		let k23 = document.createElement('div');
		k23.setAttribute("id","k23");
		document.getElementById('gra').appendChild(k23);
		let k24 = document.createElement('div');
		k24.setAttribute("id","k24");
		document.getElementById('gra').appendChild(k24);
		let k25 = document.createElement('div');
		k25.setAttribute("id","k25");
		document.getElementById('gra').appendChild(k25);
		let k26 = document.createElement('div');
		k26.setAttribute("id","k26");
		document.getElementById('gra').appendChild(k26);
		let k27 = document.createElement('div');
		k27.setAttribute("id","k27");
		document.getElementById('gra').appendChild(k27);
		let k28 = document.createElement('div');
		k28.setAttribute("id","k28");
		document.getElementById('gra').appendChild(k28);
		let k29 = document.createElement('div');
		k29.setAttribute("id","k29");
		document.getElementById('gra').appendChild(k29);
		let k30 = document.createElement('div');
		k30.setAttribute("id","k30");
		document.getElementById('gra').appendChild(k30);
		let k31 = document.createElement('div');
		k31.setAttribute("id","k31");
		document.getElementById('gra').appendChild(k31);
		let k32 = document.createElement('div');
		k32.setAttribute("id","k32");
		document.getElementById('gra').appendChild(k32);
//Gra
		var startTime3 = Date.now();
		var interval3 = setInterval(function() {
			var elapsedTime3 = Date.now() - startTime3;
			if(parseInt(song[2+licznik3])<elapsedTime3)
			{
				console.log(song[2+licznik3]);
				console.log(elapsedTime3);
				console.log("woot");
				let reszta=licznik3%32;
				//gra.innerHTML += '<img id="apcircle'+reszta+'" src="Cookiezi/approachcircle.png"/>';
				
				//gra.innerHTML += '<img id="n'+reszta+'" src="Cookiezi/hitcircle3.png" />';
				//gra.innerHTML += '<img id="o'+reszta+'" src="Cookiezi/hitcircleoverlay.png" />';
				if(g<=31){
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
						case 8:{
							k9.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k9.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k9.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-1.png" />';
							break;
						}
						case 9:{
							k10.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k10.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k10.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-2.png" />';
							break;
						}
						case 10:{
							k11.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k11.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k11.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-3.png" />';
							break;
						}
						case 11:{
							k12.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k12.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k12.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-4.png" />';
							break;
						}
						case 12:{
							k13.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k13.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k13.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-5.png" />';
							break;
						}
						case 13:{
							k14.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k14.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k14.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-6.png" />';
							break;
						}
						case 14:{
							k15.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k15.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k15.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-7.png" />';
							break;
						}
						case 15:{
							k16.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k16.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k16.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-8.png" />';
							break;
						}
						case 16:{
							k17.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k17.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k17.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-1.png" />';
							break;
						}
						case 17:{
							k18.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k18.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k18.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-2.png" />';
							break;
						}
						case 18:{
							k19.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k19.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k19.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-3.png" />';
							break;
						}
						case 19:{
							k20.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k20.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k20.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-4.png" />';
							break;
						}
						case 20:{
							k21.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k21.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k21.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-5.png" />';
							break;
						}
						case 21:{
							k22.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k22.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k22.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-6.png" />';
							break;
						}
						case 22:{
							k23.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k23.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k23.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-7.png" />';
							break;
						}
						case 23:{
							k24.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k24.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k24.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-8.png" />';
							break;
						}
						case 24:{
							k25.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k25.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k25.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-1.png" />';
							break;
						}
						case 25:{
							k26.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k26.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k26.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-2.png" />';
							break;
						}
						case 26:{
							k27.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k27.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k27.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-3.png" />';
							break;
						}
						case 27:{
							k28.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k28.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k28.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-4.png" />';
							break;
						}
						case 28:{
							k29.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k29.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k29.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-5.png" />';
							break;
						}
						case 29:{
							k30.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k30.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k30.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-6.png" />';
							break;
						}
						case 30:{
							k31.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k31.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k31.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-7.png" />';
							break;
						}
						case 31:{
							k32.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k32.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k32.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-8.png" />';
							break;
						}
					}
					g++;
				}
				nrkolka2=nrkolka2+1;
				if(g>31){
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
				if(cyfra==32)
				{
					cyfra=0;
				}
				cyfra=cyfra+1;
				licznik3=licznik3+3;
			}
}, 1);