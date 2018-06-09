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
				gra.innerHTML += '<img id="apcircle'+reszta+'" src="Cookiezi/approachcircle.png"/>';
				
				//TIMER
				var Aptiming = Date.now();
				var Aptimer = setInterval(function() {
					let Apcirtimer = Date.now() - Aptiming;
					//document.getElementById("timer").innerHTML = (elapsedTime / 1);
				}, 1);
				
				//gra.innerHTML += '<img id="n'+reszta+'" src="MusicIcons/'+(4-reszta)+'.png" />';
				gra.innerHTML += '<img id="n'+reszta+'" src="Cookiezi/hitcircle3.png" />';
				gra.innerHTML += '<img id="o'+reszta+'" src="Cookiezi/hitcircleoverlay.png" />';
				function cirlees(x_pos, y_pos) {
					console.log("KOLECZKO: "+reszta);
					var ciircle = document.getElementById('apcircle'+reszta);
					var clickcircles = document.getElementById('n'+reszta);
					var overcircles = document.getElementById('o'+reszta);
					clickcircles.style.left = x_pos+'px';
					clickcircles.style.top = y_pos+'px';
					ciircle.style.left = x_pos+'px';
					ciircle.style.top = y_pos+'px';
					overcircles.style.left = x_pos+'px';
					overcircles.style.top = y_pos+'px';
					if(licznik3>9)
						{
							switch(reszta){
								case 0: {//1
								console.log("1");
									var image1 = document.getElementById('n'+4);
									var image1_1 = document.getElementById('o'+4);
									var image1_2 = document.getElementById('apcircle'+4);
									gra.removeChild(image1);
									gra.removeChild(image1_1);
									gra.removeChild(image1_2);
									break;
								}
								case 1: {//2
								console.log("2");
									var image2 = document.getElementById('n'+5);
									var image2_1 = document.getElementById('o'+5);
									var image2_2 = document.getElementById('apcircle'+5);
									gra.removeChild(image2);
									gra.removeChild(image2_1);
									gra.removeChild(image2_2);
									break;
								}
								case 2: {//3
								console.log("3");
									var image3 = document.getElementById('n'+6);
									var image3_1 = document.getElementById('o'+6);
									var image3_2 = document.getElementById('apcircle'+6);
									gra.removeChild(image3);
									gra.removeChild(image3_1);
									gra.removeChild(image3_2);
									break;
								}
								case 3: {//4
								console.log("4");
									var image4 = document.getElementById('n'+7);
									var image4_1 = document.getElementById('o'+7);
									var image4_2 = document.getElementById('apcircle'+7);
									gra.removeChild(image4);
									gra.removeChild(image4_1);
									gra.removeChild(image4_2);
									break;
								}
								case 4: {//5
								console.log("5");
									var image5 = document.getElementById('n0');
									var image5_1 = document.getElementById('o0');
									var image5_2 = document.getElementById('apcircle0');
									gra.removeChild(image5);
									gra.removeChild(image5_1);
									gra.removeChild(image5_2);
									break;
								}
								case 5: {//6
								console.log("6");
									var image6 = document.getElementById('n'+1);
									var image6_1 = document.getElementById('o'+1);
									var image6_2 = document.getElementById('apcircle'+1);
									gra.removeChild(image6);
									gra.removeChild(image6_1);
									gra.removeChild(image6_2);
									break;
								}
								case 6: {//7
								console.log("7");
									var image7 = document.getElementById('n'+2);
									var image7_1 = document.getElementById('o'+2);
									var image7_2 = document.getElementById('apcircle'+2);
									gra.removeChild(image7);
									gra.removeChild(image7_1);
									gra.removeChild(image7_2);
									break;
								}
								case 7: {//8
								console.log("8");
									var image8 = document.getElementById('n'+3);
									var image8_1 = document.getElementById('o'+3);
									var image8_2 = document.getElementById('apcircle'+3);
									gra.removeChild(image8);
									gra.removeChild(image8_1);
									gra.removeChild(image8_2);
									break;
								}
							}
						}
				}
				cirlees(song[0+licznik3],song[1+licznik3]);
				licznik3=licznik3+3;
			}
}, 1);