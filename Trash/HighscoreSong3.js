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
		gra.appendChild(llicznikcombo);
		
		//Licznik pkt
		let llicznikpkt = document.createElement('p');	
		llicznikpkt.setAttribute("id","llicznikpkt");	
		let textnode3 =points;
		llicznikpkt.innerHTML=textnode3;
		gra.appendChild(llicznikpkt);
		
		//Licznik hp
		let llicznikhp = document.createElement('progress');
		llicznikhp.setAttribute("id","llicznikhp");
		llicznikhp.setAttribute("value","100");
		llicznikhp.setAttribute("max","100");
		gra.appendChild(llicznikhp);
		
		//Licznik pkt
		let llicznikacc = document.createElement('p');	
		llicznikacc.setAttribute("id","llicznikacc");	
		let textnode4 ="Acc: "+celnosc+"%";
		llicznikacc.innerHTML=textnode4;
		gra.appendChild(llicznikacc);
//Gra
		let startTime3 = Date.now();
		let interval3 = setInterval(function() {
			let elapsedTime3 = Date.now() - startTime3;
			if(parseInt(song[2+licznik3])<elapsedTime3)
			{
				let reszta=licznik3%8;
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
				
				function cirlees(x_pos, y_pos) {
					console.log("KOLECZKO: "+cyfra);
					console.log("NUMEEER KOLECZKA: "+nrkolka);
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
				cirlees(song[0+licznik3],song[1+licznik3]);
				if(cyfra==8)
				{
					cyfra=0;
				}
				cyfra=cyfra+1;
				licznik3=licznik3+3;
				combo++;
				points=points+(300*combo);
				textnode2 =combo+"x";
				llicznikcombo.innerHTML=textnode2;
				gra.appendChild(llicznikcombo);
				
				textnode3 =points;
				llicznikpkt.innerHTML=textnode3;
				gra.appendChild(llicznikpkt);

				textnode4 ="Acc: "+celnosc+"%";
				llicznikacc.innerHTML=textnode4;
				gra.appendChild(llicznikacc);
			}
			//Czyszczenie po grze
			if(parseInt(song[2+licznik3]+4500)<elapsedTime3){
				load('clear.js');
				gra.style.display="none";
				//let tlo2=
			}
}, 1);

				/*document.getElementById("apcircle1").style.display = "none";
				document.getElementById("o1").style.display = "none";
				document.getElementById("c1").style.display = "none";
				document.getElementById("apcircle2").style.display = "none";
				document.getElementById("o2").style.display = "none";
				document.getElementById("c2").style.display = "none";
				document.getElementById("apcircle3").style.display = "none";
				document.getElementById("o3").style.display = "none";
				document.getElementById("c3").style.display = "none";
				document.getElementById("apcircle4").style.display = "none";
				document.getElementById("o4").style.display = "none";
				document.getElementById("c4").style.display = "none";
				document.getElementById("apcircle5").style.display = "none";
				document.getElementById("o5").style.display = "none";
				document.getElementById("c5").style.display = "none";
				document.getElementById("apcircle6").style.display = "none";
				document.getElementById("o6").style.display = "none";
				document.getElementById("c6").style.display = "none";
				document.getElementById("apcircle7").style.display = "none";
				document.getElementById("o7").style.display = "none";
				document.getElementById("c7").style.display = "none";
				document.getElementById("apcircle8").style.display = "none";
				document.getElementById("o8").style.display = "none";
				document.getElementById("c8").style.display = "none";*/