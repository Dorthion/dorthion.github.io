//GRA NORMALNA
//Wczytanie wstepnych wartosci
		let licznik3=0;
		let combomax=0;
		let combopob=0;
		let combo=0;
		let points=0;
		let p300=0;
		let p100=0;
		let p50=0;
		let miss=0;
		let mnoznik=1;
		let celnosc=100;
		let hp=100;
		let cyfra=1;
		let l1=0;
		let l2=0;
		let l3=0;
		let l4=0;
		let l5=0;
		let l6=0;
		let l7=0;
		let l8=0;
		let l9=0;
		let g=0;
		let nrkolka=1;
		let nrkolka2=0;
		let gra = document.createElement('div');
		let BgMiss = document.getElementById('foo');
		let Cclick = new Audio('Cookiezi/normal-hitclap.wav');
		load('Songs/'+pierwszy1+'/song.js');
		document.getElementById("backk").style.background = "url('Songs/"+pierwszy1+"/bg.jpg')";
//Plansza + wczytanie kółek
		gra.innerHTML += '<img id="llicznikhp2" src="Cookiezi/button-middle.png"/>';
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
		
		//Licznik combo
		let llicznikcombo = document.createElement('p');
		llicznikcombo.setAttribute("id","llicznikcombo");		
		let textnode2 =combo+"x";
		llicznikcombo.innerHTML=textnode2;
		Menug.appendChild(llicznikcombo);
		
		//Licznik pkt
		let llicznikpkt = document.createElement('p');	
		llicznikpkt.setAttribute("id","llicznikpkt");	
		let textnode3 =points;
		llicznikpkt.innerHTML=textnode3;
		Menug.appendChild(llicznikpkt);
		
		//Licznik hp
		let llicznikhp = document.createElement('progress');
		llicznikhp.setAttribute("id","llicznikhp");
		llicznikhp.setAttribute("value","100");
		llicznikhp.setAttribute("max","100");
		gra.appendChild(llicznikhp);
		
		//Licznik Acc
		let llicznikacc = document.createElement('p');	
		llicznikacc.setAttribute("id","llicznikacc");	
		let textnode4 ="Acc: "+celnosc+"%";
		llicznikacc.innerHTML=textnode4;
		Menug.appendChild(llicznikacc);
		
		//Licznik pkt300
		let llicznikpkt300 = document.createElement('p');	
		llicznikpkt300.setAttribute("id","llicznikpkt300");	
		let textnode5 ="300: "+p300;
		llicznikpkt300.innerHTML=textnode5;
		Menug.appendChild(llicznikpkt300);
		
		//Licznik pkt100
		let llicznikpkt100 = document.createElement('p');	
		llicznikpkt100.setAttribute("id","llicznikpkt100");	
		let textnode6 ="100: "+p100;
		llicznikpkt100.innerHTML=textnode6;
		Menug.appendChild(llicznikpkt100);
		
		//Licznik pkt50
		let llicznikpkt50 = document.createElement('p');	
		llicznikpkt50.setAttribute("id","llicznikpkt50");	
		let textnode7 ="50: "+p50;
		llicznikpkt50.innerHTML=textnode7;
		Menug.appendChild(llicznikpkt50);
		
		//Licznik pkt0
		let llicznikpkt0 = document.createElement('p');	
		llicznikpkt0.setAttribute("id","llicznikpkt0");	
		let textnode8 ="Miss: "+miss;
		llicznikpkt0.innerHTML=textnode8;
		Menug.appendChild(llicznikpkt0);
//Gra
		let startTime3 = Date.now();
		//Timer główny
		let interval3 = setInterval(function() {
			let elapsedTime3 = Date.now() - startTime3;
			if(parseInt(song[2])>elapsedTime3){
				llicznikhp.value += 4;
			}
			if(parseInt(song[2+licznik3])<elapsedTime3)
			{
				let reszta=licznik3%8;
				if(g<=7){
				//Tworzenie kółek
					switch(g){
						case 0:{
							k1.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k1.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k1.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle1').style.animation = "ruch 1.0s";
							break;
						}
						case 1:{
							k2.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k2.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k2.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle2').style.animation = "ruch 1.0s";
							break;
						}
						case 2:{
							k3.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k3.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k3.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle3').style.animation = "ruch 1.0s";
							break;
						}
						case 3:{
							k4.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k4.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k4.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle4').style.animation = "ruch 1.0s";
							break;
						}
						case 4:{
							k5.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k5.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k5.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle5').style.animation = "ruch 1.0s";
							break;
						}
						case 5:{
							k6.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k6.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k6.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle6').style.animation = "ruch 1.0s";
							break;
						}
						case 6:{
							k7.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k7.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k7.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle7').style.animation = "ruch 1.0s";
							break;
						}
						case 7:{
							k8.innerHTML += '<img id="apcircle'+cyfra+'" src="Cookiezi/approachcircle.png"/>';
							k8.innerHTML += '<img id="o'+cyfra+'" src="Cookiezi/hitcircleoverlay.png" />';
							k8.innerHTML += '<img id="c'+cyfra+'" src="Cookiezi/default-'+cyfra+'.png" />';
							document.getElementById('apcircle8').style.animation = "ruch 1.0s";
							break;
						}
					}
					g++;
				}
				nrkolka2=nrkolka2+1;
			//Pokazanie, że istnieją
				if(g>7){
					document.getElementById("apcircle"+cyfra).style.display = "inline";
					document.getElementById("o"+cyfra).style.display = "inline";
					document.getElementById("c"+cyfra).style.display = "inline";
				}
			//Zmiana ich pozycji
				function cirlees(x_pos, y_pos) {
					let ciircle = document.getElementById('apcircle'+cyfra);
					let overcircles = document.getElementById('o'+cyfra);
					let numerek = document.getElementById('c'+cyfra);
					ciircle.style.left = x_pos-75+'px';
					ciircle.style.top = y_pos-75+'px';
					overcircles.style.left = x_pos+'px';
					overcircles.style.top = y_pos+'px';
					numerek.style.left = x_pos+25+'px';
					numerek.style.top = y_pos+25+'px';
				}
			//Nabijanie liczników
				cirlees(song[0+licznik3],song[1+licznik3]);
				if(cyfra==8)
				{
					cyfra=0;
				}
				cyfra=cyfra+1;
				licznik3=licznik3+3;
				
				points=points+(300*combo);
			//Zmiana pozycji statystyk
				textnode2 =combo+"x";
				llicznikcombo.innerHTML=textnode2;
				Menug.appendChild(llicznikcombo);
				
				textnode3 =points;
				llicznikpkt.innerHTML=textnode3;
				Menug.appendChild(llicznikpkt);

				textnode4 ="Acc: "+celnosc+"%";
				llicznikacc.innerHTML=textnode4;
				Menug.appendChild(llicznikacc);
				
			//Klikanie
			k1.addEventListener("mousedown", function(){
					document.getElementById("apcircle1").style.display = "none";
					document.getElementById("o1").style.display = "none";
					document.getElementById("c1").style.display = "none";
					Cclick.play();
					l1++;
			});
			if(l1>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l1=0;
			}
			k2.addEventListener("mousedown", function(){
					document.getElementById("apcircle2").style.display = "none";
					document.getElementById("o2").style.display = "none";
					document.getElementById("c2").style.display = "none";
					Cclick.play();
					l2++;
			});
			if(l2>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l2=0;
			}
			k3.addEventListener("mousedown", function(){
					document.getElementById("apcircle3").style.display = "none";
					document.getElementById("o3").style.display = "none";
					document.getElementById("c3").style.display = "none";
					Cclick.play();
					l3++;
			});
			if(l3>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l3=0;
			}
			k4.addEventListener("mousedown", function(){
					document.getElementById("apcircle4").style.display = "none";
					document.getElementById("o4").style.display = "none";
					document.getElementById("c4").style.display = "none";
					Cclick.play();
					l4++;
			});
			if(l4>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l4=0;
			}
			k5.addEventListener("mousedown", function(){
					document.getElementById("apcircle5").style.display = "none";
					document.getElementById("o5").style.display = "none";
					document.getElementById("c5").style.display = "none";
					Cclick.play();
					l5++;
			});
			if(l5>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l5=0;
			}
			k6.addEventListener("mousedown", function(){
					document.getElementById("apcircle6").style.display = "none";
					document.getElementById("o6").style.display = "none";
					document.getElementById("c6").style.display = "none";
					Cclick.play();
					l6++;
			});
			if(l6>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l6=0;
			}
			k7.addEventListener("mousedown", function(){
					document.getElementById("apcircle7").style.display = "none";
					document.getElementById("o7").style.display = "none";
					document.getElementById("c7").style.display = "none";
					Cclick.play();
					l7++;
			});
			if(l7>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l7=0;
			}
			k8.addEventListener("mousedown", function(){
					document.getElementById("apcircle8").style.display = "none";
					document.getElementById("o8").style.display = "none";
					document.getElementById("c8").style.display = "none";
					Cclick.play();
					l8++;
			});	
			if(l8>0){
				p300=p300+1;
					combo++;
					llicznikhp.value += 4;
					textnode5 ="300: "+p300;
					llicznikpkt300.innerHTML=textnode5;
					Menug.appendChild(llicznikpkt300);
					l8=0;
			}
			//Czy miss
			BgMiss.addEventListener("mousedown", function(){
					l9++;
			});	
			if(l9>0)
			{
				combo=0;
				celnosc=celnosc-5;
				miss++;
				l9=0;
				llicznikhp.value -= 10;
				let textnode8 ="Miss: "+miss;
				llicznikpkt0.innerHTML=textnode8;
				Menug.appendChild(llicznikpkt0);
				let textnode4 ="Acc: "+celnosc+"%";
				llicznikacc.innerHTML=textnode4;
				Menug.appendChild(llicznikacc);
			}
			}
			//Licznik hp
			llicznikhp.value -= 0.02;
			if(llicznikhp.value<1){
				clearInterval(interval3);
				load('koniec.js');
			}
			//Czyszczenie po grze oraz wyniki
			if(endtime<elapsedTime3){
				clearInterval(interval3);
				load('wyniki.js');
			}
	}, 1);	